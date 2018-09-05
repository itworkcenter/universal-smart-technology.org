const express = require("express");
const router = express.Router();

//User Model
const User = require("../../models/User");

//@route GET api/users
//@desc Get all Users
//@access public
router.get("/", (req, res) =>{
    User.find()
    .sort({date: -1})
    .then(users => res.json(users))
});

//@route POST api/users
//@desc Create A User
//@access public
router.post("/", (req, res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone
    });
    newUser.save().then(user => res.json(user));
});

//@route DELETE api/users/:id
//@desc Delete A User
//@access public
router.delete("/:id", (req, res) =>{
    User.findById(req.params.id)
    .then(user => user.remove().then(()=>res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;