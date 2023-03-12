import jwt from 'jsonwebtoken';
import Token from '../models/Token.js';

// Verify token
export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: 'Access denied: Token not provided' });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Access denied: Invalid token' });
            }
            Token.findOne({ token: token }, (err, token) => {
                if (err) {
                    return res.status(401).json({ error: 'Access denied: Invalid token' });
                }
                if (!token) {
                    return res.status(401).json({ error: 'Access denied: Invalid token' });
                }
                if (token.expiry < Date.now()) {
                    return res.status(401).json({ error: 'Access denied: Token expired' });
                }
            });
            req.user = decoded;
            next();
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}