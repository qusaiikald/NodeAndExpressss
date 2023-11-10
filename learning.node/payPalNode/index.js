const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AU0GKKj6sZ-8MH8loUalnokw9TCQeil4R1xGtzRHgDtSjLwg2KpFl6Xm5Mu4LWB7__THZsaasEnZG0TB',
    'client_secret': 'EO7sVrJnNNiOry0MRQL0ut5z759xT_-l2QfU1Xbx7lDseAAlxB4g_kaEGGtpiQG_vcJm-bV-zU-PQiNg'
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "red socks",
                    "sku": "001",
                    "price": "23",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "23"
            },
            "description": "hat for the best team ever"
        }]
    };
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) throw error;
        else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href); // Redirect the user to PayPal approval URL
                }
            }
        }
    });
});
// لما تعمل ريجايركت فوق الهريف بوديك على السكسس فكأنك عملت قيت ريكويست 
app.get("/success", (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId; // Fix the typo here

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "23.00"
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send("Success");
        }
    });
});

app.get("/cancel", (req, res) => {
    res.send('Canceled');
});

app.listen(3000, () => console.log('Server running at 3000'));
