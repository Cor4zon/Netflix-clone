const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
// REGISTER
router.post('/register', async (req, res, next) => {
  const cipherPassword = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.SECRET_KEY,
  ).toString();

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cipherPassword,
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json('Wrong email or password');
    }

    const enteredPassword = req.body.password;
    // Decrypt proccess
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const realPassword = bytes.toString(CryptoJS.enc.Utf8);

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: '5d' },
    );

    const { password, ...info } = user._doc;

    if (realPassword === enteredPassword) {
      res.status(200).json({ ...info, accessToken });
    } else {
      res.status(401).json('Wrong email or password');
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
