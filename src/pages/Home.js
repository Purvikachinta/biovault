import React from "react";
import {
  ShieldCheck,
  Brain,
  FileHeart,
  ArrowRight,
  LockKeyhole,
  Activity,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <Link to="/" className="home-logo">
          <div className="logo-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <strong>BioVault</strong>
            <span>Your AI Health Companion</span>
          </div>
        </Link>

        <div className={`home-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#security">Security</a>

          <Link to="/login" className="nav-login">
            Sign In
          </Link>

          <Link to="/login" className="nav-get-started">
            Get Started
            <ArrowRight size={15} />
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* HERO */}
      <section className="home-hero">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="pulse-dot"></span>
            SMARTER • SAFER • PERSONALIZED
          </div>

          <h1>
            Your health.
            <br />
            <span>Your records.</span>
            <br />
            Your AI companion.
          </h1>

          <p>
            BioVault securely brings your health records, medications,
            appointments and personalized AI insights together in one place.
          </p>

          <div className="hero-buttons">

            <Link to="/login" className="primary-hero-btn">
              Get Started
              <ArrowRight size={18} />
            </Link>

            <a href="#how-it-works" className="secondary-hero-btn">
              See how it works
            </a>

          </div>

          <div className="hero-trust">

            <div>
              <ShieldCheck size={16} />
              Secure Health Vault
            </div>

            <div>
              <Brain size={16} />
              AI-Powered
            </div>

            <div>
              <LockKeyhole size={16} />
              Privacy First
            </div>

          </div>

        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="floating-card card-one">

            <div className="floating-icon blue-icon">
              <Activity size={18} />
            </div>

            <div>
              <span>Health Score</span>
              <strong>82 / 100</strong>
            </div>

            <span className="positive">+11%</span>

          </div>

          <div className="vault-preview">

            <div className="preview-header">
              <div className="preview-brand">
                <ShieldCheck size={17} />
                BioVault
              </div>

              <span className="secure-pill">
                <LockKeyhole size={11} />
                Secure
              </span>
            </div>

            <div className="preview-greeting">
              <span>YOUR HEALTH OVERVIEW</span>

              <h3>Good morning 👋</h3>

              <p>Here's your health snapshot.</p>
            </div>

            <div className="preview-stats">

              <div>
                <span>Blood Group</span>
                <strong>O+</strong>
              </div>

              <div>
                <span>Health Records</span>
                <strong>12</strong>
              </div>

            </div>

            <div className="preview-ai">

              <div className="ai-small-icon">
                <Brain size={17} />
              </div>

              <div>
                <span>AI HEALTH INSIGHT</span>
                <p>
                  Your health indicators are trending positively.
                </p>
              </div>

            </div>

          </div>

          <div className="floating-card card-two">

            <div className="floating-icon purple-icon">
              <Brain size={18} />
            </div>

            <div>
              <span>AI Insight</span>
              <strong>Personalized</strong>
            </div>

            <CheckCircle2 size={17} className="check-icon" />

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">

        <div className="section-heading">
          <span>ONE HEALTH PLATFORM</span>

          <h2>
            Everything you need to
            <br />
            understand your health.
          </h2>

          <p>
            From storing records to understanding them,
            BioVault keeps your health journey connected.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon blue-feature">
              <FileHeart size={22} />
            </div>

            <h3>Secure Health Vault</h3>

            <p>
              Store medical reports, prescriptions, allergies,
              conditions and vaccinations in one organized place.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon purple-feature">
              <Brain size={22} />
            </div>

            <h3>Personalized AI</h3>

            <p>
              Ask questions about your own health records and
              receive context-aware explanations and insights.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon green-feature">
              <ShieldCheck size={22} />
            </div>

            <h3>Emergency Ready</h3>

            <p>
              Keep critical information accessible during emergencies
              without exposing your complete health history.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">

        <div className="section-heading">

          <span>HOW BIOVAULT WORKS</span>

          <h2>
            From health data to
            <br />
            personalized action.
          </h2>

        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <h3>Store</h3>
            <p>Add your health records to your secure vault.</p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Analyze</h3>
            <p>AI identifies patterns across your authorized data.</p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Understand</h3>
            <p>Complex health information is explained simply.</p>
          </div>

          <div className="step">
            <div className="step-number">04</div>
            <h3>Act</h3>
            <p>Manage medications, appointments and health decisions.</p>
          </div>

        </div>

      </section>

      {/* SECURITY */}
      <section className="security-section" id="security">

        <div className="security-content">

          <div className="security-icon">
            <LockKeyhole size={28} />
          </div>

          <span>PRIVACY-FIRST BY DESIGN</span>

          <h2>
            Your health data
            <br />
            belongs to you.
          </h2>

          <p>
            BioVault is designed around patient-controlled health data.
            You decide what information is stored, understood and shared.
          </p>

          <div className="security-points">

            <div>
              <CheckCircle2 size={16} />
              Patient-controlled data
            </div>

            <div>
              <CheckCircle2 size={16} />
              Secure authentication
            </div>

            <div>
              <CheckCircle2 size={16} />
              Selective data sharing
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="home-cta">

        <span>YOUR HEALTH. YOUR VAULT.</span>

        <h2>
          Start understanding
          <br />
          your health better.
        </h2>

        <Link to="/login" className="primary-hero-btn">
          Create your BioVault
          <ArrowRight size={18} />
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="home-footer">

        <div className="home-logo">

          <div className="logo-icon">
            <ShieldCheck size={19} />
          </div>

          <div>
            <strong>BioVault</strong>
            <span>Your AI Health Companion</span>
          </div>

        </div>

        <p>
          AI assists. Doctors decide.
        </p>

        <span>
          © 2026 BioVault
        </span>

      </footer>

    </div>
  );
}

export default Home;