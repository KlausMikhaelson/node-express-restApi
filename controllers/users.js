import { v4 as uuidv4 } from "uuid";


export const createUser = (req, res) => {

    const user = req.body;
    // since they are being used only once
    // const userId = uuidv4();
    // const userWithId = { ...user, id: uuidv4()}
    users.push( { ...user, id: uuidv4()})

    res.send(`User with the username ${user.firstName} added to the database`)
}

export const getUser =  (req, res) => {
    res.send(users)
}

export const getId =  (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteId = (req, res) => {
    const { id } = req.params;
    //id to delete 123
    //Elijah 123
    //Klaus 122
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted frpm the database.`)
}

export const patchId = (req, res) => {
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


};