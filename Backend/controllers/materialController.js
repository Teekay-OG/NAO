const Material = require("../models/Material");
const mongoose = require("mongoose");

const getMaterials = async (req, res) => {
  try {
    const materials = await Material.find({});

    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const createMaterial = async (req, res) => {
  try {
    const material = await Material.create(req.body);

    res.status(201).json(material);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getMaterial = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Material not found",
        });
    }

    try {

        const material = await Material.findById(id);

        if (!material) {
            return res.status(404).json({
                error: "Material not found",
            });
        }

        res.status(200).json(material);

    } catch (error) {

        res.status(500).json({
            error: error.message,
        });

    }

};

const updateMaterial = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Material not found",
    });
  }

   const material = await Material.findOneAndUpdate(
   { _id:id },
   {
    ...req.body,
   },
   {
    new: true, 
  }
   );

   if(!material) {
    return res.status(404).json({
      error: "Material not found"
    });
   }

   res.status(200).json(material);

}

const deleteMaterial = async (req, res) => {
  const { id } = req.params;

  // Check if the ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Material not found",
    });
  }

  
  const material = await Material.findOneAndDelete({ _id: id });

 
  if (!material) {
    return res.status(404).json({
      error: "Material not found",
    });
  }

  
  res.status(200).json(material);
};

const seedMaterials = async (req, res) => {
  try {
    await Material.deleteMany({});

    const materials = await Material.insertMany([
      {
        name: "Titanium",
        category: "Strategic Metal",
        description: "High-strength lightweight metal used in aerospace and defense.",
        strategicImportance: "Critical for aircraft manufacturing.",
        dependencyScore: 92,
        riskScore: 95,
        affectedIndustries: [
          "Aerospace",
          "Defense",
          "Medical"
        ]
      },
      {
        name: "Nickel",
        category: "Battery Metal",
        description: "Essential for EV batteries and stainless steel.",
        strategicImportance: "Critical for electric vehicle production.",
        dependencyScore: 81,
        riskScore: 28,
        affectedIndustries: [
          "Automotive",
          "Energy",
          "Manufacturing"
        ]
      },
      {
        name: "Iridium",
        category: "Precious Metal",
        description: "Used in semiconductors and electronics.",
        strategicImportance: "Critical for advanced electronics.",
        dependencyScore: 89,
        riskScore: 90,
        affectedIndustries: [
          "Electronics",
          "Telecommunications"
        ]
      },
      {
        name: "Ruthenium",
        category: "Precious Metal",
        description: "Used in chip manufacturing and data storage.",
        strategicImportance: "Important for semiconductor production.",
        dependencyScore: 85,
        riskScore: 82,
        affectedIndustries: [
          "Semiconductors",
          "Technology"
        ]
      }
    ]);

    res.status(200).json(materials);

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};



module.exports = {
  getMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  seedMaterials,
};