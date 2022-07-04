import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users =[]

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
    console.log(req.params)
    res.send(req.params)
})



export default router;