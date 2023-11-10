import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./router/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// select the router 
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send("Hello From Hame Page"));

app.listen(PORT, () => { console.log(`Server running at port: http://localhost:${PORT}`); });


