import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.logoContainer}>
          <Image
            src="https://avatars.githubusercontent.com/u/49615491?s=200&v=4"
            alt="@onivoro"
            width={120}
            height={120}
            className={styles.logo}
            priority
          />
        </div>

        <h1 className={styles.title}>
          <span className={styles.at}>@</span>onivoro
        </h1>

        <p className={styles.tagline}>
          Omnivorous TypeScript
        </p>
      </div>

      <section className={styles.mission}>
        <h2 className={styles.sectionTitle}>The Vibe</h2>
        <p className={styles.missionText}>
          We believe that TypeScript is the universal language of modern software development.
          Our mission is to <strong>consume everything in TypeScript</strong> — bridging gaps
          between platforms, services, and data formats to facilitate <em>accelerated software
          development</em>.
        </p>
        <p className={styles.missionText}>
          By providing high-quality, open-source npm packages, we empower developers to integrate
          any technology, API, or data source into their TypeScript and TypeScript projects with
          minimal friction.
        </p>
      </section>

      <section className={styles.principles}>
        <h2 className={styles.sectionTitle}>Core Principles</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>{"{ }"}</div>
            <h3>Universal Consumption</h3>
            <p>
              Every API, every data format, every service — accessible through clean,
              intuitive TypeScript interfaces.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>{"<>"}</div>
            <h3>TypeScript First</h3>
            <p>
              Full type safety and excellent developer experience with comprehensive
              TypeScript definitions.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>{"()"}</div>
            <h3>Zero Friction</h3>
            <p>
              Simple APIs that just work. Install, import, and start building —
              no complex configuration required.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>{"[]"}</div>
            <h3>Open Source</h3>
            <p>
              All packages are open source and community-driven, fostering
              collaboration and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.architecture}>
        <h2 className={styles.sectionTitle}>Isomorphic TypeScript IS  Advanced Architecture</h2>
        <p className={styles.architectureIntro}>
          TypeScript's unique position as a language that runs <strong>everywhere</strong> — browsers,
          servers, edge functions, mobile apps, and CLIs — makes it the only language capable of <em>maximally achieving</em> advanced software architecture patterns.
        </p>

        <div className={styles.architectureGrid}>
          <div className={styles.architectureCard}>
            <div className={styles.architectureIcon}>🧅</div>
            <h3>Onion Architecture</h3>
            <p className={styles.architectureDescription}>
              Onion Architecture organizes code in concentric layers where dependencies flow <strong>inward</strong>.
              The innermost layer contains your domain entities and business logic — completely isolated from
              external concerns. Outer layers handle infrastructure, APIs, and UI.
            </p>
            <div className={styles.layers}>
              <div className={styles.layer}>
                <span className={styles.layerLabel}>Domain Entities</span>
                <span className={styles.layerDesc}>Pure business objects with no dependencies</span>
              </div>
              <div className={styles.layer}>
                <span className={styles.layerLabel}>Domain Services</span>
                <span className={styles.layerDesc}>Business logic and use cases</span>
              </div>
              <div className={styles.layer}>
                <span className={styles.layerLabel}>Application Services</span>
                <span className={styles.layerDesc}>Orchestration and coordination</span>
              </div>
              <div className={styles.layer}>
                <span className={styles.layerLabel}>Infrastructure</span>
                <span className={styles.layerDesc}>Databases, APIs, frameworks</span>
              </div>
            </div>
          </div>

          <div className={styles.architectureCard}>
            <div className={styles.architectureIcon}>⬡</div>
            <h3>Hexagonal Architecture</h3>
            <p className={styles.architectureDescription}>
              Also known as "Ports and Adapters," Hexagonal Architecture isolates your core business logic
              from external systems through well-defined <strong>ports</strong> (interfaces) and <strong>adapters</strong> (implementations). Your domain never knows if it's talking to
              a REST API, GraphQL, CLI, or test mock.
            </p>
            <div className={styles.hexDiagram}>
              <div className={styles.hexCore}>
                <span>Core Domain</span>
              </div>
              <div className={styles.hexPorts}>
                <span className={styles.port}>API Port</span>
                <span className={styles.port}>DB Port</span>
                <span className={styles.port}>Event Port</span>
                <span className={styles.port}>UI Port</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.whyTypescript}>
          <h3 className={styles.whyTitle}>Why Only TypeScript Can Maximally Achieve These Patterns</h3>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <h4>🌐 True Isomorphism</h4>
              <p>
                Share your domain layer <strong>literally</strong> — the same code runs in Node.js,
                Deno, Bun, browsers, React Native, and Electron. No "port" to another language,
                no serialization boundaries, no type mismatches.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h4>🔒 Compile-Time Guarantees</h4>
              <p>
                TypeScript's structural type system enforces architectural boundaries at compile time.
                Ports are interfaces, adapters implement them — violations are caught before runtime.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h4>📦 Single Dependency Graph</h4>
              <p>
                bun/npm/yarn/pnpm provide a unified package ecosystem. Your domain package is consumed
                identically by your API server, web app, mobile app, and CLI — with full IntelliSense.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h4>🎭 Multiparadigm Programming</h4>
              <p>
                TypeScript embraces both <strong>functional</strong> and <strong>object-oriented</strong> paradigms seamlessly.
                Arrow functions, higher-order functions, and immutable patterns coexist with classes, decorators, and inheritance —
                all with exceptional signal-to-noise ratio in syntax.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h4>🔄 Seamless Refactoring</h4>
              <p>
                Rename a domain method and watch it propagate across your entire stack — server,
                client, mobile, CLI — with full IDE support. No grep-and-pray across language boundaries.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h4>⚡ Developer Velocity</h4>
              <p>
                One language, one mental model, one set of patterns. Full-stack developers
                move fluidly between layers without context-switching costs. Junior devs
                ramp up on the entire stack simultaneously.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.comparison}>
          <p className={styles.comparisonText}>
            Other languages claim "full-stack" capabilities, but only TypeScript delivers <strong> zero-friction code sharing</strong> across the entire application spectrum.
            Java/Kotlin require separate codebases for web. Python can't run in browsers.
            Go lacks frontend support. Rust compiles to WASM but with significant ceremony. <em>TypeScript is the only language where your domain layer is truly portable.</em>
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.sectionTitle}>Get Started</h2>
        <div className={styles.links}>
          <a
            href="https://github.com/onivoro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryLink}
          >
            <svg className={styles.githubIcon} viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Explore on GitHub
          </a>
          <a
            href="https://www.npmjs.com/org/onivoro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryLink}
          >
            <svg className={styles.npmIcon} viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 0v16h16V0H0zm13 13H8V5H5v8H3V3h10v10z"/>
            </svg>
            Browse npm Packages
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          <span className={styles.copyright}>&copy; {new Date().getFullYear()}</span> @onivoro
          &nbsp;·&nbsp;
          <a href="https://github.com/onivoro" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
