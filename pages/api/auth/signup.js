import { connectToDatabase } from '../../../util/db/db';
import { hashPassword } from '../../../util/auth/auth';
import User from '../../../models/User'

const client = connectToDatabase()

async function signup(req, res) {
    if (req.method !== 'POST') {
        return;
    }

    console.log('req.body', req.body)
    const email = req.body.enteredEmail;
    const password = req.body.enteredPassword;
    const confirmPassword = req.body.enteredConfirmPassword;

    if (!email || !email.includes('@') || !password || password.trim().length < 7 || password !== confirmPassword) {
        res.status(422).json({ message: 'Invalid input' });
        return;
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        res.status(422).json({ message: 'User exists already!' });
        return;
    }

    const hashedPassword = await hashPassword(password)
    const newUser = new User({
        email: email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
    })

    const result = await newUser.save()
    if (result) {
        console.log('result', result)
        res.status(201).json({ message: 'Successfully sign up!' })
    } else {
        res.status(400).json({ message: 'Cannot store user to the database.' })
    }
};

export default signup;