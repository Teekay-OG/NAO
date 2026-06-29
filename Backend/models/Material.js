const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const materialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    strategicImportance: {
      type: String,
      required: true,
    },

    dependencyScore: {
      type: Number,
      required: true,
    },

    riskScore: {
      type: Number,
      required: true,
    },

    affectedIndustries: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Material", materialSchema);