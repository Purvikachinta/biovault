import React from "react";
import {
  HeartPulse,
  Droplets,
  Pill,
  AlertTriangle,
  ArrowUpRight,
  CalendarDays,
  Clock,
  FileText,
  MessageCircle,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="page-heading">

        <div>
          <p className="eyebrow">YOUR HEALTH OVERVIEW</p>

          <h1>
            Good morning, Purvika 👋
          </h1>

          <p className="page-subtitle">
            Here's a quick overview of your health information.
          </p>
        </div>

        <button className="primary-button">
          <FileText size={18} />
          Add Record
        </button>

      </div>


      {/* HEALTH CARDS */}

      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon blue">
            <Droplets size={22} />
          </div>

          <div>
            <span>Blood Group</span>
            <strong>O+</strong>
          </div>

          <div className="stat-arrow">
            <ArrowUpRight size={17} />
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon red">
            <AlertTriangle size={22} />
          </div>

          <div>
            <span>Allergies</span>
            <strong>1 Known</strong>
          </div>

          <div className="stat-arrow">
            <ArrowUpRight size={17} />
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon green">
            <HeartPulse size={22} />
          </div>

          <div>
            <span>Health Records</span>
            <strong>12</strong>
          </div>

          <div className="stat-arrow">
            <ArrowUpRight size={17} />
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon purple">
            <Pill size={22} />
          </div>

          <div>
            <span>Active Medications</span>
            <strong>4</strong>
          </div>

          <div className="stat-arrow">
            <ArrowUpRight size={17} />
          </div>

        </div>

      </div>


      {/* MAIN GRID */}

      <div className="dashboard-grid">


        {/* HEALTH OVERVIEW */}

        <section className="panel health-overview">

          <div className="panel-header">

            <div>
              <h2>Health Overview</h2>

              <p>
                Informational summary from your records
              </p>
            </div>

            <HeartPulse size={22} />

          </div>


          <div className="health-score">

            <div className="score-circle">
              <div>
                <strong>82</strong>
                <span>/100</span>
              </div>
            </div>

            <div className="score-text">

              <h3>Looking good</h3>

              <p>
                Your stored health information appears
                consistent across your recent records.
              </p>

              <small>
                *This is an informational overview,
                not a medical assessment.
              </small>

            </div>

          </div>

        </section>


        {/* AI INSIGHT */}

        <section className="panel ai-panel">

          <div className="ai-badge">
            <MessageCircle size={18} />
            AI INSIGHT
          </div>

          <h2>
            Want to understand your latest report?
          </h2>

          <p>
            BioVault AI can explain your health records
            in simple language using your stored information.
          </p>

          <button className="ai-button">
            Ask BioVault AI
            <ArrowUpRight size={17} />
          </button>

          <div className="ai-note">
            AI assists. Doctors decide.
          </div>

        </section>


        {/* APPOINTMENTS */}

        <section className="panel">

          <div className="panel-header">

            <div>
              <h2>Upcoming Appointment</h2>
              <p>Your next scheduled visit</p>
            </div>

            <CalendarDays size={21} />

          </div>

          <div className="appointment">

            <div className="doctor-avatar">
              DR
            </div>

            <div className="appointment-info">

              <strong>Dr. Ananya Rao</strong>

              <span>
                General Physician
              </span>

              <div className="appointment-time">

                <CalendarDays size={15} />
                12 September 2026

                <Clock size={15} />
                10:30 AM

              </div>

            </div>

          </div>

        </section>


        {/* MEDICATIONS */}

        <section className="panel">

          <div className="panel-header">

            <div>
              <h2>Today's Medications</h2>
              <p>Stay on track</p>
            </div>

            <Pill size={21} />

          </div>

          <div className="medication-item">

            <div className="med-icon">
              <Pill size={18} />
            </div>

            <div>
              <strong>Metformin</strong>
              <span>500 mg · After breakfast</span>
            </div>

            <span className="med-time">
              9:00 AM
            </span>

          </div>


          <div className="medication-item">

            <div className="med-icon">
              <Pill size={18} />
            </div>

            <div>
              <strong>Vitamin D</strong>
              <span>Once daily</span>
            </div>

            <span className="med-time">
              8:00 PM
            </span>

          </div>

        </section>


        {/* RECENT RECORDS */}

        <section className="panel recent-records">

          <div className="panel-header">

            <div>
              <h2>Recent Records</h2>
              <p>Your latest health documents</p>
            </div>

            <button className="text-button">
              View all
            </button>

          </div>


          <div className="record-row">

            <div className="record-icon">
              <FileText size={19} />
            </div>

            <div>
              <strong>Complete Blood Count</strong>
              <span>Blood Test · 28 Aug 2026</span>
            </div>

            <span className="record-status">
              Added
            </span>

          </div>


          <div className="record-row">

            <div className="record-icon">
              <FileText size={19} />
            </div>

            <div>
              <strong>Prescription</strong>
              <span>General Medicine · 25 Aug 2026</span>
            </div>

            <span className="record-status">
              Added
            </span>

          </div>


          <div className="record-row">

            <div className="record-icon">
              <FileText size={19} />
            </div>

            <div>
              <strong>Vaccination Record</strong>
              <span>Vaccination · 18 Aug 2026</span>
            </div>

            <span className="record-status">
              Added
            </span>

          </div>

        </section>


        {/* EMERGENCY */}

        <section className="emergency-preview">

          <div className="emergency-content">

            <div className="emergency-icon">
              <AlertTriangle size={24} />
            </div>

            <div>

              <p>EMERGENCY ACCESS</p>

              <h2>
                Emergency Card
              </h2>

              <span>
                Critical information available when it matters most.
              </span>

            </div>

          </div>

          <button>
            View Card
            <ArrowUpRight size={17} />
          </button>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;