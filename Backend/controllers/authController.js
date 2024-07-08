import userModel from "../models/userSchema.js"
import bcrypt from 'bcrypt'


export const login = async (req, res) => {
    try {
        const { email, pass } = req.body

        // res.json({
        //     email,
        //     pass
        // })

        // return

        const user = await userModel.find({ email })
        console.log('user ==> ', user)
        console.log('user[0].pass ==> ', user[0].pass)
        // return


        const passCompared = await bcrypt.compare(pass, user[0].pass)

        console.log('passcomapred==>', passCompared)

        if (passCompared) {
            res.json({
                message: 'successfully login'
            })
        }
        else {
            res.json({
                message: 'Invalid credentials'
            })

        }


    } catch (error) {
        console.log('error==> ', error)
    }

}


export const signup = async (req, res) => {
    try {
        const { username, email, pass } = req.body

        // res.send(email)
        // return
        // get users from db
        const users = await userModel.find({ email })



        console.log('users ==> ', users[0])
        // console.log('users ==> ', users[0].email === email)

        // return
        // will not create user if already exist
        if (users.length != 0) {
            res.json({
                message: 'user already exists'
            })
            return
        }


        // pass encryption
        const hashedPass = await bcrypt.hash(pass, 10)

        console.log("check=>> ", bcrypt.compare(hashedPass, pass))
        res.json({
            username,
            email,
            pass: hashedPass

        })


        // will creat user if doestn't exist
        const user = await userModel.create({
            username,
            email,
            pass: hashedPass
        })

        // console.log('signup')
        res.json({
            message: 'successfully signup',
            // username,
            // email,
            // pass
        })



    } catch (error) {
        console.log('error==> ', error)
    }

}