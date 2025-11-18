import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Algorithmic Trading Research',
  description: 'Learn about our educational RL trading system and research mission.',
};

export default function AboutPage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            About This Project
          </h1>
          <p className="text-lg text-brand-text-secondary">
            Educational demonstration of production-ready reinforcement learning trading algorithms
          </p>
        </div>

        {/* Mission */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Our Mission</h2>
          <p className="text-brand-text-secondary mb-4">
            This project aims to demonstrate how advanced machine learning techniques can be applied to
            algorithmic trading in a <strong>production-ready, well-engineered system</strong>. Our goal is
            to provide transparency into the architecture, methodology, and performance of reinforcement
            learning algorithms in a financial context.
          </p>
          <p className="text-brand-text-secondary">
            <strong className="text-brand-warning">Important:</strong> This is an educational research demonstration.
            <strong>Not financial advice</strong> and <strong>not intended for real trading</strong>.
            Built to showcase advanced ML engineering and system design capabilities.
          </p>
        </div>

        {/* What We Built */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-4">What We Built</h2>
          <div className="space-y-4 text-brand-text-secondary">
            <div>
              <h3 className="font-semibold text-brand-text mb-2">🤖 Advanced RL Algorithms</h3>
              <p>Three distinct algorithms (PPO, A2C, SAC) each paired with specialized neural architectures—Transformers for sequence modeling, CNN-LSTM for pattern recognition, and MLPs for rapid inference.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-text mb-2">🏗️ Domain-Driven Design</h3>
              <p>Professional software architecture with isolated trading, risk, and market contexts. Each bounded context maintains its own models, ensuring scalability and reducing coupling between components.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-text mb-2">⚡ Production Infrastructure</h3>
              <p>Distributed system deployed across Railway (backend API), Vercel (landing page), with separate React dashboard. Demonstrates modern cloud-native architecture and DevOps workflows.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-text mb-2">📊 Rigorous Backtesting</h3>
              <p>Walk-forward validation with out-of-sample testing, comprehensive performance metrics,
              and realistic simulation of trading conditions including costs and slippage.</p>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-brand-primary mb-3">Backend</h3>
              <ul className="space-y-2 text-brand-text-secondary">
                <li>• FastAPI (Python)</li>
                <li>• Stable-Baselines3 (RL)</li>
                <li>• PyTorch (Neural Networks)</li>
                <li>• Pandas/NumPy (Data)</li>
                <li>• Railway (Deployment)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-3">Frontend</h3>
              <ul className="space-y-2 text-brand-text-secondary">
                <li>• Next.js 15 (Landing)</li>
                <li>• React 18 (Dashboard)</li>
                <li>• Tailwind CSS (Styling)</li>
                <li>• Recharts (Visualization)</li>
                <li>• Vercel (Deployment)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-4">Open Source</h2>
          <p className="text-brand-text-secondary mb-4">
            This project is open source and available on GitHub. We welcome contributions, feedback, and
            discussions about reinforcement learning, trading systems, and software architecture.
          </p>
          <a 
            href="https://github.com/ahjavid/Aistock/tree/education"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
