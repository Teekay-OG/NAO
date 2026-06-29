import "./RiskCard.css";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

function RiskCard({ risk }) {

  return (

    <div className="risk-item">

      <div className="risk-top">

        <div>

          <h2>{risk.title}</h2>

          <p>{risk.location}</p>

        </div>

        <span
          className={`badge ${risk.severity.toLowerCase()}`}
        >
          {risk.severity}
        </span>

      </div>

      <div className="risk-details">

        <div>

          <strong>Material</strong>

          <p>{risk.materialId?.name}</p>

        </div>

        <div>

          <strong>Trend</strong>

          <p>

            {risk.trend}

            {" "}

            {risk.trend === "Increasing" ? (
              <FaArrowUp />
            ) : (
              <FaArrowRight />
            )}

          </p>

        </div>

        <div>

          <strong>Operational Impact</strong>

          <p>{risk.operationalImpact}</p>

        </div>

      </div>

      <button className="view-btn">

        View Analysis →

      </button>

    </div>

  );

}

export default RiskCard;