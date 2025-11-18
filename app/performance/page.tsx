import { topPerformers, summaryStatistics, backtestInfo } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Metrics',
  description: 'Comprehensive backtest results for top 20 profitable trading symbols using RL algorithms.',
};

export default function PerformancePage() {
  return (
    <div className="container-custom py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
          Performance Metrics
        </h1>
        <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto mb-2">
          Complete backtest results from <strong>{backtestInfo.period}</strong>
        </p>
        <div className="inline-block px-4 py-2 rounded-full bg-brand-warning/10 border border-brand-warning/30 mt-4">
          <span className="text-sm font-semibold text-brand-warning">
            {backtestInfo.risk_profile} • Educational Data Only
          </span>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">
            {summaryStatistics.average_return_pct.toFixed(1)}%
          </div>
          <div className="text-xs text-brand-text-secondary">Avg Return</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">
            {summaryStatistics.average_sharpe_ratio.toFixed(2)}
          </div>
          <div className="text-xs text-brand-text-secondary">Avg Sharpe</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">
            {summaryStatistics.average_win_rate_pct.toFixed(1)}%
          </div>
          <div className="text-xs text-brand-text-secondary">Avg Win Rate</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-success mb-1">
            {summaryStatistics.profitability_rate_pct.toFixed(0)}%
          </div>
          <div className="text-xs text-brand-text-secondary">Profitable</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">
            {summaryStatistics.average_max_drawdown_pct.toFixed(1)}%
          </div>
          <div className="text-xs text-brand-text-secondary">Avg Drawdown</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-brand-text mb-1">
            {summaryStatistics.total_symbols}
          </div>
          <div className="text-xs text-brand-text-secondary">Symbols</div>
        </div>
      </div>

      {/* Performance Table */}
      <div className="card">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-brand-text mb-2">Top 20 Performers</h2>
          <p className="text-sm text-brand-text-secondary">
            Sorted by return percentage • All 30 symbols were profitable
          </p>
        </div>

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
                  Sharpe Ratio
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Win Rate
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Max Drawdown
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Trades
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-brand-text-secondary uppercase tracking-wider">
                  Final Balance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-secondary">
              {topPerformers.map((performer) => (
                <tr key={performer.rank} className="hover:bg-brand-secondary/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-text-secondary">
                    #{performer.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-brand-text">
                      {performer.symbol}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-bold text-brand-success">
                      +{performer.return_pct.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                    {performer.sharpe_ratio.toFixed(3)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                    {performer.win_rate_pct.toFixed(1)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm text-brand-danger">
                      -{performer.max_drawdown_pct.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text-secondary">
                    {performer.total_trades}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-brand-text">
                    ${performer.final_balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Methodology */}
      <div className="card mt-12 border-l-4 border-brand-primary">
        <h3 className="text-xl font-bold text-brand-text mb-4">Backtest Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-brand-text-secondary">
          <div>
            <h4 className="font-semibold text-brand-text mb-2">RL Algorithms</h4>
            <ul className="space-y-1 list-disc list-inside">
              {backtestInfo.algorithms.map((algo) => (
                <li key={algo}>{algo}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-2">Policy Networks</h4>
            <ul className="space-y-1 list-disc list-inside">
              {backtestInfo.policy_networks.map((network) => (
                <li key={network}>{network}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-2">Validation</h4>
            <p>{backtestInfo.validation_method}</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-2">Risk Management</h4>
            <p>{backtestInfo.risk_management}</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-6 card border-l-4 border-brand-danger">
        <h3 className="text-lg font-bold text-brand-danger mb-2">Important Disclaimer</h3>
        <p className="text-sm text-brand-text-secondary">
          These results are for <strong>educational and research purposes only</strong>. Past performance does not
          guarantee future results. This data represents backtested performance and may not reflect actual trading
          results. Market conditions change, and real trading involves additional costs, slippage, and psychological
          factors not captured in backtests. <strong>Not financial advice. Do not use for real trading decisions.</strong>
        </p>
      </div>
    </div>
  );
}
