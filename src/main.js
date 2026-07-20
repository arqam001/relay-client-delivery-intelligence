import './styles.css'

const incidents = [
  { id: 'RY-2048', type: 'Scope drift detected', city: 'Singapore', region: 'APAC account', severity: 'critical', risk: 92, time: '4m', impact: '$84K', x: 79, y: 64, note: 'Six new requirements appeared after sign-off. The delivery forecast has moved by 11 working days.' },
  { id: 'RY-2047', type: 'Client sentiment falling', city: 'London', region: 'European account', severity: 'high', risk: 78, time: '18m', impact: '$62K', x: 49, y: 31, note: 'Response sentiment declined across the last three client messages. A proactive check-in is recommended.' },
  { id: 'RY-2046', type: 'Delivery blocker', city: 'Dubai', region: 'Middle East account', severity: 'high', risk: 73, time: '31m', impact: '$41K', x: 57, y: 47, note: 'Production access is still pending from the client, blocking two critical-path backend tasks.' },
  { id: 'RY-2045', type: 'Approval overdue', city: 'New York', region: 'North America account', severity: 'medium', risk: 54, time: '1h', impact: '$18K', x: 17, y: 43, note: 'The milestone approval is 36 hours overdue and now threatens the planned onboarding window.' },
  { id: 'RY-2044', type: 'Capacity mismatch', city: 'São Paulo', region: 'South America account', severity: 'medium', risk: 49, time: '2h', impact: '$9.6K', x: 32, y: 77, note: 'Planned engineering capacity is below the next sprint forecast by approximately 24 hours.' },
]

const routes = [
  { name: 'VectorAI Workspace', detail: 'AI SaaS · Singapore', status: 'At risk', value: '72%', delta: '+11d', level: 'critical' },
  { name: 'Harbor Client Portal', detail: 'B2B SaaS · London', status: 'Watching', value: '86%', delta: '+3d', level: 'high' },
  { name: 'Nova Automation', detail: 'Workflow API · New York', status: 'Healthy', value: '94%', delta: '−2d', level: 'low' },
]

const icon = (name, size = 18) => {
  const paths = {
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    route: '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h5a4 4 0 0 1 4 4v4a4 4 0 0 0 3 4"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    spark: '<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z"/><path d="m19 17 .5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2Z"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
  }
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`
}

const app = document.querySelector('#app')

app.innerHTML = `
  <aside class="sidebar" aria-label="Primary navigation">
    <a class="brand" href="#" aria-label="Relay home"><span class="brand-mark">R</span><span>Relay</span></a>
    <nav>
      <a href="#overview" class="nav-item active" data-page="Overview">${icon('grid')}<span>Overview</span></a>
      <a href="#network" class="nav-item" data-page="Accounts">${icon('globe')}<span>Accounts</span></a>
      <a href="#routes" class="nav-item" data-page="Projects">${icon('route')}<span>Projects</span></a>
      <a href="#alerts" class="nav-item" data-page="Signals">${icon('bell')}<span>Signals</span><b>5</b></a>
    </nav>
    <div class="sidebar-foot">
      <div class="system-status"><i></i><div><strong>All systems live</strong><span>Updated 14s ago</span></div></div>
      <button class="profile" aria-label="Open profile"><span>AA</span><div><strong>Arqam Altaf</strong><small>Operations lead</small></div>${icon('chevron', 15)}</button>
    </div>
  </aside>

  <main>
    <header class="topbar">
      <button class="menu-button" aria-label="Toggle navigation">${icon('grid')}</button>
      <div class="search-wrap">${icon('search', 17)}<input id="global-search" type="search" placeholder="Search clients, projects, signals…" aria-label="Search"/><kbd>⌘ K</kbd></div>
      <div class="top-actions">
        <span class="live-pill"><i></i>Portfolio live</span>
        <button class="icon-button" aria-label="Notifications">${icon('bell')}<span></span></button>
      </div>
    </header>

    <div class="workspace" id="overview">
      <section class="intro reveal">
        <div><p class="eyebrow">Monday, 20 July · 09:41 EDT</p><h1>Good morning, Arqam.</h1><p>Your portfolio is healthy. <strong>3 signals</strong> need attention today.</p></div>
        <button class="brief-button" id="brief-button">${icon('spark')} Generate daily brief</button>
      </section>

      <section class="metrics" aria-label="Key metrics">
        <article class="metric-card reveal"><div class="metric-label"><span>Portfolio health</span><span class="trend up">↗ 2.4%</span></div><div class="metric-value">94<span>/100</span></div><div class="meter"><i style="width:94%"></i></div><small>Strong across 16 active accounts</small></article>
        <article class="metric-card reveal"><div class="metric-label"><span>Active projects</span><span class="trend neutral">Live</span></div><div class="metric-value">24</div><div class="micro-bars" aria-hidden="true"><i style="height:45%"></i><i style="height:62%"></i><i style="height:48%"></i><i style="height:71%"></i><i style="height:64%"></i><i style="height:82%"></i><i style="height:75%"></i><i style="height:92%"></i></div><small>6 milestones due this week</small></article>
        <article class="metric-card reveal"><div class="metric-label"><span>Revenue at risk</span><span class="trend down">↘ 8.1%</span></div><div class="metric-value">$214<span>K</span></div><div class="risk-split"><i></i><i></i><i></i></div><small>Down $24K since yesterday</small></article>
        <article class="metric-card reveal"><div class="metric-label"><span>On-time delivery</span><span class="trend up">↗ 1.8%</span></div><div class="metric-value">97.3<span>%</span></div><svg class="sparkline" viewBox="0 0 160 32" preserveAspectRatio="none"><path d="M2 27 C18 26 18 18 34 20 S51 26 65 17 82 20 97 12 115 16 130 7 158 4"/><path class="area" d="M2 27 C18 26 18 18 34 20 S51 26 65 17 82 20 97 12 115 16 130 7 158 4 L158 32 L2 32Z"/></svg><small>Best performance this quarter</small></article>
      </section>

      <section class="dashboard-grid">
        <article class="panel map-panel reveal" id="network">
          <div class="panel-head"><div><p class="eyebrow">Client footprint</p><h2>Global portfolio</h2></div><div class="map-legend"><span><i class="healthy"></i>Healthy</span><span><i class="watch"></i>Watch</span><span><i class="danger"></i>Critical</span></div></div>
          <div class="map-wrap" aria-label="Interactive global account map">
            <svg class="world-map" viewBox="0 0 1000 500" role="img" aria-label="Stylized client account map">
              <g class="grid-lines"><path d="M0 100H1000M0 200H1000M0 300H1000M0 400H1000M200 0V500M400 0V500M600 0V500M800 0V500"/></g>
              <g class="land">
                <path d="M70 103l48-44 103 4 67 33 26 48-30 26-38-7-20 29-44 9-29-26-58 2-43-34z"/>
                <path d="M215 224l61 12 41 53-8 55-30 78-34 29-14-57-25-47-21-70z"/>
                <path d="M440 103l49-30 84 8 29 36-26 35-75 5-35-20-41 9-23-20z"/>
                <path d="M488 178l79-8 45 29-13 78-49 93-43-49-30-82z"/>
                <path d="M596 112l70-52 123 10 89 43-19 44-71 5-36 38-70-16-55 18-40-32z"/>
                <path d="M785 308l62-38 71 26 22 55-40 48-76-10-48-42z"/>
                <path d="M891 167l19-20 26 11-7 26-22 6z"/>
              </g>
              <g class="route-lines"><path d="M170 207 Q360 40 500 151"/><path d="M500 151 Q670 65 790 256"/><path d="M790 256 Q500 390 318 377"/><path d="M170 207 Q490 280 790 256"/></g>
            </svg>
            ${incidents.map((incident, index) => `<button class="map-point ${incident.severity}" data-id="${incident.id}" style="left:${incident.x}%;top:${incident.y}%" aria-label="${incident.type} in ${incident.city}"><span></span><b>${index === 0 ? '3' : ''}</b></button>`).join('')}
            <div class="map-tooltip" id="map-tooltip"><span class="tooltip-risk">Critical signal</span><strong>VectorAI · Singapore</strong><small>Scope drift · Risk score 92</small></div>
            <div class="map-stats"><div><span>Markets</span><strong>9</strong></div><div><span>Active clients</span><strong>16</strong></div><div><span>Open projects</span><strong>24</strong></div></div>
          </div>
        </article>

        <article class="panel signals-panel reveal" id="alerts">
          <div class="panel-head"><div><p class="eyebrow">Prioritized by impact</p><h2>Live signals</h2></div><button class="text-button" id="view-all">View all ${icon('arrow', 15)}</button></div>
          <div class="signal-list">
            ${incidents.slice(0, 3).map((item) => `<button class="signal" data-id="${item.id}"><span class="severity-dot ${item.severity}"></span><span class="signal-copy"><strong>${item.type}</strong><small>${item.city} · ${item.time} ago</small></span><span class="signal-risk"><b>${item.risk}</b><small>risk</small></span>${icon('chevron', 16)}</button>`).join('')}
          </div>
          <div class="signal-footer"><span>AI confidence <strong>96.8%</strong></span><span>Next refresh in <strong id="countdown">24s</strong></span></div>
        </article>
      </section>

      <section class="panel routes-panel reveal" id="routes">
          <div class="panel-head"><div><p class="eyebrow">Delivery forecast</p><h2>Priority projects</h2></div><div class="range-switch" role="group" aria-label="Time range"><button class="active">24h</button><button>7d</button><button>30d</button></div></div>
        <div class="route-table" role="table" aria-label="Priority client projects">
          <div class="route-row route-header" role="row"><span>Project</span><span>Status</span><span>Health score</span><span>Forecast</span><span></span></div>
          ${routes.map((route) => `<button class="route-row" role="row"><span><i class="route-icon">${icon('route', 16)}</i><span><strong>${route.name}</strong><small>${route.detail}</small></span></span><span><i class="severity-dot ${route.level}"></i>${route.status}</span><strong>${route.value}</strong><span class="variance ${route.delta.startsWith('+') ? 'bad' : 'good'}">${route.delta}</span>${icon('chevron', 16)}</button>`).join('')}
        </div>
      </section>
      <footer><span>Relay Client Delivery Intelligence</span><span>Data refreshed in real time · Demo environment</span></footer>
    </div>
  </main>

  <div class="drawer-backdrop" id="drawer-backdrop"></div>
  <aside class="detail-drawer" id="detail-drawer" aria-hidden="true" aria-label="Incident details">
    <button class="drawer-close" aria-label="Close details">${icon('close')}</button>
    <p class="eyebrow">Incident intelligence</p><div id="drawer-content"></div>
  </aside>
  <div class="toast" role="status" aria-live="polite"><span>${icon('spark')}</span><div><strong>Daily brief is ready</strong><small>Five insights summarized from 2,410 signals.</small></div></div>
`

const drawer = document.querySelector('#detail-drawer')
const backdrop = document.querySelector('#drawer-backdrop')

function openIncident(id) {
  const item = incidents.find((incident) => incident.id === id)
  if (!item) return
  document.querySelector('#drawer-content').innerHTML = `
    <span class="drawer-badge ${item.severity}">${item.severity} priority</span>
    <h2>${item.type}</h2><p class="drawer-location">${item.city} · ${item.region}</p>
    <div class="drawer-score"><div><span>Risk score</span><strong>${item.risk}</strong></div><div><span>Est. exposure</span><strong>${item.impact}</strong></div></div>
    <div class="drawer-section"><span>Situation overview</span><p>${item.note}</p></div>
    <div class="drawer-section"><span>Recommended action</span><p>Notify the regional lead and activate the pre-approved contingency workflow.</p></div>
    <button class="primary-action">Open response plan ${icon('arrow', 16)}</button>
    <small class="drawer-id">${item.id} · Updated ${item.time} ago</small>`
  drawer.classList.add('open')
  backdrop.classList.add('open')
  drawer.setAttribute('aria-hidden', 'false')
}

function closeDrawer() {
  drawer.classList.remove('open')
  backdrop.classList.remove('open')
  drawer.setAttribute('aria-hidden', 'true')
}

document.querySelectorAll('[data-id]').forEach((el) => el.addEventListener('click', () => openIncident(el.dataset.id)))
document.querySelector('.drawer-close').addEventListener('click', closeDrawer)
backdrop.addEventListener('click', closeDrawer)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDrawer()
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault(); document.querySelector('#global-search').focus()
  }
})

document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('active'))
  item.classList.add('active')
  document.querySelector('.sidebar').classList.remove('mobile-open')
}))

document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('mobile-open'))

document.querySelectorAll('.range-switch button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.range-switch button').forEach((item) => item.classList.remove('active'))
  button.classList.add('active')
}))

document.querySelector('#brief-button').addEventListener('click', (event) => {
  const button = event.currentTarget
  button.innerHTML = '<span class="loader"></span> Analyzing network…'
  button.disabled = true
  window.setTimeout(() => {
    button.innerHTML = `${icon('spark')} Generate daily brief`
    button.disabled = false
    const toast = document.querySelector('.toast')
    toast.classList.add('show')
    window.setTimeout(() => toast.classList.remove('show'), 3500)
  }, 1200)
})

document.querySelector('#view-all').addEventListener('click', () => openIncident('RY-2045'))

let seconds = 24
window.setInterval(() => {
  seconds = seconds <= 1 ? 30 : seconds - 1
  document.querySelector('#countdown').textContent = `${seconds}s`
}, 1000)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
}, { threshold: 0.08 })
document.querySelectorAll('.reveal').forEach((el, index) => { el.style.setProperty('--delay', `${index * 55}ms`); observer.observe(el) })
