import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users =[]

// all routes are starting with /users

router.get('/', (req, res) => {
    res.send(users)
});

router.post('/', (req, res) => {

    const user = req.body;
    // since they are being used only once
    // const userId = uuidv4();
    // const userWithId = { ...user, id: uuidv4()}
    users.push( { ...user, id: uuidv4()})

    res.send(`User with the username ${user.firstName} added to the database`)
});

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



export default router;