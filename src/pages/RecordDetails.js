import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Share2,
  Calendar,
  UserRound,
  MapPin,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

function RecordDetails() {
  const navigate = useNavigate();

  return (
    <div className="record-details-page">

      {/* TOP BAR */}
      <div className="details-topbar">
        <button
          className="back-btn"
          onClick={() => navigate("/records")}
        >
          <ArrowLeft size={18} />
          Back to Records
        </button>

        <div className="details-actions">
          <button className="outline-btn">
            <Download size={16} />
            Download
          </button>

          <button className="outline-btn">
            <Share2 size={16} />
            Share
          </button>
        </div>
      </div>

      {/* RECORD HEADER */}
      <div className="record-detail-header">

        <div className="detail-title-area">

          <div className="large-record-icon">
            <FileText size={27} />
          </div>

          <div>
            <span className="page-eyebrow">LAB REPORT</span>
            <h1>Complete Blood Count</h1>

            <div className="detail-meta">
              <span>
                <Calendar size={14} />
                Aug 28, 2026
              </span>

              <span>
                <UserRound size={14} />
                Dr. Priya Sharma
              </span>

              <span>
                <MapPin size={14} />
                Apollo Hospitals
              </span>
            </div>
          </div>

        </div>

        <span className="analyzed-status">
          <CheckCircle2 size={15} />
          AI Analyzed
        </span>

      </div>

      {/* MAIN CONTENT */}
      <div className="record-detail-grid">

        {/* DOCUMENT PREVIEW */}
        <div className="document-card">

          <div className="card-heading">
            <div>
              <h2>Document</h2>
              <p>Original uploaded medical report</p>
            </div>
          </div>

          <div className="document-preview">

            <div className="document-paper">

              <div className="paper-header">
                <strong>APOLLO HOSPITALS</strong>
                <span>Laboratory Report</span>
              </div>

              <div className="paper-line large"></div>
              <div className="paper-line"></div>
              <div className="paper-line"></div>

              <div className="paper-section">
                <strong>Patient Information</strong>

                <div className="paper-row">
                  <span>Patient Name</span>
                  <span>Purvika</span>
                </div>

                <div className="paper-row">
                  <span>Report Date</span>
                  <span>28 Aug 2026</span>
                </div>
              </div>

              <div className="paper-section">
                <strong>Complete Blood Count</strong>

                <div className="paper-row">
                  <span>Hemoglobin</span>
                  <span>12.4 g/dL</span>
                </div>

                <div className="paper-row">
                  <span>WBC Count</span>
                  <span>7,200 /µL</span>
                </div>

                <div className="paper-row">
                  <span>Platelets</span>
                  <span>2.45 lakh /µL</span>
                </div>

                <div className="paper-row">
                  <span>RBC Count</span>
                  <span>4.6 million /µL</span>
                </div>
              </div>

              <div className="paper-section">
                <strong>Doctor's Notes</strong>

                <div className="paper-line"></div>
                <div className="paper-line"></div>
                <div className="paper-line short"></div>
              </div>

            </div>

          </div>

        </div>

        {/* AI EXPLANATION */}
        <div className="ai-explanation-card">

          <div className="ai-heading">

            <div className="ai-heading-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <span>BIOVAULT AI</span>
              <h2>Report Explained</h2>
            </div>

          </div>

          <div className="ai-intro">
            <Sparkles size={16} />
            <p>
              Here's a simple explanation of the important information
              found in this report.
            </p>
          </div>

          {/* OVERVIEW */}
          <div className="ai-section">

            <h3>Overall Summary</h3>

            <p>
              Your blood test results appear generally within the
              expected range. The available values do not show an
              obvious abnormality requiring immediate attention.
            </p>

          </div>

          {/* NORMAL */}
          <div className="ai-result normal">

            <div className="result-icon">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <strong>Results look normal</strong>
              <p>
                Hemoglobin, WBC count, platelet count and RBC count
                are within the reference ranges shown in this report.
              </p>
            </div>

          </div>

          {/* ATTENTION */}
          <div className="ai-result attention">

            <div className="result-icon">
              <AlertCircle size={18} />
            </div>

            <div>
              <strong>What to keep in mind</strong>
              <p>
                Lab results should always be interpreted together
                with symptoms, medical history and other investigations.
              </p>
            </div>

          </div>

          {/* SIMPLE EXPLANATION */}
          <div className="simple-explanation">

            <div className="simple-heading">
              <Lightbulb size={17} />
              <strong>In simple words</strong>
            </div>

            <p>
              Your blood counts look reassuring based on the values
              available here. Continue following your doctor's advice
              and keep this report stored in your health vault.
            </p>

          </div>

          {/* SAFETY */}
          <div className="ai-disclaimer">
            <strong>AI assists. Doctors decide.</strong>
            <span>
              This explanation is informational and does not replace
              professional medical advice.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RecordDetails;