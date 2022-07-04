import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js"

const app = express();
const PORT = 5000;

// will be using json data in our application

app.use(bodyParser.json());
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    console.log("Test")
    res.send("Hello World")
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


