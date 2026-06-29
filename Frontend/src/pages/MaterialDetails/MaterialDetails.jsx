import "./MaterialDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MaterialDetails() {

    const { id } = useParams();

    const [material, setMaterial] = useState(null);

    useEffect(() => {

        const fetchMaterial = async () => {

            try {

                const response = await axios.get(
                    `http://localhost:4000/api/materials/${id}`
                );

                setMaterial(response.data);

            } catch (error) {
    console.log(error);
    console.log(error.response);
}

        };

        fetchMaterial();

    }, [id]);

    if (!material) {
        return <h2>Loading...</h2>;
    }

     const riskLevel =
   material.riskScore >= 70
     ? "High"
     : material.riskScore >= 30
     ? "Medium"
     : "Low";

    return (

        <div className="material-details">

            <Link
                to="/materials"
                className="back-link"
            >
                <FaArrowLeft />
                Back to Materials
            </Link>

            <div className="hero">

                <div>

                    <h1>{material.name}</h1>

                    <p className="category">
                        {material.category}
                    </p>

                    <p className="description">
                        {material.description}
                    </p>

                </div>

                <span className={`badge ${riskLevel.toLowerCase()}`}>
                    {riskLevel} Risk
                </span>

            </div>

            <div className="score-grid">

                <div className="score-card">

                    <h3>Dependency Score</h3>

                    <h2>{material.dependencyScore}</h2>

                </div>

                <div className="score-card">

                    <h3>Risk Score</h3>

                    <h2>{material.riskScore}</h2>

                </div>

            </div>

            <div className="info-card">

                <h2>Strategic Importance</h2>

                <p>
                    {material.strategicImportance}
                </p>

            </div>

            <div className="info-card">

                <h2>Affected Industries</h2>

                <ul>

                    {material.affectedIndustries.map((industry) => (

                        <li key={industry}>
                            {industry}
                        </li>

                    ))}

                </ul>

            </div>

            <div className="info-card">

                <h2>Current Risks</h2>

                <ul>

                    <li>Export Restrictions</li>

                    <li>Supply Chain Disruptions</li>

                </ul>

            </div>

            <div className="info-card">

                <h2>Recommendations</h2>

                <ul>

                    <li>Diversify suppliers</li>

                    <li>Increase inventory buffers</li>

                    <li>Monitor geopolitical developments</li>

                </ul>

            </div>

        </div>

    );

}

export default MaterialDetails;