# Relay — AI-Assisted Client Delivery Intelligence

Relay is a full-stack portfolio project for client-facing engineering teams. It turns project activity, client communication, scope changes, and delivery forecasts into one prioritized view of what needs attention now.

The project is deliberately aligned with my experience owning software engagements from discovery and scoping through engineering, demos, onboarding, and handover.

## The product problem

Delivery teams rarely fail because they lack project data. They fail because risk is scattered across messages, tickets, meetings, and status sheets. Relay models an AI-assisted decision layer that identifies scope drift, falling client sentiment, overdue approvals, capacity mismatches, and blockers before they become missed deliveries.

## What it demonstrates

- Product judgment grounded in real client-delivery workflows
- Responsive, accessible interface engineering with native JavaScript and SVG
- Clear visualization of dense operational data
- A lightweight Node.js API with health and AI-brief endpoints
- Thoughtful interaction design: incident drill-downs, keyboard search, live refresh states, filters, and feedback
- Production-minded structure with a deterministic demo that needs no credentials

## Run locally

```bash
npm install
npm run dev
```

Use `Cmd/Ctrl + K` to focus search. Select a signal or map location to open the risk analysis, switch project forecast ranges, and generate an AI-style daily brief.

## Production build

```bash
npm run build
npm start
```

The Node server hosts the production client and exposes:

- `GET /api/health` — service health and timestamp
- `POST /api/brief` — a structured daily portfolio brief

## Architecture path

The demo is intentionally instant to run. A production implementation would ingest project events through webhooks, normalize activity into an event stream, calculate risk scores in a dedicated service, analyze approved client communication with an LLM, and push account-level updates to the browser over WebSockets. Authentication, audit logs, and role-based access would protect client data.

## Interview story

> I have worked on both sides of software delivery: translating client needs into scope and building the systems that deliver it. Relay is the product I wanted while coordinating AI, SaaS, and web projects across clients and offshore teams. It makes delivery risk visible early enough to act on it.

## Next steps

1. Add authenticated workspaces and role-based access.
2. Connect Jira, Linear, Slack, and email activity through OAuth.
3. Persist projects and signal acknowledgements in PostgreSQL.
4. Add an LLM-backed brief with citations to underlying project events.
5. Cover scoring logic, accessibility, and visual behavior with automated tests.

---

Designed and engineered by **Arqam Altaf**, a full-stack engineer and client partner focused on AI, SaaS, and end-to-end software delivery.
