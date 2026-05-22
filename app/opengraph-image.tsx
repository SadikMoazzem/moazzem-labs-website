import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #F6F2EA 0%, #EFE7D4 100%)',
          color: '#0F1414',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 16,
              background: '#0E8A78',
              color: '#F6F2EA',
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>
            {SITE.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Innovation with
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: '#0E8A78',
            }}
          >
            Integrity.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#566066',
              maxWidth: 880,
              lineHeight: 1.35,
              marginTop: 8,
            }}
          >
            Privacy-first technology for Muslim communities — apps, websites
            and admin tools built to serve, not exploit.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#566066',
            fontSize: 22,
          }}
        >
          <div style={{ display: 'flex' }}>moazzemlabs.com</div>
          <div style={{ display: 'flex' }}>MyLocalMasjid · SalahTimez</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
