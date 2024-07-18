import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import logger from './utils/logger.js';

async function main() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      logger.info(`Listening on port http://localhost:${PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    logger.error(error.message, error);
  }
}

main();
