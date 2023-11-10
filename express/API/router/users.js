import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
let users = [
    {
        firstName: "qusai",
        lastName: "kald",
        age: "25",
        id: uuidv4()
    },
    {
        firstName: "ahmed",
        lastName: "kald",
        age: "20",
        id: uuidv4()
    },
    {
        firstName: "salim",
        lastName: "kald",
        age: "18",
        id: uuidv4()
    }
];

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const newUser = {
        firstName: req.body.firstName || "",
        lastName: req.body.lastName || "",
        age: req.body.age || "",
        id: uuidv4()
    };
    users.push(newUser);
    res.json({ msg: "new user has been added", users });
});

//  /user/2 =>req.params
router.get('/:id', (req, res) => {

    const { id } = req.params.id;
    const foundUser = users.found((user) => user.id === id);
    if (foundUser)
        res.send(foundUser);
    else {
        res.status(400);
        res.send(" invalid id requisted");
    }

});

router.delete('/:id', (req, res) => {
    const { id } = req.params.id;

    users = users.filter((user) => { user.id !== id });
    res.json({ msg: "user hes been deleted" });

});

router.patch("/:ids", (req, res) => {
    const { id } = req.params.id;

    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => { user.id === id });

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been apdated`);

});

export default router;