const express = require("express");
const uuid = require('uuid');
const router = express.Router();
const members = require('../../members')

router.get('/', (req, res) => {
    // هيك حوله ل جاسون ابجكت من غير ستؤينغغيفاي لانه بسوي كل اشي اوتو
    res.json(members);
});

//get single member
router.get('/:id', (req, res) => {

    // if the id that passed from the req  it doesnt exist found gonna equal to false 
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        // wich means the data that u request it is not found and its a bad req
        res.status(400);
        res.json({ msg: 'member not found' });
    }
});

// creat a member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "it is a bad req" });
    }
    members.push(newMember);
    res.json(members);
});

// update members 
router.put('/:id', (req, res) => {

    // if the id that passed from the req  it doesnt exist found gonna equal to false 
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(member => {

            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: "Member was updated", member });
                // res.json(member);
            }
        });
    }
    else {
        // wich means the data that u request it is not found and its a bad req
        res.status(400).json({ msg: 'member not found' });
    }
});

// delete member
router.delete('/:id', (req, res) => {

    // if the id that passed from the req  it doesnt exist found gonna equal to false 
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({ msg: "member has been deleted", members: members.filter(member => member.id !== parseInt(req.params.id)) });
    }
    else {
        // wich means the data that u request it is not found and its a bad req
        res.status(400).json({ msg: 'member not found' });
    }
});

module.exports = router;
