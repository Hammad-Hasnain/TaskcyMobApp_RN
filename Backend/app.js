import express from 'express'
// import { login } from './controllers/authController.js';
import { router } from './router/appRouter.js';
import mongoose from 'mongoose';

const app = express()
const port = 5000;


mongoose.connect('mongodb+srv://hammadhasnain81:admin123@taskcycluster.q8t6edg.mongodb.net/')
mongoose.connection.on("connected", () => { console.log('Mongo db connected') })
mongoose.connection.on("error", (err) => { console.log('Mongo db not connected==>', err) })




// Use body-parser middleware
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// app.get('/get',login)

app.use('/', router)
// app.router()
// router.get('/get', login)


app.listen(port, () => console.log(`server is running on ${port}`))




