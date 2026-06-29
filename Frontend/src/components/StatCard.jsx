import "./StatCard.css";

function StatCard({ icon, number, title, color }) {
  return (
    <div className={`stat-card ${color}`}>

      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">

        <h2 className="stat-number">
          {number}
        </h2>

        <p className="stat-title">
          {title}
        </p>

      </div>

    </div>
  );
}

export default StatCard;