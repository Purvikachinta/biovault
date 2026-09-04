import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  FileText,
  FlaskConical,
  Stethoscope,
  Pill,
  Syringe,
  Calendar,
  MapPin,
  MoreVertical,
  Eye,
  Trash2,
  X,
  Upload,
  Sparkles,
} from "lucide-react";

const records = [
  {
    id: 1,
    title: "Complete Blood Count",
    type: "Lab Report",
    date: "Aug 28, 2026",
    doctor: "Dr. Priya Sharma",
    hospital: "Apollo Hospitals",
    icon: FlaskConical,
    color: "blue",
    analyzed: true,
  },
  {
    id: 2,
    title: "General Health Checkup",
    type: "Medical Report",
    date: "Aug 20, 2026",
    doctor: "Dr. Rahul Verma",
    hospital: "Care Hospital",
    icon: Stethoscope,
    color: "green",
    analyzed: true,
  },
  {
    id: 3,
    title: "Prescription - Medication",
    type: "Prescription",
    date: "Aug 15, 2026",
    doctor: "Dr. Priya Sharma",
    hospital: "Apollo Hospitals",
    icon: Pill,
    color: "purple",
    analyzed: false,
  },
  {
    id: 4,
    title: "Vaccination Record",
    type: "Vaccination",
    date: "Jul 10, 2026",
    doctor: "Dr. Anil Kumar",
    hospital: "Government Hospital",
    icon: Syringe,
    color: "orange",
    analyzed: false,
  },
];

function MedicalRecords() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(search.toLowerCase()) ||
      record.type.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || record.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="records-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">YOUR HEALTH DATA</span>
          <h1>Medical Records</h1>
          <p>
            Securely manage and access all your medical records in one place.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Add Record
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="record-summary">

        <div className="record-summary-card">
          <div className="summary-icon blue">
            <FileText size={21} />
          </div>
          <div>
            <span>Total Records</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="record-summary-card">
          <div className="summary-icon green">
            <FlaskConical size={21} />
          </div>
          <div>
            <span>Lab Reports</span>
            <strong>5</strong>
          </div>
        </div>

        <div className="record-summary-card">
          <div className="summary-icon purple">
            <Pill size={21} />
          </div>
          <div>
            <span>Prescriptions</span>
            <strong>4</strong>
          </div>
        </div>

        <div className="record-summary-card">
          <div className="summary-icon orange">
            <Syringe size={21} />
          </div>
          <div>
            <span>Vaccinations</span>
            <strong>3</strong>
          </div>
        </div>

      </div>

      {/* SEARCH + FILTER */}
      <div className="records-toolbar">

        <div className="record-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search your records..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="record-filters">
          {["All", "Lab Report", "Medical Report", "Prescription", "Vaccination"].map(
            (item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            )
          )}
        </div>

      </div>

      {/* RECORDS */}
      <div className="records-section">

        <div className="section-title-row">
          <div>
            <h2>Your Records</h2>
            <span>{filteredRecords.length} records found</span>
          </div>

          <button className="sort-btn">
            Newest first
          </button>
        </div>

        <div className="records-grid">

          {filteredRecords.map((record) => {
            const Icon = record.icon;

            return (
              <div className="record-card" key={record.id}>

                <div className="record-card-top">

                  <div className={`record-icon ${record.color}`}>
                    <Icon size={23} />
                  </div>

                  <button className="more-btn">
                    <MoreVertical size={19} />
                  </button>

                </div>

                <div className="record-card-body">

                  <span className="record-type">
                    {record.type}
                  </span>

                  <h3>{record.title}</h3>

                  <div className="record-info">
                    <div>
                      <Calendar size={15} />
                      {record.date}
                    </div>

                    <div>
                      <Stethoscope size={15} />
                      {record.doctor}
                    </div>

                    <div>
                      <MapPin size={15} />
                      {record.hospital}
                    </div>
                  </div>

                </div>

                <div className="record-card-footer">

                  {record.analyzed ? (
                    <span className="ai-badge">
                      <Sparkles size={13} />
                      AI Analyzed
                    </span>
                  ) : (
                    <span className="pending-badge">
                      Not analyzed
                    </span>
                  )}

                 <button
  className="view-btn"
  onClick={() => navigate(`/records/${record.id}`)}
>
  <Eye size={16} />
  View
</button>

                </div>

              </div>
            );
          })}

        </div>

        {filteredRecords.length === 0 && (
          <div className="no-records">
            <FileText size={40} />
            <h3>No records found</h3>
            <p>Try changing your search or filter.</p>
          </div>
        )}

      </div>

      {/* ADD RECORD MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="record-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">
              <div>
                <span className="page-eyebrow">NEW RECORD</span>
                <h2>Add Medical Record</h2>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="upload-area">
              <div className="upload-icon">
                <Upload size={25} />
              </div>

              <h3>Upload your medical document</h3>

              <p>
                PDF, JPG or PNG files up to 10MB
              </p>

              <button className="secondary-btn">
                Choose File
              </button>
            </div>

            <div className="modal-fields">

              <div className="form-group">
                <label>Record Name</label>
                <input
                  type="text"
                  placeholder="e.g. Blood Test Report"
                />
              </div>

              <div className="form-group">
                <label>Record Type</label>
                <select>
                  <option>Lab Report</option>
                  <option>Medical Report</option>
                  <option>Prescription</option>
                  <option>Vaccination</option>
                </select>
              </div>

            </div>

            <div className="modal-footer">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button className="primary-btn">
                <Plus size={17} />
                Save Record
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default MedicalRecords;