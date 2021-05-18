import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: Number, required: true },
});

module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
