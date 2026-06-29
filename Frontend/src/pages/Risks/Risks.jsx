import "./Risks.css";

function Risks() {
  return (
    <div className="risks-page">

      <div className="risks-header">

        <div>
          <h1>Supply Chain Risks</h1>
          <p>Monitor active risks affecting strategic materials.</p>
        </div>

        <input
          type="text"
          placeholder="Search risks..."
          className="risk-search"
        />

      </div>

      <div className="filter-bar">
        <button className="active">All</button>
        <button>High</button>
        <button>Medium</button>
        <button>Low</button>
      </div>

      <div className="risk-list">

        {/* Risk 1 */}

        <div className="risk-item">

          <div className="risk-top">
            <div>
              <h2>Export Restrictions</h2>
              <p>China</p>
            </div>

            <span className="badge high">
              High
            </span>
          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Titanium</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Increasing 📈</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Aircraft manufacturing delays</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

        {/* Risk 2 */}

        <div className="risk-item">

          <div className="risk-top">

            <div>
              <h2>Mining Disruptions</h2>
              <p>Indonesia</p>
            </div>

            <span className="badge high">
              High
            </span>

          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Nickel</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Increasing 📈</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Battery production delays</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

        {/* Risk 3 */}

        <div className="risk-item">

          <div className="risk-top">

            <div>
              <h2>Price Volatility</h2>
              <p>Global</p>
            </div>

            <span className="badge medium">
              Medium
            </span>

          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Iridium</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Stable ➜</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Higher production costs</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

        {/* Risk 4 */}

        <div className="risk-item">

          <div className="risk-top">

            <div>
              <h2>Supplier Concentration</h2>
              <p>South Africa</p>
            </div>

            <span className="badge high">
              High
            </span>

          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Iridium</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Increasing 📈</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Semiconductor production delays</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

        {/* Risk 5 */}

        <div className="risk-item">

          <div className="risk-top">

            <div>
              <h2>Geopolitical Tensions</h2>
              <p>Eastern Europe</p>
            </div>

            <span className="badge medium">
              Medium
            </span>

          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Ruthenium</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Stable ➜</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Export uncertainty</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

        {/* Risk 6 */}

        <div className="risk-item">

          <div className="risk-top">

            <div>
              <h2>War & Regional Conflict</h2>
              <p>Eastern Europe</p>
            </div>

            <span className="badge high">
              High
            </span>

          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Titanium</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Increasing 📈</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Disruption of transportation routes</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

        {/* Risk 7 */}

        <div className="risk-item">

          <div className="risk-top">

            <div>
              <h2>Environmental Regulations</h2>
              <p>Global</p>
            </div>

            <span className="badge low">
              Low
            </span>

          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Nickel</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Stable ➜</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Higher compliance costs</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

        {/* Risk 8 */}

        <div className="risk-item">

          <div className="risk-top">

            <div>
              <h2>Energy Supply Disruptions</h2>
              <p>Global</p>
            </div>

            <span className="badge medium">
              Medium
            </span>

          </div>

          <div className="risk-details">

            <div>
              <strong>Material</strong>
              <p>Ruthenium</p>
            </div>

            <div>
              <strong>Trend</strong>
              <p>Increasing 📈</p>
            </div>

            <div>
              <strong>Operational Impact</strong>
              <p>Reduced refining capacity</p>
            </div>

          </div>

          <button className="view-btn">
            View Analysis →
          </button>

        </div>

      </div>

    </div>
  );
}

export default Risks;