const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../Models/userModel");
const e = require("express");
const jwt = require("jsonwebtoken");
const blackList = require("../blackList");

const userRoute = express.Router();

userRoute.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.send("this email id already registered");
  } else {
    const newPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body, password: newPassword });
    res.send({
      msg: "User has registered",
      data: newUser,
    });
  }
});

userRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.send("Signup first");
    } else {
      const verify = await bcrypt.compare(password, user.password);
      if (!verify) {
        res.send("password is incorrect");
      } else {
        const token = await jwt.sign(
          { userId: user._id, email: user.email },
          "secret",
          { expiresIn: "1h" }
        );
        res.send({
          mag: "Login successfull",
          token: token,
        });
      }
    }
  } catch (error) {
    res.send({
      msg: error,
    });
  }
});

userRoute.get('/logout',async(req,res)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)
    if(!token){
        res.send('session has expired')
    }
    else{
        blackList.push(token)
        res.send('Logout')
    }
    } catch (error) {
        res.send({
            error:error
        })
    }
    
})

module.exports = userRoute;
