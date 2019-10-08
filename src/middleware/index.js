import { applyMiddleware } from "redux";
import logger from "./logger";

// disable logger in production.
export default applyMiddleware(logger);
