import { Router } from "express";
import { v4 } from "uuid";
import { database } from "../db.js";
import { compare, hashSync } from "bcrypt";

let profiles = database.profiles;
const profileRouter = new Router();

profileRouter.get("/profiles/:id", (req, res) => {
    const profile = profiles.find((profile) => profile.id === req.params.id);

    if (!profile) {
        return res.status(403).json({ message: "Пользователь не найден" });
    }

    res.status(200).json(profile);
});

// for debugging
profileRouter.get("/profiles", (req, res) => {
    res.status(200).json(profiles);
});

profileRouter.post("/login", (req, res) => {
    try {
        const { email, password } = req.body;

        const profileFromDb = profiles.find((profile) => profile.email === email);

        if (!profileFromDb) {
            return res.status(403).json({ message: "Пользователь не найден" });
        }

        const isPasswordValid = compare(password, profileFromDb.password);
        if (isPasswordValid) {
            return res.json(profileFromDb);
        }

        return res.status(403).json({ message: "Неправильный пароль" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

profileRouter.post("/registration", (req, res) => {
    const { username, password } = req.body;

    const isExist = profiles.some((profile) => profile.email === username);
    if (isExist) {
        return res.status(403).json({ message: "Имя пользователя занято" });
    }

    const hashPassword = hashSync(password, 10);

    profiles.push({
        id: v4(),
        firstname: "",
        phoneNumber: "",
        email: username,
        address: "",
        password: hashPassword,
        cart: {},
    });

    const resProfile = profiles.find((profile) => profile.email === username);

    return res.json(resProfile);
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
