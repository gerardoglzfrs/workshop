"use strict"
const userService = require("../services/userService");

const saveUser = (req, res) => {
    console.log("===BODY", req.body)
    const{name, lastName, age} = req.body;
    const user = {name, lastName, age};
    userService
    .saveUser(user)
    .then(response => {
        res.status(201).send(response);
    }).catch(err => {
        console.log(err);
    })
}; 

module.exports = {
    saveUser
};