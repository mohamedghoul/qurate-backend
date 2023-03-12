import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Token from '../models/Token.js';

// Register a user
export async function register(req, res) {
    const { email, password, firstName, lastName } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });

        const savedUser = await newUser.save();
        savedUser.password = undefined;
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Log a user in
export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ error: 'User does not exist' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const newToken = await Token.create({
            token,
            user: user._id,
        });
        user.password = undefined;
        res.status(200).json({ token, user });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Log a user out
export async function logout(req, res) {
    try {
        await Token.deleteOne({ token: req.headers.authorization });
        res.status(200).json({ message: 'Logged out' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}