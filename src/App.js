import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import MedicalRecords from "./pages/MedicalRecords";
import RecordDetails from "./pages/RecordDetails";
import Medications from "./pages/Medications";
import Appointments from "./pages/Appointments";
import AIAssistant from "./pages/AIAssistant";
import HealthInsights from "./pages/HealthInsights";
import EmergencyCard from "./pages/EmergencyCard";

import Home from "./pages/Home";
import Login from "./pages/Login";

import "./App.css";


/* ================================
   PLACEHOLDER
================================ */

function Placeholder({ title }) {
  return (
    <div className="placeholder-page">
      <h1>{title}</h1>
      <p>This BioVault module is being built.</p>
    </div>
  );
}


/* ================================
   PUBLIC LAYOUT
   Home + Login

   NO SIDEBAR
   NO HEADER
================================ */

function PublicLayout() {
  return <Outlet />;
}


/* ================================
   APPLICATION LAYOUT

   Dashboard + all internal pages

   SIDEBAR
   HEADER
================================ */

function AppLayout() {
  return (
    <div className="app">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="main">

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}


/* ================================
   APP
================================ */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =================================
            PUBLIC PAGES
        ================================= */}

        <Route element={<PublicLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>


        {/* =================================
            APPLICATION PAGES
            Sidebar + Header
        ================================= */}

        <Route element={<AppLayout />}>

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          {/* HEALTH PROFILE */}
          <Route
            path="/profile"
            element={
              <Placeholder title="Health Profile" />
            }
          />


          {/* MEDICAL RECORDS */}
          <Route
            path="/records"
            element={<MedicalRecords />}
          />

          <Route
            path="/records/:id"
            element={<RecordDetails />}
          />


          {/* MEDICATIONS */}
          <Route
            path="/medications"
            element={<Medications />}
          />


          {/* APPOINTMENTS */}
          <Route
            path="/appointments"
            element={<Appointments />}
          />


          {/* AI ASSISTANT */}
          <Route
            path="/ai-assistant"
            element={<AIAssistant />}
          />


          {/* HEALTH INSIGHTS */}
          <Route
            path="/insights"
            element={<HealthInsights />}
          />


          {/* SECURE SHARING */}
          <Route
            path="/sharing"
            element={
              <Placeholder title="Secure Sharing" />
            }
          />


          {/* EMERGENCY CARD */}
          <Route
            path="/emergency"
            element={<EmergencyCard />}
          />


          {/* SETTINGS */}
          <Route
            path="/settings"
            element={
              <Placeholder title="Settings" />
            }
          />

        </Route>


        {/* =================================
            UNKNOWN URL
        ================================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;