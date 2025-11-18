import Link from 'next/link';
import { topPerformers } from '@/lib/data';

export default function PerformanceHighlights() {
  // Show top 5 performers on home page
  const highlights = topPerformers.slice(0, 5);

  return (
    <section className="container-custom py-16 bg-brand-surface/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
          Performance Highlights
        </h2>
        <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto mb-2">
          Backtest results from 2025-01-01 to 2025-09-30
        </p>
        <p className="text-sm text-brand-warning">
          Aggressive risk profile (50-75% positions) • Educational data only
        </p>
      </div>

      <div className="card max-w-5xl mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-brand-secondary">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Symbol
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Return
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Sharpe
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Win Rate
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Trades
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-secondary">
              {highlights.map((performer) => (
                <tr key={performer.rank} className="hover:bg-brand-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-text-secondary">
                    #{performer.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-brand-text">
                      {performer.symbol}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-bold text-brand-success">
                      +{performer.return_pct.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                    {performer.sharpe_ratio.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                    {performer.win_rate_pct.toFixed(1)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text-secondary">
                    {performer.total_trades}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <Link href="/performance" className="btn-primary">
            View All 30 Performers
          </Link>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">126.2%</div>
          <div className="text-xs text-brand-text-secondary">Avg Return</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">2.147</div>
          <div className="text-xs text-brand-text-secondary">Avg Sharpe</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">76.4%</div>
          <div className="text-xs text-brand-text-secondary">Avg Win Rate</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-success mb-1">100%</div>
          <div className="text-xs text-brand-text-secondary">Profitable</div>
        </div>
      </div>
    </section>
  );
}
