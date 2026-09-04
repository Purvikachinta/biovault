import React from "react";
import {
  ShieldAlert,
  Phone,
  HeartPulse,
  AlertTriangle,
  Pill,
  UserRound,
  Droplets,
  QrCode,
  Download,
  LockKeyhole,
} from "lucide-react";

function EmergencyCard() {
  const emergencyData = {
    name: "Alex Johnson",
    bloodGroup: "O+",
    allergies: ["Penicillin", "Peanuts"],
    conditions: ["Asthma"],
    medications: ["Salbutamol Inhaler", "Cetirizine"],
    emergencyContact: "Sarah Johnson",
    contactNumber: "+91 98765 43210",
  };

  return (
    <div className="emergency-page">

      {/* HEADER */}
      <div className="emergency-header">
        <div>
          <div className="emergency-title-row">
            <ShieldAlert size={30} />
            <h1>Emergency Card</h1>
          </div>

          <p>
            Critical medical information available when it matters most.
          </p>
        </div>

        <button className="emergency-download-btn">
          <Download size={18} />
          Download Card
        </button>
      </div>

      {/* SECURITY NOTICE */}
      <div className="emergency-security">
        <LockKeyhole size={20} />

        <div>
          <strong>Emergency Access Enabled</strong>
          <span>
            Your critical health information can be accessed during an emergency.
          </span>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="emergency-card">

        {/* CARD TOP */}
        <div className="emergency-card-top">
          <div>
            <span className="emergency-label">
              BIOVAULT EMERGENCY MEDICAL ID
            </span>

            <h2>{emergencyData.name}</h2>

            <p>Personal Health Record</p>
          </div>

          <div className="blood-group">
            <Droplets size={20} />
            <span>{emergencyData.bloodGroup}</span>
          </div>
        </div>

        {/* IMPORTANT ALERT */}
        <div className="critical-alert">
          <AlertTriangle size={22} />

          <div>
            <strong>Critical Information</strong>
            <p>
              Please check allergies and current medications before treatment.
            </p>
          </div>
        </div>

        {/* INFORMATION GRID */}
        <div className="emergency-info-grid">

          {/* ALLERGIES */}
          <div className="emergency-info-box">
            <div className="info-heading">
              <AlertTriangle size={19} />
              <span>Allergies</span>
            </div>

            <div className="tag-container">
              {emergencyData.allergies.map((allergy) => (
                <span className="allergy-tag" key={allergy}>
                  {allergy}
                </span>
              ))}
            </div>
          </div>

          {/* CONDITIONS */}
          <div className="emergency-info-box">
            <div className="info-heading">
              <HeartPulse size={19} />
              <span>Medical Conditions</span>
            </div>

            <div className="tag-container">
              {emergencyData.conditions.map((condition) => (
                <span className="condition-tag" key={condition}>
                  {condition}
                </span>
              ))}
            </div>
          </div>

          {/* MEDICATIONS */}
          <div className="emergency-info-box">
            <div className="info-heading">
              <Pill size={19} />
              <span>Current Medications</span>
            </div>

            <ul className="medication-list">
              {emergencyData.medications.map((medication) => (
                <li key={medication}>{medication}</li>
              ))}
            </ul>
          </div>

          {/* EMERGENCY CONTACT */}
          <div className="emergency-info-box">
            <div className="info-heading">
              <UserRound size={19} />
              <span>Emergency Contact</span>
            </div>

            <h3>{emergencyData.emergencyContact}</h3>

            <a
              href={`tel:${emergencyData.contactNumber}`}
              className="call-contact-btn"
            >
              <Phone size={17} />
              {emergencyData.contactNumber}
            </a>
          </div>

        </div>

        {/* QR SECTION */}
        <div className="emergency-qr-section">

          <div className="fake-qr">
            <QrCode size={90} />
          </div>

          <div>
            <h3>Scan to Access Emergency Profile</h3>

            <p>
              Authorized emergency responders can scan this code to view
              essential medical information.
            </p>

            <span className="qr-security">
              🔐 Patient-controlled access
            </span>
          </div>

        </div>

        {/* FOOTER */}
        <div className="emergency-card-footer">
          <span>Powered by BioVault</span>
          <span>Last updated: Today</span>
        </div>

      </div>
    </div>
  );
}

export default EmergencyCard;