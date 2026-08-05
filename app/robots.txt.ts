import { NextResponse } from 'next/server';

const robots = `User-agent: *
Allow: /
Sitemap: https://www.himeshpun.com.np/sitemap.xml
`;

export function GET() {
  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
