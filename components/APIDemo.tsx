'use client';

import { useState } from 'react';

export default function APIDemo() {
  const [symbol, setSymbol] = useState('NEM');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Top 20 performers from backtest data - only these symbols are trained
  const popularSymbols = ['NEM', 'ORCL', 'AVGO', 'ACN', 'ADBE', 'NVDA', 'CAT', 'GOOGL'];

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('https://aistock-production-2561.up.railway.app/api/v1/rl/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': 'aistock_test_key_2_standard_ml_backtest_2024'
        },
        body: JSON.stringify({ symbol: symbol.toUpperCase() })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Live API Demo
          </h2>
          <p className="text-lg text-brand-text-secondary">
            Try the RL prediction API with real-time symbol analysis
          </p>
        </div>

        <div className="card bg-gradient-to-br from-brand-surface to-brand-surface/50">
          {/* Symbol Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-text mb-2">
              Stock Symbol
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="Enter symbol (e.g., AAPL)"
                className="flex-1 px-4 py-2 bg-brand-bg border border-brand-primary/30 rounded-lg text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button
                onClick={handlePredict}
                disabled={loading || !symbol}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Get Prediction'}
              </button>
            </div>
          </div>

          {/* Quick Select Buttons */}
          <div className="mb-6">
            <div className="text-sm text-brand-text-secondary mb-2">Quick select:</div>
            <div className="flex flex-wrap gap-2">
              {popularSymbols.map((sym) => (
                <button
                  key={sym}
                  onClick={() => setSymbol(sym)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    symbol === sym
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-bg text-brand-text-secondary hover:bg-brand-primary/20'
                  }`}
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Result Display */}
          {result && (
            <div className="space-y-4">
              {/* Action Header */}
              <div className={`p-4 rounded-lg ${
                result.action_type === 'BUY' ? 'bg-green-500/10 border border-green-500/30' :
                result.action_type === 'SELL' || result.action_type === 'SHORT' ? 'bg-red-500/10 border border-red-500/30' :
                'bg-yellow-500/10 border border-yellow-500/30'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-brand-text">{result.action_type}</div>
                    <div className="text-sm text-brand-text-secondary mt-1">
                      {result.approved ? '✅ Approved' : '⚠️ ' + (result.rejection_reason || 'Not approved')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-brand-text-secondary">Position Size</div>
                    <div className="text-xl font-semibold text-brand-text">
                      {Math.abs(result.position_size * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-brand-bg rounded-lg">
                  <div className="text-xs text-brand-text-secondary mb-1">Confidence</div>
                  <div className="text-lg font-semibold text-brand-text">
                    {(result.confidence * 100).toFixed(1)}%
                  </div>
                </div>
                <div className="p-3 bg-brand-bg rounded-lg">
                  <div className="text-xs text-brand-text-secondary mb-1">Risk Level</div>
                  <div className="text-lg font-semibold text-brand-text capitalize">
                    {result.metadata?.risk_level || 'N/A'}
                  </div>
                </div>
                <div className="p-3 bg-brand-bg rounded-lg">
                  <div className="text-xs text-brand-text-secondary mb-1">Volatility</div>
                  <div className="text-lg font-semibold text-brand-text">
                    {(result.metadata?.volatility * 100 || 0).toFixed(1)}%
                  </div>
                </div>
                <div className="p-3 bg-brand-bg rounded-lg">
                  <div className="text-xs text-brand-text-secondary mb-1">Current Price</div>
                  <div className="text-lg font-semibold text-brand-text">
                    ${result.metadata?.current_price?.toFixed(2) || 'N/A'}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              {result.metadata?.stop_loss && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-brand-bg rounded-lg">
                    <div className="text-xs text-brand-text-secondary mb-1">Stop Loss</div>
                    <div className="text-lg font-semibold text-red-400">
                      ${result.metadata.stop_loss.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-3 bg-brand-bg rounded-lg">
                    <div className="text-xs text-brand-text-secondary mb-1">Take Profit</div>
                    <div className="text-lg font-semibold text-green-400">
                      ${result.metadata.take_profit?.toFixed(2) || 'N/A'}
                    </div>
                  </div>
                </div>
              )}

              {/* Regime & Market Condition */}
              {result.metadata?.regime && (
                <div className="p-3 bg-brand-bg rounded-lg">
                  <div className="text-xs text-brand-text-secondary mb-2">Market Analysis</div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-brand-text">
                      Regime: <span className="font-semibold capitalize">{result.metadata.regime}</span>
                    </span>
                    <span className="text-brand-text">
                      Condition: <span className="font-semibold capitalize">{result.metadata.market_condition?.replace('_', ' ')}</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-4 p-3 bg-brand-warning/10 border border-brand-warning/30 rounded-lg">
                <p className="text-xs text-brand-text-secondary">
                  {result.metadata?.disclaimer || 'Educational research only. Not financial advice.'}
                </p>
              </div>
            </div>
          )}

          {/* Initial State */}
          {!result && !error && !loading && (
            <div className="text-center py-8 text-brand-text-secondary">
              <p>Enter a stock symbol and click "Get Prediction" to see the AI analysis</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
