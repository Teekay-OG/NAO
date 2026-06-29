const Risk = require("../models/Risk");
const Material = require("../models/Material");
const mongoose = require("mongoose");

const getRisks = async (req, res) => {
  try {
    const risks = await Risk.find({}).populate("materialId");

    res.status(200).json(risks);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getRisk = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Risk not found",
    });
  }

  const risk = await Risk.findById(id).populate("materialId");

  if (!risk) {
    return res.status(404).json({
      error: "Risk not found",
    });
  }

  res.status(200).json(risk);
};

const seedRisks = async (req, res) => {
  try {
    await Risk.deleteMany({});

    const titanium = await Material.findOne({ name: "Titanium" });
    const nickel = await Material.findOne({ name: "Nickel" });
    const iridium = await Material.findOne({ name: "Iridium" });
    const ruthenium = await Material.findOne({ name: "Ruthenium" });

    if (!titanium || !nickel || !iridium || !ruthenium) {
      return res.status(404).json({
        error: "Please seed materials first.",
      });
    }

    const risks = await Risk.insertMany([
      // TITANIUM
      {
        materialId: titanium._id,
        title: "Export Restrictions",
        severity: "High",
        location: "China",
        description: "Potential export restrictions on titanium exports.",
        operationalImpact:
          "Disruptions to aircraft manufacturing and increased procurement costs.",
        trend: "Increasing",

        industryImpacts: [
          {
            industry: "Aerospace",
            impact: "Aircraft production delays due to titanium shortages.",
          },
          {
            industry: "Defense",
            impact: "Reduced availability of military aircraft components.",
          },
          {
            industry: "Medical",
            impact: "Potential shortages of titanium implants.",
          },
        ],

        recommendations: [
          {
            title: "Diversify Suppliers",
            description:
              "Reduce dependence on a single supplier or country.",
            priority: "High",
          },
          {
            title: "Increase Buffer Inventory",
            description:
              "Maintain additional titanium inventory for critical operations.",
            priority: "High",
          },
          {
            title: "Alternative Sourcing",
            description:
              "Identify suppliers from countries with lower geopolitical risk.",
            priority: "Medium",
          },
        ],
      },

      {
        materialId: titanium._id,
        title: "Supplier Concentration",
        severity: "Medium",
        location: "Global",
        description: "Heavy dependence on a few global suppliers.",
        operationalImpact:
          "Reduced resilience against supply chain disruptions.",
        trend: "Stable",

        industryImpacts: [
          {
            industry: "Aerospace",
            impact: "Limited sourcing flexibility.",
          },
          {
            industry: "Defense",
            impact: "Longer procurement lead times.",
          },
        ],

        recommendations: [
          {
            title: "Develop Secondary Suppliers",
            description:
              "Qualify additional suppliers to reduce dependency.",
            priority: "High",
          },
          {
            title: "Long-Term Contracts",
            description:
              "Secure stable supply agreements with key partners.",
            priority: "Medium",
          },
        ],
      },

      // NICKEL
      {
        materialId: nickel._id,
        title: "Mining Disruptions",
        severity: "High",
        location: "Indonesia",
        description: "Mining disruptions reducing nickel supply.",
        operationalImpact:
          "Battery manufacturing delays and increased production costs.",
        trend: "Increasing",

        industryImpacts: [
          {
            industry: "Automotive",
            impact: "Electric vehicle battery shortages.",
          },
          {
            industry: "Energy",
            impact: "Delayed energy storage projects.",
          },
        ],

        recommendations: [
          {
            title: "Increase Strategic Stock",
            description:
              "Maintain additional nickel inventory for critical production.",
            priority: "High",
          },
          {
            title: "Supplier Diversification",
            description:
              "Source nickel from multiple mining regions.",
            priority: "High",
          },
        ],
      },

      {
        materialId: nickel._id,
        title: "Price Volatility",
        severity: "Medium",
        location: "Global",
        description: "Rapid fluctuations in nickel prices.",
        operationalImpact:
          "Higher manufacturing and procurement costs.",
        trend: "Stable",

        industryImpacts: [
          {
            industry: "Automotive",
            impact: "Increased EV production costs.",
          },
          {
            industry: "Manufacturing",
            impact: "Reduced profit margins.",
          },
        ],

        recommendations: [
          {
            title: "Long-Term Purchase Agreements",
            description:
              "Lock in pricing with strategic suppliers.",
            priority: "Medium",
          },
        ],
      },

      // IRIDIUM
      {
        materialId: iridium._id,
        title: "Supply Shortage",
        severity: "High",
        location: "South Africa",
        description: "Limited iridium production worldwide.",
        operationalImpact:
          "Semiconductor manufacturing delays.",
        trend: "Increasing",

        industryImpacts: [
          {
            industry: "Semiconductors",
            impact: "Chip production delays.",
          },
          {
            industry: "Electronics",
            impact: "Component shortages.",
          },
        ],

        recommendations: [
          {
            title: "Prioritize Critical Production",
            description:
              "Allocate iridium to high-value products first.",
            priority: "High",
          },
          {
            title: "Material Substitution",
            description:
              "Evaluate suitable substitute materials where possible.",
            priority: "Medium",
          },
        ],
      },

      {
        materialId: iridium._id,
        title: "Geopolitical Instability",
        severity: "Medium",
        location: "Africa",
        description: "Political instability affecting mining operations.",
        operationalImpact:
          "Supply uncertainty and delayed deliveries.",
        trend: "Increasing",

        industryImpacts: [
          {
            industry: "Electronics",
            impact: "Supply chain instability.",
          },
          {
            industry: "Telecommunications",
            impact: "Equipment production delays.",
          },
        ],

        recommendations: [
          {
            title: "Monitor Geopolitical Events",
            description:
              "Track developments affecting supplier regions.",
            priority: "High",
          },
        ],
      },

      // RUTHENIUM
      {
        materialId: ruthenium._id,
        title: "Price Volatility",
        severity: "Medium",
        location: "Global",
        description: "Market volatility affecting ruthenium prices.",
        operationalImpact:
          "Higher semiconductor production costs.",
        trend: "Stable",

        industryImpacts: [
          {
            industry: "Semiconductors",
            impact: "Higher chip production costs.",
          },
          {
            industry: "Technology",
            impact: "Reduced manufacturing margins.",
          },
        ],

        recommendations: [
          {
            title: "Hedge Commodity Prices",
            description:
              "Reduce exposure through financial hedging strategies.",
            priority: "Medium",
          },
        ],
      },

      {
        materialId: ruthenium._id,
        title: "Supply Constraints",
        severity: "High",
        location: "Global",
        description: "Limited global production capacity.",
        operationalImpact:
          "Reduced semiconductor manufacturing output.",
        trend: "Increasing",

        industryImpacts: [
          {
            industry: "Semiconductors",
            impact: "Production delays.",
          },
          {
            industry: "Technology",
            impact: "Delayed hardware launches.",
          },
        ],

        recommendations: [
          {
            title: "Increase Inventory Levels",
            description:
              "Maintain additional ruthenium stock for critical operations.",
            priority: "High",
          },
          {
            title: "Expand Supplier Network",
            description:
              "Develop relationships with additional global suppliers.",
            priority: "Medium",
          },
        ],
      },
    ]);

    res.status(200).json(risks);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  getRisks,
  getRisk,
  seedRisks,
};