const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

// UPDATE
router.put("/:id", verify, async (req, res, next) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            const cipherPassword = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updateUser = await User.findByIdAndUpdate(req.user.id, {
                $set: req.body,
            },
            { new: true}
            );
            res.status(200).json(updateUser); 
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account!");
    }
})

// DELETE

// GET

// GET ALL

// GET USER STATS

module.exports = router;