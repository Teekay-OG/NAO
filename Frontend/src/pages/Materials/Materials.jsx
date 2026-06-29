import "./Materials.css";
import { FaSearch, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Materials() {
  const navigate = useNavigate();

  // Stores all materials from MongoDB
  const [materials, setMaterials] = useState([]);

  // Stores the search text
  const [search, setSearch] = useState("");

  // Runs once when the page loads
  useEffect(() => {
  const fetchMaterials = async () => {
    try {
      const response = await axios.get(
        "https://nao-ysu5.onrender.com/api/materials"
      );

      console.log("API Response:", response.data);

      setMaterials(response.data);

    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  fetchMaterials();
}, []);

  // Search filter
  const filteredMaterials = materials.filter((material) =>
    material.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="materials-page">

      <div className="materials-header">

        <div>
          <h1>Materials</h1>
          <p>Monitor strategic materials across global supply chains.</p>
        </div>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search materials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="materials-table">

        <div className="table-header">

          <span>Material</span>
          <span>Category</span>
          <span>Risk</span>
          <span>Dependency</span>
          <span></span>

        </div>

        {filteredMaterials.map((material) => (

          <div
            key={material._id}
            className="table-row"
            onClick={() => navigate(`/materials/${material._id}`)}
          >

            <span>{material.name}</span>

            <span>{material.category}</span>

            <span
              className={`badge ${
                material.riskScore >= 90
                  ? "high"
                  : material.riskScore >= 80
                  ? "medium"
                  : "low"
              }`}
            >
              {material.riskScore >= 90
                ? "High"
                : material.riskScore >= 80
                ? "Medium"
                : "Low"}
            </span>

            <span>{material.dependencyScore}</span>

            <FaChevronRight />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Materials;