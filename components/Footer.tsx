export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-white/10 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-brand-text mb-4">About This Project</h3>
            <p className="text-brand-text-secondary text-sm">
              Educational demonstration of production-ready Reinforcement Learning trading algorithms.
              Built with Domain-Driven Design principles.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-text mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/ahjavid/Aistock/tree/education" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                  GitHub Repository (Education Branch)
                </a>
              </li>
              <li>
                <a href="https://railway.app" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                  Railway Deployment
                </a>
              </li>
              <li>
                <a href="/performance" className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                  Performance Metrics
                </a>
              </li>
              <li>
                <a href="/architecture" className="text-brand-text-secondary hover:text-brand-primary transition-colors">
                  System Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-brand-text mb-4">Important Notice</h3>
            <p className="text-brand-text-secondary text-sm mb-3">
              This system is for <strong>educational and research purposes only</strong>.
              Not financial advice. Not for real trading.
            </p>
            <p className="text-brand-text-secondary text-xs">
              Always conduct thorough research and consult financial professionals before making investment decisions.
              Trading involves substantial risk of loss. Past performance does not guarantee future results.
            </p>
            <div className="mt-4 text-xs text-brand-text-secondary">
              <p>© 2025 Algorithmic Trading Research</p>
              <p>Educational Use Only</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-brand-text-secondary">
          <p>
            Built with Next.js, deployed on Vercel • Backend powered by Railway
          </p>
        </div>
      </div>
    </footer>
  );
}
