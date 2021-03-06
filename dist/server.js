"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const typeorm_1 = require("typeorm");
const Task_1 = require("./entities/Task");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        entities: [Task_1.Task],
    });
    const app = express_1.default();
    const port = process.env.PORT;
    const origin = process.env.CORS_ORIGIN || "";
    const originLocal = process.env.CORS_ORIGIN_LOCAL || "";
    const allowlist = [origin, originLocal];
    app.set("trust proxy", 1);
    app.use(cors_1.default({
        origin: allowlist,
        credentials: true,
    }));
    app.use(router_1.default);
    app.listen(port, () => {
        console.log(`We are running at http://localhost:${port}`);
    });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=server.js.map