const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const riskSchema = new Schema(
  {
    materialId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Material",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    operationalImpact: {
      type: String,
      required: true,
    },

    trend: {
      type: String,
      required: true,
    },

    industryImpacts: [
      {
        industry: {
          type: String,
          required: true,
        },
        impact: {
          type: String,
          required: true,
        },
      },
    ],

    recommendations: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        priority: {
          type: String,
          enum: ["High", "Medium", "Low"],
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Risk", riskSchema);