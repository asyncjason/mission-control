import { NextResponse } from 'next/server'

/**
 * GET /api/gateway-ws-config
 * Returns gateway WebSocket configuration from runtime environment variables.
 * NEXT_PUBLIC_* vars are baked at build time by Next.js, so client-side code
 * cannot read them at runtime. This endpoint exposes them server-side.
 */
export async function GET() {
  return NextResponse.json({
    token: (process.env.NEXT_PUBLIC_GATEWAY_TOKEN || process.env.NEXT_PUBLIC_WS_TOKEN || '').trim(),
    host: (process.env.NEXT_PUBLIC_GATEWAY_HOST || '').trim(),
    port: (process.env.NEXT_PUBLIC_GATEWAY_PORT || '18789').trim(),
    protocol: (process.env.NEXT_PUBLIC_GATEWAY_PROTOCOL || '').trim(),
    url: (process.env.NEXT_PUBLIC_GATEWAY_URL || '').trim(),
  })
}
