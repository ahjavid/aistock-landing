export default function Architecture() {
  return (
    <section className="container-custom py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
          System Architecture
        </h2>
        <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
          Built with modern software engineering principles and production best practices
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Architecture Diagram Placeholder */}
        <div className="card mb-8">
          <div className="p-8 bg-brand-bg rounded-lg border-2 border-brand-primary/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Frontend */}
              <div className="space-y-4">
                <div className="text-brand-primary font-bold text-lg">Frontend</div>
                <div className="space-y-2 text-sm">
                  <div className="card">Landing Page<br/><span className="text-xs text-brand-text-secondary">Next.js + Vercel</span></div>
                  <div className="card">Dashboard<br/><span className="text-xs text-brand-text-secondary">React + Vite</span></div>
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-4">
                <div className="text-brand-primary font-bold text-lg">Backend</div>
                <div className="space-y-2 text-sm">
                  <div className="card">REST API<br/><span className="text-xs text-brand-text-secondary">FastAPI</span></div>
                  <div className="card">RL Engine<br/><span className="text-xs text-brand-text-secondary">PPO/A2C/SAC</span></div>
                  <div className="card">Risk Management<br/><span className="text-xs text-brand-text-secondary">Domain Layer</span></div>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="space-y-4">
                <div className="text-brand-primary font-bold text-lg">Infrastructure</div>
                <div className="space-y-2 text-sm">
                  <div className="card">Railway<br/><span className="text-xs text-brand-text-secondary">Deployment</span></div>
                  <div className="card">Market Data<br/><span className="text-xs text-brand-text-secondary">Tiingo API</span></div>
                  <div className="card">Storage<br/><span className="text-xs text-brand-text-secondary">Filesystem</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Backend Stack */}
          <div className="card">
            <h3 className="text-xl font-semibold text-brand-text mb-4">Backend Technologies</h3>
            <ul className="space-y-3 text-sm text-brand-text-secondary">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>FastAPI</strong> - High-performance async Python framework</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Stable-Baselines3</strong> - RL algorithm implementations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>PyTorch</strong> - Neural network policy architectures</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Pandas/NumPy</strong> - Data processing and technical indicators</span>
              </li>
            </ul>
          </div>

          {/* Frontend Stack */}
          <div className="card">
            <h3 className="text-xl font-semibold text-brand-text mb-4">Frontend Technologies</h3>
            <ul className="space-y-3 text-sm text-brand-text-secondary">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Next.js 15</strong> - React framework with App Router</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>React 18</strong> - Dashboard with real-time updates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Tailwind CSS</strong> - Utility-first styling system</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-success mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Recharts</strong> - Performance visualization charts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
