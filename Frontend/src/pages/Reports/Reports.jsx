import "./Reports.css";
import { FaFilePdf, FaChartBar, FaDownload } from "react-icons/fa";

function Reports() {
  return (
    <div className="reports-page">

      <div className="reports-header">
        <h1>Reports</h1>
        <p>
          Generate strategic supply chain intelligence reports.
        </p>
      </div>

      <div className="report-cards">

        <div className="report-card">

          <FaFilePdf className="report-icon" />

          <h2>Risk Assessment Report</h2>

          <p>
            Generate a complete overview of current strategic material risks.
          </p>

          <button disabled>
            <FaDownload />
            Generate PDF
          </button>

        </div>

        <div className="report-card">

          <FaChartBar className="report-icon" />

          <h2>Market Intelligence Report</h2>

          <p>
            Review supply chain trends and market developments.
          </p>

          <button disabled>
            <FaDownload />
            Generate PDF
          </button>

        </div>

      </div>

      <div className="coming-section">

        <h2>Upcoming Features</h2>

        <ul>

          <li>✔ AI-generated recommendations</li>

          <li>✔ Executive summary export</li>

          <li>✔ Country comparison reports</li>

          <li>✔ Material dependency analysis</li>

          <li>✔ Printable PDF reports</li>

        </ul>

      </div>

    </div>
  );
}

export default Reports;