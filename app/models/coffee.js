const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coffeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: [
      {
        type: String,
        required: true,
      },
    ],
    reviews: {
      type: String,
      required: true,
    },
    comment: [
      {
        idUser: {
          type: Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        contentComment: {
          type: String,
          required: true,
        },
        timeComment: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
  {
    collection: "coffee",
  }
);
const coffeeModel = mongoose.model("coffee", coffeeSchema);

module.exports = coffeeModel;
