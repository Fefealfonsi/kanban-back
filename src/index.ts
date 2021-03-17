import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { userRouter } from "./controller/router/userRouter";
import { cardRouter } from "./controller/router/cardRouter";
const app: Express = express();

app.use(express.json());
app.use(cors());


app.use("/user", userRouter)

app.use("/card", cardRouter)

const server = app.listen(process.env.PORT || 5000, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});