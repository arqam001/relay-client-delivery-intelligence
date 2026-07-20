import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('./dist', import.meta.url))
const port = Number(process.env.PORT || 4173)
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.json': 'application/json' }

const brief = {
  generatedAt: new Date().toISOString(),
  summary: 'Portfolio health is strong, with three signals requiring attention.',
  priorities: [
    'Resolve VectorAI scope drift before the next client checkpoint.',
    'Schedule a proactive sentiment recovery call with Harbor.',
    'Escalate production-access approval for the Dubai delivery team.'
  ]
}

createServer(async (request, response) => {
  if (request.url === '/api/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    return response.end(JSON.stringify({ status: 'ok', service: 'relay-api', timestamp: new Date().toISOString() }))
  }
  if (request.url === '/api/brief' && request.method === 'POST') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    return response.end(JSON.stringify({ ...brief, generatedAt: new Date().toISOString() }))
  }

  try {
    const requested = request.url === '/' ? 'index.html' : normalize(request.url.split('?')[0]).replace(/^[/\\]+/, '')
    let file = join(root, requested)
    try { await stat(file) } catch { file = join(root, 'index.html') }
    const body = await readFile(file)
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' })
    response.end(body)
  } catch {
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ error: 'Not found' }))
  }
}).listen(port, () => console.log(`Relay is running at http://localhost:${port}`))
