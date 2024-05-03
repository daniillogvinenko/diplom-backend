import express from "express";
import profileRouter from "./router/profilesRouter.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
app.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

app.use(cors());
app.use(profileRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
