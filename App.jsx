import ReactMarkdown from "react-markdown";
import { useState } from "react";

import axios from "axios";

function App() {

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to AIOS. Your autonomous AI operating system is ready.",
    },
  ]);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message: input,
        }
      );

      const aiMessage = {
        role: "assistant",
        content: response.data.response,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Error connecting to AI backend.",
        },
      ]);
    }

    setLoading(false);

    setInput("");
  };

  return (
    <>
      {/* Sidebar */}

      <div className="sidebar">

        <div className="logo">
          AIOS
        </div>

        <div className="sidebar-menu">

          <button className="menu-item">
            Dashboard
          </button>

          <button className="menu-item">
            Agents
          </button>

          <button className="menu-item">
            Memory
          </button>

          <button className="menu-item">
            Workflows
          </button>

          <button className="menu-item">
            Settings
          </button>

        </div>

      </div>

      {/* Main */}

      <div className="main">

        {/* Topbar */}

        <div className="topbar">

          <div className="topbar-title">
            Autonomous AI Operating System
          </div>

        </div>

        {/* Chat */}

        <div className="chat-area">

          {messages.map((msg, index) => (

            <div
              key={index}
              className="message-card"
            >

              <div className="message-title">

                {msg.role === "user"
                  ? "You"
                  : "AIOS"}

              </div>

              <div className="markdown-output">
                <ReactMarkdown>
                  {msg.content}
                </ReactMarkdown>
              </div>

              {msg.role === "assistant" && (

                <div className="logs-container">

                  <div className="log">
                    [Planner Agent] Analyzing task...
                  </div>

                  <div className="log">
                    [Memory Agent] Retrieving context...
                  </div>

                  <div className="log">
                    [Execution Agent] Preparing workflow...
                  </div>

                </div>

              )}

            </div>

          ))}

          {loading && (

            <div className="message-card">

              <div className="message-title">
                AIOS
              </div>

              <div>
                Thinking...
              </div>

            </div>

          )}

        </div>

        {/* Input */}

        <div className="input-area">

          <div className="input-wrapper">

            <input
              type="text"
              className="chat-input"
              placeholder="Ask AIOS to perform a task..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button
              className="send-button"
              onClick={handleSend}
            >
              Send
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;