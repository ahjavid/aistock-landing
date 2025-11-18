import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container-custom py-20 md:py-32">
      <div className="text-center animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 mb-8">
          <span className="text-sm font-semibold text-brand-primary">
            🎓 Educational Research Project
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">
          Production-Ready<br />
          <span className="text-brand-primary">Reinforcement Learning</span><br />
          Trading System
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-brand-text-secondary max-w-3xl mx-auto mb-8">
          Built with Domain-Driven Design | PPO, A2C, SAC Algorithms | Systematic Risk Management
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="card text-center">
            <div className="text-3xl font-bold text-brand-success mb-2">628.09%</div>
            <div className="text-sm text-brand-text-secondary">Top Performer (NEM)</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-brand-primary mb-2">76.4%</div>
            <div className="text-sm text-brand-text-secondary">Average Win Rate</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-brand-text mb-2">30</div>
            <div className="text-sm text-brand-text-secondary">Profitable Symbols</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/performance" className="btn-primary">
            View Performance Metrics
          </Link>
          <Link href="/architecture" className="btn-secondary">
            Explore Architecture
          </Link>
          <a 
            href="https://github.com/ahjavid/Aistock/tree/education"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-text-secondary hover:text-brand-text transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Source Code
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 card max-w-4xl mx-auto border-l-4 border-brand-danger">
          <p className="text-sm text-brand-text-secondary">
            <strong className="text-brand-danger">Important:</strong> This system demonstrates educational RL algorithms.
            <strong> Not financial advice. Not for real trading.</strong> For portfolio and research purposes only.
            Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}
