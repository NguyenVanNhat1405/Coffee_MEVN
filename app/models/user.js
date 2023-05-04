const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    refreshToken:{
        type: String,
        default: "",
    },
   
    posts: [
        {
          coffe: {
            type: Schema.Types.ObjectId,
            ref: "coffee",
            required: true,
          },
        }
    ],
   
},
    {
        timestamps: true
    },
    {
        collection: "user"
    }
);
const userModels = mongoose.model("users", userSchema)
module.exports = userModels