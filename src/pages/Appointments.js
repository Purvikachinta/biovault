import React, { useState } from "react";
import {
  Plus,
  CalendarDays,
  Clock,
  MapPin,
  Video,
  Stethoscope,
  CheckCircle2,
  XCircle,
  MoreVertical,
  Search,
  X,
} from "lucide-react";

const initialAppointments = [
  {
    id: 1,
    doctor: "Dr. Priya Sharma",
    specialty: "General Physician",
    hospital: "Apollo Hospitals",
    date: "Sep 08, 2026",
    time: "10:30 AM",
    type: "In-person",
    status: "Upcoming",
    reason: "Regular health checkup",
  },
  {
    id: 2,
    doctor: "Dr. Rahul Verma",
    specialty: "Internal Medicine",
    hospital: "Care Hospital",
    date: "Sep 18, 2026",
    time: "04:00 PM",
    type: "Video Consultation",
    status: "Upcoming",
    reason: "Follow-up consultation",
  },
  {
    id: 3,
    doctor: "Dr. Anil Kumar",
    specialty: "General Physician",
    hospital: "Government Hospital",
    date: "Aug 12, 2026",
    time: "11:00 AM",
    type: "In-person",
    status: "Completed",
    reason: "Routine consultation",
  },
  {
    id: 4,
    doctor: "Dr. Priya Sharma",
    specialty: "General Physician",
    hospital: "Apollo Hospitals",
    date: "Jul 21, 2026",
    time: "09:30 AM",
    type: "In-person",
    status: "Completed",
    reason: "Health review",
  },
];

function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [filter, setFilter] = useState("Upcoming");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesFilter =
      filter === "All" || appointment.status === filter;

    const query = search.toLowerCase();

    const matchesSearch =
      appointment.doctor.toLowerCase().includes(query) ||
      appointment.hospital.toLowerCase().includes(query) ||
      appointment.specialty.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  const upcomingCount = appointments.filter(
    (item) => item.status === "Upcoming"
  ).length;

  const completedCount = appointments.filter(
    (item) => item.status === "Completed"
  ).length;

  return (
    <div className="appointments-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">HEALTHCARE PLANNING</span>
          <h1>Appointments</h1>
          <p>
            Manage your upcoming consultations and healthcare visits.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Add Appointment
        </button>
      </div>

      {/* SUMMARY */}
      <div className="appointment-summary">

        <div className="appointment-summary-card">
          <div className="appointment-icon blue">
            <CalendarDays size={21} />
          </div>

          <div>
            <span>Upcoming</span>
            <strong>{upcomingCount}</strong>
          </div>
        </div>

        <div className="appointment-summary-card">
          <div className="appointment-icon green">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>
        </div>

        <div className="appointment-summary-card">
          <div className="appointment-icon purple">
            <Clock size={21} />
          </div>

          <div>
            <span>Next Appointment</span>
            <strong>4 days</strong>
          </div>
        </div>

        <div className="appointment-summary-card">
          <div className="appointment-icon orange">
            <Video size={21} />
          </div>

          <div>
            <span>Video Consultations</span>
            <strong>1</strong>
          </div>
        </div>

      </div>

      {/* NEXT APPOINTMENT */}
      <div className="next-appointment-card">

        <div className="next-appointment-left">

          <div className="next-calendar">
            <span>SEP</span>
            <strong>08</strong>
          </div>

          <div>
            <span className="next-label">NEXT APPOINTMENT</span>

            <h2>Dr. Priya Sharma</h2>

            <p>
              General Physician · Apollo Hospitals
            </p>

            <div className="next-details">

              <span>
                <Clock size={14} />
                10:30 AM
              </span>

              <span>
                <MapPin size={14} />
                In-person visit
              </span>

            </div>
          </div>

        </div>

        <div className="appointment-reminder">
          <CheckCircle2 size={16} />
          Reminder set
        </div>

      </div>

      {/* APPOINTMENT LIST */}
      <div className="appointments-section">

        <div className="appointment-toolbar">

          <div>
            <h2>My Appointments</h2>
            <span>
              {filteredAppointments.length} appointments
            </span>
          </div>

          <div className="appointment-controls">

            <div className="appointment-search">
              <Search size={16} />

              <input
                placeholder="Search doctor or hospital..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="appointment-filters">

              {["Upcoming", "Completed", "All"].map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>

        <div className="appointments-list">

          {filteredAppointments.map((appointment) => (

            <div
              className="appointment-row"
              key={appointment.id}
            >

              <div className="appointment-date">

                <span>
                  {appointment.date.split(" ")[0]}
                </span>

                <strong>
                  {appointment.date.split(" ")[1].replace(",", "")}
                </strong>

                <small>
                  {appointment.date.split(" ")[2]}
                </small>

              </div>

              <div className="appointment-doctor">

                <div className="doctor-avatar">
                  <Stethoscope size={20} />
                </div>

                <div>
                  <h3>{appointment.doctor}</h3>
                  <span>{appointment.specialty}</span>
                </div>

              </div>

              <div className="appointment-location">

                <strong>{appointment.hospital}</strong>

                <span>
                  <MapPin size={13} />
                  {appointment.type}
                </span>

              </div>

              <div className="appointment-time">

                <Clock size={14} />

                <div>
                  <strong>{appointment.time}</strong>
                  <span>{appointment.reason}</span>
                </div>

              </div>

              <div>

                {appointment.status === "Upcoming" ? (
                  <span className="appointment-status upcoming">
                    Upcoming
                  </span>
                ) : (
                  <span className="appointment-status completed">
                    Completed
                  </span>
                )}

              </div>

              <button className="appointment-more">
                <MoreVertical size={18} />
              </button>

            </div>

          ))}

        </div>

        {filteredAppointments.length === 0 && (
          <div className="no-appointments">
            <CalendarDays size={40} />
            <h3>No appointments found</h3>
            <p>Try changing your search or filter.</p>
          </div>
        )}

      </div>

      {/* ADD APPOINTMENT MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="appointment-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <span className="page-eyebrow">
                  NEW APPOINTMENT
                </span>

                <h2>Add Appointment</h2>
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
                <label>Doctor Name</label>
                <input placeholder="e.g. Dr. Priya Sharma" />
              </div>

              <div className="form-group">
                <label>Specialty</label>
                <input placeholder="e.g. General Physician" />
              </div>

              <div className="form-group">
                <label>Hospital / Clinic</label>
                <input placeholder="e.g. Apollo Hospitals" />
              </div>

              <div className="form-group">
                <label>Appointment Type</label>

                <select>
                  <option>In-person</option>
                  <option>Video Consultation</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Time</label>
                <input type="time" />
              </div>

            </div>

            <div className="form-group appointment-reason">
              <label>Reason for Visit</label>
              <input placeholder="e.g. Regular health checkup" />
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
                Add Appointment
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Appointments;