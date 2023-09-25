const express = require("express");

const blackList = require("../blackList");
const auth = require("../Middleware/auth");
const postModel = require("../Models/postModel");

const postRoute = express.Router();

postRoute.post("/employees", auth, async (req, res) => {
  try {
    const post = await postModel.create(req.body);

    res.send({
      msg: "employee added successfully",
      post: post,
    });
  } catch (error) {
    res.send({
      msg: error,
    });
  }
});
postRoute.get("/employees", async (req, res) => {
  try {
    const data = await postModel.find();

    res.send({
      data: data,
    });
  } catch (error) {
    res.send({
      msg: error,
    });
  }
});

postRoute.patch("/employees/:id",auth, async (req, res) => {
  try {
    const id = req.params.id;

    const update = await postModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.send({
      msg: "employee added successfully",
      post: update,
    });
  } catch (error) {
    res.send({
      msg: error,
    });
  }
});
postRoute.delete("/employees/:id", async (req, res) => {
  try {
    const id = req.params.id;

      await postModel.findByIdAndDelete(
      {_id:id}
    );

    res.send({
      msg: "employee deleted successfully",
    });
  } catch (error) {
    res.send({
      msg: error,
    });
  }
});

postRoute.get('/employees',async(req,res)=>{
    try {
        
    } catch (error) {
        res.send('error')
    }
})

module.exports = postRoute;
