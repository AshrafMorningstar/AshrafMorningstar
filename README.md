<!-- Background glow circle -->
<circle cx="400" cy="210" r="150" fill="url(#g1)" opacity="0.07"/>


<!-- Body -->
<g transform="translate(120,30)">
<g transform="scale(.9)">
<path d="M200 180 C120 150 40 170 20 230 C44 220 90 260 140 270 C170 276 210 262 240 250 C280 235 360 220 420 200 C450 190 430 150 380 150 C320 145 270 160 200 180 Z" fill="#ff6ea1" opacity=".95" stroke="url(#g1)" stroke-width="2"/>


<!-- Tail (animated with CSS on hover) -->
<path class="tail" d="M420 200 C500 140 560 220 620 200 C590 240 540 240 510 220 C470 200 440 210 420 200 Z" fill="#7af0ff" opacity="0.88" transform-origin="520 210"/>


<!-- Head -->
<g transform="translate(60,10)">
<ellipse cx="140" cy="80" rx="78" ry="68" fill="#ff3b9a" stroke="#ffb0d9" stroke-width="2"/>
<!-- Ears -->
<path d="M80 40 L60 0 L110 28 Z" fill="#ff7ab8"/>
<path d="M210 42 L250 8 L200 30 Z" fill="#85f3ff"/>


<!-- Eyes that 'shift' on hover -->
<g>
<ellipse class="eye" cx="110" cy="90" rx="12" ry="14" fill="#00121a"/>
<ellipse class="eye" cx="175" cy="90" rx="12" ry="14" fill="#00121a"/>
<circle cx="116" cy="86" r="4" fill="#7af0ff"/>
<circle cx="181" cy="86" r="4" fill="#fffc9a"/>
</g>


<!-- Nose -->
<circle cx="142" cy="115" r="8" fill="#0b0f12"/>
</g>
</g>
</g>


<!-- Subtle floor reflection -->
<ellipse cx="400" cy="360" rx="170" ry="18" fill="#000" opacity=".06"/>


<!-- Micro interactivity hint text (visible only in supported renderers) -->
<text x="400" y="30" font-size="18" text-anchor="middle" fill="#ffffff" opacity="0.85" font-family="Segoe UI, Roboto, Helvetica">Hover the fox — it wakes, floats & wags!</text>
</svg>




🔭 About me

I started coding at age 7 and over 15 years built tooling, UIs and creative systems across many languages and platforms. I’m self-taught, driven by curiosity, and I love turning wild ideas into polished products. For a detailed original bio and full tech list see my previous README (source used while crafting this): fileciteturn0file0

🛠️ Tech & Tools

I work across a broad stack — frontend, backend, infra, and design. A short curated selection:

Languages: JavaScript, TypeScript, Python, C, C++, Rust, Dart

Frontend: React, Astro, P5.js, GSAP, Three.js (experiments)

Infra: AWS, Cloudflare, Docker, Terraform, Kubernetes

Design: Figma, Blender, Adobe Suite

Want the full badges grid? Open the original README for the exhaustive stack. I kept this section concise to spotlight projects.

✨ Featured Projects

Neon UI experiments — micro-interactions and motion systems (design + code).

Anti-piracy streaming tools — privacy-first streaming integrations and secure playback modules.

Small bots & tools — 260+ utility bots for automation, monitoring and infra.

(See pinned repos on my profile for direct links.)

📈 GitHub Stats




📫 Find me

GitHub: AshrafMorningstar

Portfolio / Live playgrounds: link from profile (use my GitHub Pages & CodePen for interactive demos)

Donations: BuyMeACoffee / PayPal / Ko-fi (badges above)

🧩 How to reuse the animated header

This README uses an inline SVG + CSS for subtle interaction so it works on GitHub README rendering (no JavaScript required). If you want a truly interactive 3D scene (cursor-driven parallax, physics, richer interactions), I can generate a small Three.js demo for GitHub Pages and wire it to this README — tell me and I’ll create the demo and a one-click deploy script.

License

This README is crafted especially for Ashraf Morningstar. Reuse is allowed — be kind and give credit.

Made with ❤️ and neon by Ashraf Morningstar
