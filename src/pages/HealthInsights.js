import React from "react";
import {
  Activity,
  HeartPulse,
  Droplets,
  Moon,
  TrendingUp,
  TrendingDown,
  Sparkles,
  ArrowUpRight,
  Info,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const healthTrend = [
  { month: "Apr", score: 71 },
  { month: "May", score: 74 },
  { month: "Jun", score: 76 },
  { month: "Jul", score: 79 },
  { month: "Aug", score: 81 },
  { month: "Sep", score: 82 },
];

const vitalsData = [
  { month: "Apr", bp: 124, heart: 78 },
  { month: "May", bp: 121, heart: 76 },
  { month: "Jun", bp: 119, heart: 75 },
  { month: "Jul", bp: 118, heart: 73 },
  { month: "Aug", bp: 117, heart: 72 },
  { month: "Sep", bp: 118, heart: 71 },
];

const activityData = [
  { day: "Mon", steps: 6200 },
  { day: "Tue", steps: 8100 },
  { day: "Wed", steps: 7400 },
  { day: "Thu", steps: 9200 },
  { day: "Fri", steps: 6800 },
  { day: "Sat", steps: 10500 },
  { day: "Sun", steps: 7800 },
];

function HealthInsights() {
  return (
    <div className="insights-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <span className="page-eyebrow">
            PERSONALIZED HEALTH ANALYTICS
          </span>

          <h1>Health Insights</h1>

          <p>
            Understand trends and patterns across your health data.
          </p>
        </div>

        <div className="insights-updated">
          <Activity size={15} />
          Updated today
        </div>
      </div>

      {/* HEALTH SCORE */}
      <div className="insights-top-grid">

        <div className="health-score-card">

          <div className="score-left">

            <span className="score-label">
              YOUR HEALTH SCORE
            </span>

            <div className="score-number">
              82<span>/100</span>
            </div>

            <div className="score-improvement">
              <TrendingUp size={14} />
              +11 points since April
            </div>

            <p>
              Your overall health indicators show a
              positive trend over the last 6 months.
            </p>

          </div>

          <div className="score-circle">

            <svg viewBox="0 0 120 120">

              <circle
                cx="60"
                cy="60"
                r="50"
                className="score-circle-bg"
              />

              <circle
                cx="60"
                cy="60"
                r="50"
                className="score-circle-progress"
              />

            </svg>

            <div className="score-circle-text">
              <HeartPulse size={20} />
            </div>

          </div>

        </div>

        <div className="quick-metrics">

          <div className="quick-metric">

            <div className="metric-icon blue">
              <HeartPulse size={18} />
            </div>

            <div>
              <span>Heart Rate</span>
              <strong>71 <small>BPM</small></strong>

              <p>
                <TrendingDown size={11} />
                4% this month
              </p>
            </div>

          </div>

          <div className="quick-metric">

            <div className="metric-icon purple">
              <Activity size={18} />
            </div>

            <div>
              <span>Blood Pressure</span>
              <strong>118/76</strong>

              <p className="neutral">
                <Info size={11} />
                Stable
              </p>
            </div>

          </div>

          <div className="quick-metric">

            <div className="metric-icon orange">
              <Moon size={18} />
            </div>

            <div>
              <span>Sleep</span>
              <strong>7.2 <small>hrs</small></strong>

              <p>
                <TrendingUp size={11} />
                6% this month
              </p>
            </div>

          </div>

          <div className="quick-metric">

            <div className="metric-icon green">
              <Droplets size={18} />
            </div>

            <div>
              <span>Hydration</span>
              <strong>82 <small>%</small></strong>

              <p>
                <TrendingUp size={11} />
                8% this month
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* AI INSIGHT */}
      <div className="ai-insight-banner">

        <div className="ai-insight-icon">
          <Sparkles size={22} />
        </div>

        <div className="ai-insight-content">

          <span>AI-GENERATED INSIGHT</span>

          <h2>
            Your health indicators are trending positively
          </h2>

          <p>
            Your health score has improved by 11 points over
            the last six months. Your recorded heart rate has
            gradually decreased while your average activity
            and sleep duration have improved.
          </p>

        </div>

        <button>
          View Analysis
          <ArrowUpRight size={15} />
        </button>

      </div>

      {/* CHARTS */}
      <div className="charts-grid">

        {/* HEALTH SCORE TREND */}
        <div className="chart-card">

          <div className="chart-header">

            <div>
              <h2>Health Score Trend</h2>
              <span>Last 6 months</span>
            </div>

            <div className="chart-current">
              <strong>82</strong>
              <span>Current</span>
            </div>

          </div>

          <div className="chart-container">

            <ResponsiveContainer width="100%" height={260}>

              <LineChart data={healthTrend}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />

                <YAxis
                  domain={[60, 90]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* VITALS */}
        <div className="chart-card">

          <div className="chart-header">

            <div>
              <h2>Vitals Overview</h2>
              <span>Blood pressure & heart rate</span>
            </div>

            <div className="legend">

              <span>
                <i className="legend-bp"></i>
                BP
              </span>

              <span>
                <i className="legend-heart"></i>
                Heart Rate
              </span>

            </div>

          </div>

          <div className="chart-container">

            <ResponsiveContainer width="100%" height={260}>

              <LineChart data={vitalsData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="bp"
                  stroke="#7c5cff"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />

                <Line
                  type="monotone"
                  dataKey="heart"
                  stroke="#16a085"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* ACTIVITY + AI RECOMMENDATIONS */}
      <div className="bottom-insights-grid">

        <div className="chart-card activity-card">

          <div className="chart-header">

            <div>
              <h2>Weekly Activity</h2>
              <span>Steps recorded this week</span>
            </div>

            <strong className="activity-total">
              56,000
            </strong>

          </div>

          <div className="chart-container">

            <ResponsiveContainer width="100%" height={230}>

              <BarChart data={activityData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />

                <Tooltip />

                <Bar
                  dataKey="steps"
                  fill="#2563eb"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="recommendations-card">

          <div className="recommendations-heading">

            <div className="recommendation-ai-icon">
              <Sparkles size={18} />
            </div>

            <div>
              <h2>AI Recommendations</h2>
              <span>Based on your health trends</span>
            </div>

          </div>

          <div className="recommendation">

            <div className="recommendation-number">
              01
            </div>

            <div>
              <strong>Maintain your activity level</strong>

              <p>
                Your activity has improved this month.
                Try maintaining 7,000–10,000 steps daily.
              </p>
            </div>

          </div>

          <div className="recommendation">

            <div className="recommendation-number">
              02
            </div>

            <div>
              <strong>Keep your sleep consistent</strong>

              <p>
                Your average sleep is improving. Maintaining
                a regular sleep schedule can support recovery.
              </p>
            </div>

          </div>

          <div className="recommendation">

            <div className="recommendation-number">
              03
            </div>

            <div>
              <strong>Stay hydrated</strong>

              <p>
                Your hydration score has improved by 8%.
                Continue monitoring your daily intake.
              </p>
            </div>

          </div>

          <div className="recommendation-disclaimer">
            <Info size={12} />
            AI insights are informational and not medical diagnoses.
          </div>

        </div>

      </div>

    </div>
  );
}

export default HealthInsights;