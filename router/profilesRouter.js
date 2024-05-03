import { Router } from "express";

import { database } from "../db.js";

let profiles = database.profiles;
const profileRouter = new Router();

profileRouter.get("/profiles/:id", (req, res) => {
    const profile = profiles.find((profile) => profile.id === req.params.id);

    res.status(200).json(profile);
});

profileRouter.post("/login", (req, res) => {
    try {
        const { email, password } = req.body;

        const profileFromDb = profiles.find((profile) => profile.email === email);

        if (!profileFromDb) {
            return res.status(403).json({ message: "Пользователь не найден" });
        }

        if (profileFromDb.password === password) {
            return res.json(profileFromDb);
        }

        return res.status(403).json({ message: "Неправильный пароль" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

profileRouter.patch("/profiles/:id", (req, res) => {
    let profile = profiles.find((profile) => profile.id === req.params.id);
    if (req.body.cart) {
        profile.cart = { ...req.body.cart };
        return res.json(profile);
    }

    if (req.body.firstname) {
        profile.address = req.body.address;
        profile.firstname = req.body.firstname;
        profile.phoneNumber = req.body.phoneNumber;
        return res.json(profile);
    }
});

export default profileRouter;
