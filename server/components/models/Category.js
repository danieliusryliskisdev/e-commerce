const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
