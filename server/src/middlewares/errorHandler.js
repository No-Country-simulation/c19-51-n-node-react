import logger from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
    logger.error(err.message, err);
    res.status(500).json({ message: err.message });
};
