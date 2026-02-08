import express from "express";

const router =express.Router();

router.get("/signin", (req,res) => {
    res.send("sign in");
});

router.get("/login", (req,res) => {
    res.send("login here ");
});

export default router;