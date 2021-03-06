import express from "express";
import { createUser } from "../controllers/users.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users =[]

// all routes are starting with /users

router.get('/', (req, res) => {
    res.send(users)
});

router.post('/', createUser);

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    //id to delete 123
    //Elijah 123
    //Klaus 122
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted frpm the database.`)
})

router.patch(':id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const userTobeUpdated = users.find((user) => user.id === id);

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if(age) {
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated`)


})


export default router;