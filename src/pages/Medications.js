import React, { useState } from "react";
import {
  Plus,
  Pill,
  Clock,
  CalendarDays,
  CheckCircle2,
  Circle,
  AlertTriangle,
  MoreVertical,
  X,
  Search,
} from "lucide-react";

const initialMedications = [
  {
    id: 1,
    name: "Vitamin D3",
    dosage: "60,000 IU",
    frequency: "Once a week",
    time: "08:00 AM",
    instructions: "Take after breakfast",
    doctor: "Dr. Priya Sharma",
    status: "Active",
  },
  {
    id: 2,
    name: "Iron Supplement",
    dosage: "100 mg",
    frequency: "Once daily",
    time: "01:00 PM",
    instructions: "Take after lunch",
    doctor: "Dr. Priya Sharma",
    status: "Active",
  },
  {
    id: 3,
    name: "Calcium",
    dosage: "500 mg",
    frequency: "Once daily",
    time: "08:00 PM",
    instructions: "Take after dinner",
    doctor: "Dr. Rahul Verma",
    status: "Active",
  },
  {
    id: 4,
    name: "Paracetamol",
    dosage: "500 mg",
    frequency: "As needed",
    time: "If required",
    instructions: "Use only as directed",
    doctor: "Dr. Rahul Verma",
    status: "As Needed",
  },
];

function Medications() {
  const [medications, setMedications] = useState(initialMedications);
  const [taken, setTaken] = useState([1]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleTaken = (id) => {
    setTaken((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const filteredMedications = medications.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = medications.filter(
    (med) => med.status === "Active"
  ).length;

  return (
    <div className="medications-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">MEDICATION MANAGEMENT</span>
          <h1>Medications</h1>
          <p>
            Keep track of your medicines, dosage and daily schedule.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Add Medication
        </button>
      </div>

      {/* SUMMARY */}
      <div className="med-summary">

        <div className="med-summary-card">
          <div className="med-summary-icon blue">
            <Pill size={21} />
          </div>
          <div>
            <span>Active Medications</span>
            <strong>{activeCount}</strong>
          </div>
        </div>

        <div className="med-summary-card">
          <div className="med-summary-icon green">
            <CheckCircle2 size={21} />
          </div>
          <div>
            <span>Today's Doses</span>
            <strong>3</strong>
          </div>
        </div>

        <div className="med-summary-card">
          <div className="med-summary-icon purple">
            <Clock size={21} />
          </div>
          <div>
            <span>Taken Today</span>
            <strong>{taken.length}</strong>
          </div>
        </div>

        <div className="med-summary-card">
          <div className="med-summary-icon orange">
            <AlertTriangle size={21} />
          </div>
          <div>
            <span>As Needed</span>
            <strong>1</strong>
          </div>
        </div>

      </div>

      {/* TODAY'S SCHEDULE */}
      <div className="medication-main-grid">

        <div className="today-medication-card">

          <div className="med-card-header">
            <div>
              <h2>Today's Schedule</h2>
              <p>Your medication timeline for today</p>
            </div>

            <div className="today-date">
              <CalendarDays size={15} />
              Today
            </div>
          </div>

          <div className="medication-timeline">

            {medications
              .filter((med) => med.status === "Active")
              .map((med) => {
                const isTaken = taken.includes(med.id);

                return (
                  <div
                    className={`timeline-medication ${
                      isTaken ? "completed" : ""
                    }`}
                    key={med.id}
                  >

                    <div className="timeline-time">
                      <strong>{med.time}</strong>
                    </div>

                    <div className="timeline-line">
                      <div className="timeline-dot">
                        {isTaken ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          <Circle size={16} />
                        )}
                      </div>
                    </div>

                    <div className="timeline-content">

                      <div className="timeline-med-header">
                        <div>
                          <h3>{med.name}</h3>
                          <span>{med.dosage}</span>
                        </div>

                        <button
                          className={`taken-btn ${
                            isTaken ? "taken" : ""
                          }`}
                          onClick={() => toggleTaken(med.id)}
                        >
                          {isTaken ? (
                            <>
                              <CheckCircle2 size={14} />
                              Taken
                            </>
                          ) : (
                            <>
                              <Circle size={14} />
                              Mark as Taken
                            </>
                          )}
                        </button>
                      </div>

                      <p>{med.instructions}</p>

                    </div>

                  </div>
                );
              })}

          </div>

        </div>

        {/* ADHERENCE */}
        <div className="adherence-card">

          <div className="med-card-header">
            <div>
              <h2>Medication Adherence</h2>
              <p>Your recent medication progress</p>
            </div>
          </div>

          <div className="adherence-score">
            <div className="adherence-circle">
              <strong>92%</strong>
              <span>Adherence</span>
            </div>
          </div>

          <div className="adherence-stats">

            <div>
              <span>Taken</span>
              <strong>23</strong>
            </div>

            <div>
              <span>Missed</span>
              <strong>2</strong>
            </div>

            <div>
              <span>Total</span>
              <strong>25</strong>
            </div>

          </div>

          <div className="adherence-message">
            <CheckCircle2 size={16} />
            <p>
              Great consistency! Keep following your prescribed
              medication schedule.
            </p>
          </div>

        </div>

      </div>

      {/* ALL MEDICATIONS */}
      <div className="all-medications-section">

        <div className="section-title-row">
          <div>
            <h2>All Medications</h2>
            <span>
              {filteredMedications.length} medications in your vault
            </span>
          </div>

          <div className="med-search">
            <Search size={16} />
            <input
              placeholder="Search medications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="medications-list">

          {filteredMedications.map((med) => (

            <div className="medication-row" key={med.id}>

              <div className="medication-info">

                <div className="med-pill-icon">
                  <Pill size={20} />
                </div>

                <div>
                  <h3>{med.name}</h3>
                  <span>{med.dosage}</span>
                </div>

              </div>

              <div className="med-column">
                <span>Frequency</span>
                <strong>{med.frequency}</strong>
              </div>

              <div className="med-column">
                <span>Schedule</span>
                <strong>{med.time}</strong>
              </div>

              <div className="med-column">
                <span>Prescribed by</span>
                <strong>{med.doctor}</strong>
              </div>

              <div className="med-status">
                <span className={med.status === "Active" ? "active" : "needed"}>
                  {med.status}
                </span>
              </div>

              <button className="med-more-btn">
                <MoreVertical size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* ADD MEDICATION MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="medication-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">
              <div>
                <span className="page-eyebrow">NEW MEDICATION</span>
                <h2>Add Medication</h2>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-fields">

              <div className="form-group">
                <label>Medication Name</label>
                <input placeholder="e.g. Vitamin D3" />
              </div>

              <div className="form-group">
                <label>Dosage</label>
                <input placeholder="e.g. 500 mg" />
              </div>

              <div className="form-group">
                <label>Frequency</label>
                <select>
                  <option>Once daily</option>
                  <option>Twice daily</option>
                  <option>Once a week</option>
                  <option>As needed</option>
                </select>
              </div>

              <div className="form-group">
                <label>Time</label>
                <input type="time" />
              </div>

            </div>

            <div className="form-group medication-instructions">
              <label>Instructions</label>
              <input placeholder="e.g. Take after breakfast" />
            </div>

            <div className="modal-footer">

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={() => setShowModal(false)}
              >
                <Plus size={17} />
                Add Medication
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Medications;