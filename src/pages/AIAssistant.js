import React, { useState } from "react";
import {
  Send,
  Sparkles,
  User,
  FileText,
  Pill,
  CalendarDays,
  HeartPulse,
  Trash2,
  Bot,
} from "lucide-react";

const suggestedQuestions = [
  {
    icon: FileText,
    text: "Explain my latest report",
  },
  {
    icon: Pill,
    text: "What medications am I taking?",
  },
  {
    icon: CalendarDays,
    text: "Show my upcoming appointments",
  },
  {
    icon: HeartPulse,
    text: "Give me a health summary",
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "ai",
    text: "Hi Purvika! 👋 I'm BioVault AI.",
    time: "Just now",
  },
  {
    id: 2,
    sender: "ai",
    text:
      "I can help you understand your health records, medications, appointments and health trends. Ask me anything about the information stored in your vault.",
    time: "Just now",
  },
];

function getAIResponse(question) {
  const q = question.toLowerCase();

  if (
    q.includes("report") ||
    q.includes("cbc") ||
    q.includes("blood")
  ) {
    return {
      text:
        "Your latest Complete Blood Count report looks generally reassuring based on the values available. Hemoglobin is 12.4 g/dL, WBC count is 7,200/µL and platelet count is 2.45 lakh/µL. These values appear to be within the reference ranges represented in the report. I can explain any individual value in simpler terms if you'd like.",
      source: "Complete Blood Count · Aug 28, 2026",
    };
  }

  if (
    q.includes("medication") ||
    q.includes("medicine") ||
    q.includes("medicines")
  ) {
    return {
      text:
        "You currently have 4 medications in your BioVault. Your active medications include Vitamin D3, Iron Supplement and Calcium. Paracetamol is listed as an as-needed medication.",
      source: "Medication records",
    };
  }

  if (
    q.includes("appointment") ||
    q.includes("doctor") ||
    q.includes("visit")
  ) {
    return {
      text:
        "Your next appointment is with Dr. Priya Sharma, General Physician, at Apollo Hospitals on September 8, 2026 at 10:30 AM. It is an in-person visit for a regular health checkup.",
      source: "Appointments",
    };
  }

  if (
    q.includes("health summary") ||
    q.includes("health status") ||
    q.includes("overall health")
  ) {
    return {
      text:
        "Based on the information currently stored in your BioVault, you have 12 medical records, 4 medications and 2 upcoming appointments. Your latest blood report appears generally reassuring. Your current health overview score is 82/100.",
      source: "BioVault health overview",
    };
  }

  if (q.includes("allerg")) {
    return {
      text:
        "Your BioVault profile currently contains 1 recorded allergy. For safety, always verify allergy information with your healthcare provider before taking a new medication.",
      source: "Health Profile",
    };
  }

  return {
    text:
      "I can help you understand the health information stored in your BioVault. Try asking about your latest report, medications, appointments or overall health summary.",
    source: "BioVault AI",
  };
}

function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (messageText = input) => {
    const question = messageText.trim();

    if (!question || isTyping) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: question,
      time: "Just now",
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(question);

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: response.text,
        source: response.source,
        time: "Just now",
      };

      setMessages((current) => [...current, aiMessage]);
      setIsTyping(false);
    }, 900);
  };

  const clearChat = () => {
    setMessages(initialMessages);
    setInput("");
  };

  return (
    <div className="ai-page">

      {/* HEADER */}
      <div className="page-header ai-page-header">
        <div>
          <span className="page-eyebrow">INTELLIGENT HEALTH COMPANION</span>

          <h1>BioVault AI</h1>

          <p>
            Ask questions about your health records and get
            personalized explanations.
          </p>
        </div>

        <div className="ai-online-status">
          <span></span>
          AI Online
        </div>
      </div>

      {/* MAIN AI AREA */}
      <div className="ai-main-grid">

        {/* CHAT */}
        <div className="chat-card">

          <div className="chat-header">

            <div className="chat-agent">

              <div className="chat-agent-icon">
                <Sparkles size={21} />
              </div>

              <div>
                <h2>BioVault AI</h2>
                <span>
                  Your personalized health companion
                </span>
              </div>

            </div>

            <button
              className="clear-chat-btn"
              onClick={clearChat}
              title="Clear chat"
            >
              <Trash2 size={16} />
            </button>

          </div>

          {/* MESSAGES */}
          <div className="chat-messages">

            <div className="chat-date">
              TODAY
            </div>

            {messages.map((message) => (

              <div
                className={`message-row ${message.sender}`}
                key={message.id}
              >

                {message.sender === "ai" && (
                  <div className="message-avatar ai">
                    <Bot size={16} />
                  </div>
                )}

                <div className="message-content">

                  <div className="message-bubble">
                    {message.text}
                  </div>

                  {message.source && (
                    <div className="message-source">
                      <FileText size={12} />
                      Based on: {message.source}
                    </div>
                  )}

                  <span className="message-time">
                    {message.time}
                  </span>

                </div>

                {message.sender === "user" && (
                  <div className="message-avatar user">
                    <User size={16} />
                  </div>
                )}

              </div>

            ))}

            {isTyping && (
              <div className="message-row ai">

                <div className="message-avatar ai">
                  <Bot size={16} />
                </div>

                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>
            )}

          </div>

          {/* SUGGESTIONS */}
          <div className="suggestions">

            <span>Try asking</span>

            <div className="suggestion-list">

              {suggestedQuestions.map((question) => {
                const Icon = question.icon;

                return (
                  <button
                    key={question.text}
                    onClick={() => sendMessage(question.text)}
                  >
                    <Icon size={14} />
                    {question.text}
                  </button>
                );
              })}

            </div>

          </div>

          {/* INPUT */}
          <div className="chat-input-area">

            <div className="chat-input">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask BioVault AI about your health..."
              />

              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
              >
                <Send size={17} />
              </button>

            </div>

            <p className="chat-disclaimer">
              BioVault AI provides informational assistance and does
              not replace professional medical advice.
            </p>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="ai-side-panel">

          {/* CAPABILITIES */}
          <div className="ai-capabilities-card">

            <div className="side-card-heading">
              <Sparkles size={17} />
              <h2>What I can do</h2>
            </div>

            <div className="capability">

              <div className="capability-icon blue">
                <FileText size={17} />
              </div>

              <div>
                <strong>Explain Reports</strong>
                <p>
                  Turn complex medical reports into simple language.
                </p>
              </div>

            </div>

            <div className="capability">

              <div className="capability-icon purple">
                <Pill size={17} />
              </div>

              <div>
                <strong>Track Medications</strong>
                <p>
                  Understand your medication schedule and records.
                </p>
              </div>

            </div>

            <div className="capability">

              <div className="capability-icon green">
                <HeartPulse size={17} />
              </div>

              <div>
                <strong>Health Insights</strong>
                <p>
                  Identify useful patterns across your health data.
                </p>
              </div>

            </div>

            <div className="capability">

              <div className="capability-icon orange">
                <CalendarDays size={17} />
              </div>

              <div>
                <strong>Appointments</strong>
                <p>
                  Keep track of your upcoming healthcare visits.
                </p>
              </div>

            </div>

          </div>

          {/* CONTEXT */}
          <div className="ai-context-card">

            <div className="side-card-heading">
              <FileText size={17} />
              <h2>My Health Context</h2>
            </div>

            <p>
              BioVault AI can use information from your secure
              health vault to provide more relevant answers.
            </p>

            <div className="context-items">

              <div>
                <strong>12</strong>
                <span>Medical Records</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Medications</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Appointments</span>
              </div>

            </div>

            <div className="privacy-note">
              <span></span>
              Your health context stays within your secure vault.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;