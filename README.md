# AIOS – Autonomous AI Operating System

AIOS is a full-stack **Agentic AI Operating System** built using **React, FastAPI, LangGraph, Groq LLMs, and Playwright**.

The project demonstrates how autonomous AI systems can:

* reason about tasks,
* route workflows dynamically,
* use external tools,
* automate browsers,
* maintain memory,
* and execute multi-agent pipelines.

AIOS combines modern frontend engineering with advanced AI orchestration to simulate a real-world autonomous AI environment.

---

# 🚀 Features

## 🤖 Multi-Agent AI Architecture

* Planner Agent
* Browser Agent
* Memory Agent
* Research Agent
* Execution Agent
* Summarizer Agent

---

## 🧠 LangGraph Workflow Orchestration

* Conditional routing
* Async agent execution
* Multi-step workflows
* Autonomous task handling

---

## 🌐 Browser Automation

* Google search automation
* Autonomous browser control
* Web interaction using Playwright
* Async browser workflows

---

## 💬 AI Chat Interface

* Real-time AI responses
* Markdown rendering
* Agent execution logs
* Dynamic workflow visualization

---

## ⚡ Modern Full-Stack Architecture

* React frontend
* FastAPI backend
* Async Python architecture
* Modular scalable design

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Axios
* React Markdown
* CSS3
* Responsive UI Design

---

## Backend

* FastAPI
* LangGraph
* Groq API
* Playwright
* Python AsyncIO

---

## AI Models

* Groq LLMs
* Llama 3.3 70B
* DeepSeek Models (future support)

---

# 🧩 System Architecture

```text
React Frontend
      ↓
FastAPI Backend
      ↓
LangGraph Workflow Engine
      ↓
Agent Router
 ┌───────────────┬───────────────┐
 │               │               │
Planner      Browser        Memory
 Agent         Agent          Agent
 │               │               │
Groq LLM     Playwright     Vector DB
```

---

# 📁 Complete Project Structure

```text
AIOS/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── router.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
│
├── backend/
│   │
│   ├── agents/
│   ├── graph/
│   ├── tools/
│   ├── memory/
│   ├── api/
│   ├── models/
│   ├── services/
│   ├── database/
│   ├── logs/
│   ├── tests/
│   │
│   ├── .env
│   ├── main.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── docker-compose.yml
│
│
├── deployment/
├── docs/
├── screenshots/
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# ⚙️ Installation Guide

# 1️⃣ Clone Repository

```bash
git clone <your_repo_url>
cd AIOS
```

---

# 2️⃣ Frontend Setup

## Install Dependencies

```bash
cd frontend
npm install
```

---

## Install Additional Packages

```bash
npm install axios react-markdown
```

---

## Run Frontend

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# 3️⃣ Backend Setup

## Create Virtual Environment

### Windows

```bash
py -3.11 -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```bash
python3.11 -m venv venv
source venv/bin/activate
```

---

# 4️⃣ Install Backend Dependencies

```bash
pip install fastapi uvicorn langgraph openai python-dotenv playwright
```

---

# 5️⃣ Install Playwright Browsers

```bash
playwright install
```

---

# 6️⃣ Environment Variables

Create `.env` inside `backend/`

```env
GROQ_API_KEY=your_api_key_here
```

Get API key from:

[Groq Console](https://console.groq.com?utm_source=chatgpt.com)

---

# 7️⃣ Run Backend

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

---

# 💡 Example Prompts

## AI Planning

```text
Create roadmap to learn AI
```

---

## Browser Automation

```text
Search latest AI news
```

---

## Research Tasks

```text
Google OpenAI
```

---

# 🔥 Core AI Agents

# 🧠 Planner Agent

Responsible for:

* task decomposition
* workflow planning
* AI reasoning
* roadmap generation

---

# 🌐 Browser Agent

Responsible for:

* browser automation
* Google search
* webpage interactions
* autonomous browsing

---

# 🧠 Memory Agent

Responsible for:

* storing conversation context
* vector memory retrieval
* long-term AI memory

---

# 📚 Research Agent

Responsible for:

* web research
* summarization
* extracting useful insights

---

# ⚡ Execution Agent

Responsible for:

* executing workflows
* tool orchestration
* managing AI actions

---

# 🔄 Workflow Engine

AIOS uses LangGraph to:

* dynamically route tasks
* execute async workflows
* manage multi-agent pipelines
* coordinate autonomous actions

---

# 🧪 Future Features

* Voice Assistant
* File System Agent
* Autonomous Task Loops
* AI Desktop Control
* Vision AI
* Code Generation Agent
* Docker Deployment
* Authentication System
* Team Collaboration
* Real-Time Streaming Responses

---

# 📸 Screenshots

Recommended screenshots:

* Dashboard UI
* Browser Agent
* Workflow Visualization
* AI Chat Interface
* Mobile Responsive Layout

---

# 📈 Resume Highlights

* Built a scalable Agentic AI Operating System using React, FastAPI, LangGraph, Groq LLMs, and Playwright.
* Developed asynchronous multi-agent workflows with browser automation capabilities.
* Designed modular AI orchestration architecture with real-time AI interactions.
* Implemented browser control and autonomous web interaction systems.
* Created modern AI SaaS-style frontend with markdown-rendered AI responses.

---

# 🎯 Learning Outcomes

This project demonstrates:

* Full-stack AI engineering
* Agentic AI systems
* Multi-agent orchestration
* Browser automation
* Async architecture
* LLM integration
* Workflow routing
* AI tool usage

---

# 👨‍💻 Author

Anish Fathima

---

# 📄 License

MIT License
