const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


router.post(
  '/createuser',
  body('email', 'enter valid mail').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {

    let success=false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, error:errors.array()[0].msg});
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        success=false;
        return res.status(400).json({ success, error:"email already exist"})

      }
      const userPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: userPassword,
      })

      success=true;

      res.json({success});

    } catch (error) {
      
      res.json({success,error:"Some Internal error occured"})
    }


  },
);

router.post(
  '/login',
  body('email', 'enter valid mail').isEmail(),
  body('password').exists(),
  async (req, res) => {
    let success=false;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, error: errors.array()[0].msg });
    }



    try {
      const { email, password } = req.body;

      let user = await User.findOne({ email: email });

      if (!user) {
        success=false;
        return res.status(400).json({ success,error: "Entered email not exists" })
      }
      const comparePassword = await bcrypt.compare(password, user.password);

      if (!comparePassword) {
        success = false;
        return res.status(400).json({success, error: "Enter correct password"})
      }

      success=true;

      res.json({success});

    } catch (error) {
     
      res.json({success,error:"Some Internal error occured"})
    
    }


  }
);


module.exports = router;