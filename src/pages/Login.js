import React, { useState } from "react";
import {
  ShieldCheck,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo authentication
    localStorage.setItem("biovaultUser", form.email);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* LEFT */}
      <div className="login-left">

        <Link to="/" className="login-logo">
          <div className="logo-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <strong>BioVault</strong>
            <span>Your AI Health Companion</span>
          </div>
        </Link>

        <div className="login-message">

          <span>YOUR HEALTH. YOUR CONTROL.</span>

          <h1>
            One secure place
            <br />
            for your health.
          </h1>

          <p>
            Store your health records, understand your data
            with AI, and keep critical information accessible
            when it matters most.
          </p>

          <div className="login-benefits">

            <div>
              <CheckCircle2 size={17} />
              Secure personal health vault
            </div>

            <div>
              <CheckCircle2 size={17} />
              Personalized AI insights
            </div>

            <div>
              <CheckCircle2 size={17} />
              Emergency-ready information
            </div>

          </div>

        </div>

        <div className="login-footer-left">
          © 2026 BioVault
        </div>

      </div>

      {/* RIGHT */}
      <div className="login-right">

        <div className="login-box">

          <div className="mobile-login-logo">
            <div className="logo-icon">
              <ShieldCheck size={21} />
            </div>
            <strong>BioVault</strong>
          </div>

          <div className="login-heading">

            <div className="secure-login-icon">
              <LockKeyhole size={19} />
            </div>

            <h2>
              {isSignUp ? "Create your BioVault" : "Welcome back"}
            </h2>

            <p>
              {isSignUp
                ? "Create your secure health profile."
                : "Sign in to access your health vault."
              }
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            {isSignUp && (
              <div className="form-group">

                <label>Full name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({...form, name: e.target.value})
                  }
                  required
                />

              </div>
            )}

            <div className="form-group">

              <label>Email address</label>

              <div className="input-icon">

                <Mail size={16} />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({...form, email: e.target.value})
                  }
                  required
                />

              </div>

            </div>

            <div className="form-group">

              <label>Password</label>

              <div className="input-icon">

                <LockKeyhole size={16} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({...form, password: e.target.value})
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword
                    ? <EyeOff size={16} />
                    : <Eye size={16} />
                  }
                </button>

              </div>

            </div>

            {!isSignUp && (
              <div className="forgot-password">
                Forgot password?
              </div>
            )}

            <button className="login-submit" type="submit">

              {isSignUp ? "Create BioVault" : "Sign In"}

              <ArrowRight size={17} />

            </button>

          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <button
            className="demo-login"
            onClick={() => navigate("/dashboard")}
          >
            Continue with Demo Account
          </button>

          <div className="switch-auth">

            {isSignUp
              ? "Already have a BioVault?"
              : "Don't have a BioVault?"
            }

            <button
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign in" : "Create account"}
            </button>

          </div>

          <p className="login-disclaimer">
            By continuing, you agree to BioVault's privacy-first
            approach to personal health data.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;