const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'administrator') {
        return res.status(403).json({ message: "Access denied. Only administrators can perform this action." });
    }
    next();
};

export default checkAdmin;
