const mongoose = require("mongoose");
const { Schema } = mongoose;

const userShema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: String, required: true}
});

module.exports = mongoose.model("user", userShema);