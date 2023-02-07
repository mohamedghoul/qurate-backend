import jwt from 'jsonwebtoken';

// Verify token
export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: 'Access denied' });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(401).json({ error: 'Access denied' });
        }
        req.user = verified;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}