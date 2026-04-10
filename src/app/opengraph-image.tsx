import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'INFINICOREX — Software Engineering, Product Design & IT Services';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #007ACC 0%, #005a99 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '28px', fontWeight: 800, color: 'white' }}>IX</span>
          </div>
          <span style={{ fontSize: '48px', fontWeight: 800, color: 'white', letterSpacing: '-1px' }}>
            INFINICOREX
          </span>
        </div>
        <p
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 500,
            maxWidth: '700px',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Software Engineering, Product Design & IT Services
        </p>
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '24px',
          }}
        >
          www.infinicorex.co.za
        </p>
      </div>
    ),
    { ...size },
  );
}
