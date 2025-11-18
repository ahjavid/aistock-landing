import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture | Algorithmic Trading Research',
  description: 'Explore the system architecture and design patterns of our RL trading system.',
};

export default function ArchitecturePage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            System Architecture
          </h1>
          <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
            Built with Domain-Driven Design, clean architecture, and production-grade engineering practices
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-6">Architecture Overview</h2>
          <div className="bg-brand-bg rounded-lg p-8 border-2 border-brand-primary/30 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-brand-primary font-bold text-lg mb-4">Presentation Layer</div>
                <div className="card">
                  <div className="font-semibold mb-1">Landing Page</div>
                  <div className="text-xs text-brand-text-secondary">Next.js + Vercel</div>
                </div>
                <div className="card">
                  <div className="font-semibold mb-1">Dashboard</div>
                  <div className="text-xs text-brand-text-secondary">React + Vite</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="text-brand-primary font-bold text-lg mb-4">Application Layer</div>
                <div className="card">
                  <div className="font-semibold mb-1">REST API</div>
                  <div className="text-xs text-brand-text-secondary">FastAPI</div>
                </div>
                <div className="card">
                  <div className="font-semibold mb-1">RL Engine</div>
                  <div className="text-xs text-brand-text-secondary">PPO/A2C/SAC</div>
                </div>
                <div className="card">
                  <div className="font-semibold mb-1">Risk Management</div>
                  <div className="text-xs text-brand-text-secondary">Domain Services</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="text-brand-primary font-bold text-lg mb-4">Infrastructure</div>
                <div className="card">
                  <div className="font-semibold mb-1">Railway</div>
                  <div className="text-xs text-brand-text-secondary">Deployment</div>
                </div>
                                <div className="card hover:scale-105 transition-transform">
                  <div className="font-semibold mb-1">Market Data</div>
                  <div className="text-xs text-brand-text-secondary">Tiingo API</div>
                </div>
                <div className="card">
                  <div className="font-semibold mb-1">Storage</div>
                  <div className="text-xs text-brand-text-secondary">PostgreSQL + Redis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain-Driven Design */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-6">Domain-Driven Design</h2>
          <p className="text-brand-text-secondary mb-6">
            The system follows DDD principles with clear bounded contexts and separation of concerns:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-primary/30">
              <h3 className="font-bold text-brand-primary mb-3">Trading Context</h3>
              <ul className="space-y-2 text-sm text-brand-text-secondary">
                <li>• Position Aggregate (entry, exit, P&L)</li>
                <li>• Trade Domain Events</li>
                <li>• Portfolio Value Objects</li>
                <li>• Trading Rules & Policies</li>
              </ul>
            </div>
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-primary/30">
              <h3 className="font-bold text-brand-primary mb-3">RL Context</h3>
              <ul className="space-y-2 text-sm text-brand-text-secondary">
                <li>• Model Training Services</li>
                <li>• Prediction Aggregates</li>
                <li>• Environment Simulations</li>
                <li>• Reward Calculations</li>
              </ul>
            </div>
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-primary/30">
              <h3 className="font-bold text-brand-primary mb-3">Risk Context</h3>
              <ul className="space-y-2 text-sm text-brand-text-secondary">
                <li>• Stop-Loss Policies</li>
                <li>• Position Sizing (Kelly)</li>
                <li>• Drawdown Management</li>
                <li>• Risk Metrics Tracking</li>
              </ul>
            </div>
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-primary/30">
              <h3 className="font-bold text-brand-primary mb-3">Market Context</h3>
              <ul className="space-y-2 text-sm text-brand-text-secondary">
                <li>• Price Data Services</li>
                <li>• Technical Indicators</li>
                <li>• Market Regime Detection</li>
                <li>• Volatility Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RL Pipeline */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-6">RL Pipeline</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-text mb-1">Data Collection</h3>
                <p className="text-sm text-brand-text-secondary">Historical price data, technical indicators, market regime features</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-brand-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-text mb-1">Environment Setup</h3>
                <p className="text-sm text-brand-text-secondary">Custom Gym environment with realistic trading simulation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-brand-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-text mb-1">Model Training</h3>
                <p className="text-sm text-brand-text-secondary">PPO/A2C/SAC with Transformer/CNN-LSTM/MLP networks</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-brand-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-text mb-1">Backtesting</h3>
                <p className="text-sm text-brand-text-secondary">Walk-forward validation with out-of-sample testing</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-brand-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-text mb-1">Production Deployment</h3>
                <p className="text-sm text-brand-text-secondary">Railway deployment with FastAPI serving predictions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Management */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-text mb-6">Risk Management System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-danger/30">
              <h3 className="font-bold text-brand-danger mb-3">Stop-Loss</h3>
              <p className="text-sm text-brand-text-secondary">Dynamic tiered stops: 7-11% based on volatility</p>
            </div>
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-warning/30">
              <h3 className="font-bold text-brand-warning mb-3">Position Sizing</h3>
              <p className="text-sm text-brand-text-secondary">Kelly criterion for optimal bet sizing</p>
            </div>
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-primary/30">
              <h3 className="font-bold text-brand-primary mb-3">Time Limits</h3>
              <p className="text-sm text-brand-text-secondary">Max 22-day hold period to limit exposure</p>
            </div>
          </div>
        </div>

        {/* API Example */}
        <div className="card">
          <h2 className="text-2xl font-bold text-brand-text mb-6">API Example</h2>
          <p className="text-brand-text-secondary mb-4">
            The backend exposes a RESTful API for predictions and trading operations:
          </p>
          <div className="bg-brand-bg p-6 rounded-lg border border-brand-primary/30 overflow-x-auto">
            <pre className="text-sm text-brand-text-secondary">
{`curl -X POST \\
  -H "X-API-Key: aistock_test_key_2_standard_ml_backtest_2024" \\
  -H "Content-Type: application/json" \\
  -d '{"symbol": "NEM"}' \\
  https://aistock-production-2561.up.railway.app/api/v1/rl/predict

Response:
{
  "action_type": "BUY",
  "position_size": 0.65,
  "expected_return": 0.082,
  "volatility": 0.285,
  "risk_level": "moderate",
  "approved": true,
  "metadata": {
    "current_price": 45.17,
    "stop_loss": 41.95,
    "take_profit": 50.59
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
