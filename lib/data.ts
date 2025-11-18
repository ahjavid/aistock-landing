// Performance data from excellent_performers_stats.json
// Backtest period: 2025-01-01 to 2025-09-30
// Risk profile: Aggressive (50-75% positions)

export interface Performer {
  rank: number;
  symbol: string;
  return_pct: number;
  sharpe_ratio: number;
  win_rate_pct: number;
  max_drawdown_pct: number;
  total_trades: number;
  final_balance: number;
  training_reward: number;
}

export const topPerformers: Performer[] = [
  {
    rank: 1,
    symbol: "NEM",
    return_pct: 628.09,
    sharpe_ratio: 3.619,
    win_rate_pct: 85.7,
    max_drawdown_pct: 9.57,
    total_trades: 28,
    final_balance: 72808.66,
    training_reward: 42.21
  },
  {
    rank: 2,
    symbol: "ORCL",
    return_pct: 489.33,
    sharpe_ratio: 3.062,
    win_rate_pct: 87.1,
    max_drawdown_pct: 13.37,
    total_trades: 31,
    final_balance: 58933.04,
    training_reward: 34.73
  },
  {
    rank: 3,
    symbol: "AVGO",
    return_pct: 400.42,
    sharpe_ratio: 3.28,
    win_rate_pct: 80.6,
    max_drawdown_pct: 9.9,
    total_trades: 36,
    final_balance: 50041.5,
    training_reward: 35.0
  },
  {
    rank: 4,
    symbol: "ACN",
    return_pct: 270.49,
    sharpe_ratio: 2.35,
    win_rate_pct: 95.2,
    max_drawdown_pct: 0.33,
    total_trades: 21,
    final_balance: 37049.22,
    training_reward: 36.75
  },
  {
    rank: 5,
    symbol: "ADBE",
    return_pct: 216.06,
    sharpe_ratio: 2.852,
    win_rate_pct: 90.9,
    max_drawdown_pct: 8.16,
    total_trades: 22,
    final_balance: 31605.81,
    training_reward: 45.74
  },
  {
    rank: 6,
    symbol: "NVDA",
    return_pct: 178.34,
    sharpe_ratio: 2.547,
    win_rate_pct: 80.6,
    max_drawdown_pct: 20.59,
    total_trades: 36,
    final_balance: 27833.61,
    training_reward: 42.72
  },
  {
    rank: 7,
    symbol: "CAT",
    return_pct: 138.1,
    sharpe_ratio: 3.32,
    win_rate_pct: 85.7,
    max_drawdown_pct: 13.08,
    total_trades: 21,
    final_balance: 23809.53,
    training_reward: 42.39
  },
  {
    rank: 8,
    symbol: "ABBV",
    return_pct: 133.29,
    sharpe_ratio: 1.721,
    win_rate_pct: 86.4,
    max_drawdown_pct: 9.23,
    total_trades: 22,
    final_balance: 23328.95,
    training_reward: 33.04
  },
  {
    rank: 9,
    symbol: "C",
    return_pct: 104.09,
    sharpe_ratio: 2.196,
    win_rate_pct: 83.3,
    max_drawdown_pct: 11.9,
    total_trades: 18,
    final_balance: 20408.71,
    training_reward: 34.3
  },
  {
    rank: 10,
    symbol: "GOOGL",
    return_pct: 87.17,
    sharpe_ratio: 1.482,
    win_rate_pct: 57.7,
    max_drawdown_pct: 36.45,
    total_trades: 26,
    final_balance: 18717.28,
    training_reward: 44.87
  },
  {
    rank: 11,
    symbol: "TMO",
    return_pct: 86.23,
    sharpe_ratio: 2.76,
    win_rate_pct: 81.2,
    max_drawdown_pct: 17.64,
    total_trades: 16,
    final_balance: 18623.0,
    training_reward: 39.17
  },
  {
    rank: 12,
    symbol: "CRM",
    return_pct: 85.15,
    sharpe_ratio: 2.657,
    win_rate_pct: 85.7,
    max_drawdown_pct: 4.09,
    total_trades: 21,
    final_balance: 18515.0,
    training_reward: 43.38
  },
  {
    rank: 13,
    symbol: "PM",
    return_pct: 82.12,
    sharpe_ratio: 2.162,
    win_rate_pct: 61.5,
    max_drawdown_pct: 32.83,
    total_trades: 26,
    final_balance: 18212.0,
    training_reward: 25.13
  },
  {
    rank: 14,
    symbol: "MS",
    return_pct: 75.36,
    sharpe_ratio: 1.945,
    win_rate_pct: 77.3,
    max_drawdown_pct: 23.09,
    total_trades: 22,
    final_balance: 17536.0,
    training_reward: 46.13
  },
  {
    rank: 15,
    symbol: "JNJ",
    return_pct: 74.42,
    sharpe_ratio: 3.637,
    win_rate_pct: 56.5,
    max_drawdown_pct: 5.2,
    total_trades: 23,
    final_balance: 17442.0,
    training_reward: 39.05
  },
  {
    rank: 16,
    symbol: "GE",
    return_pct: 70.42,
    sharpe_ratio: 1.558,
    win_rate_pct: 66.7,
    max_drawdown_pct: 34.56,
    total_trades: 24,
    final_balance: 17042.0,
    training_reward: 37.95
  },
  {
    rank: 17,
    symbol: "T",
    return_pct: 67.62,
    sharpe_ratio: 2.274,
    win_rate_pct: 87.0,
    max_drawdown_pct: 4.81,
    total_trades: 23,
    final_balance: 16762.0,
    training_reward: 39.99
  },
  {
    rank: 18,
    symbol: "PFE",
    return_pct: 64.16,
    sharpe_ratio: 1.75,
    win_rate_pct: 80.0,
    max_drawdown_pct: 6.24,
    total_trades: 20,
    final_balance: 16416.0,
    training_reward: 34.96
  },
  {
    rank: 19,
    symbol: "MSFT",
    return_pct: 59.55,
    sharpe_ratio: 2.644,
    win_rate_pct: 77.8,
    max_drawdown_pct: 8.7,
    total_trades: 18,
    final_balance: 15955.0,
    training_reward: 44.06
  },
  {
    rank: 20,
    symbol: "BX",
    return_pct: 53.14,
    sharpe_ratio: 2.284,
    win_rate_pct: 82.4,
    max_drawdown_pct: 8.13,
    total_trades: 17,
    final_balance: 15314.0,
    training_reward: 37.78
  }
];

export const summaryStatistics = {
  total_symbols: 30,
  average_return_pct: 126.2,
  average_sharpe_ratio: 2.147,
  average_win_rate_pct: 76.4,
  best_return_pct: 628.09,
  worst_return_pct: 31.74,
  median_return_pct: 74.42,
  profitable_symbols: 30,
  loss_symbols: 0,
  profitability_rate_pct: 100.0,
  average_max_drawdown_pct: 15.01
};

export const backtestInfo = {
  period: "2025-01-01 to 2025-09-30",
  risk_profile: "Aggressive (50-75% positions)",
  algorithms: ["PPO", "A2C", "SAC"],
  policy_networks: ["Transformer", "CNN-LSTM", "MLP"],
  validation_method: "Walk-forward trained models, out-of-sample testing",
  risk_management: "Dynamic tiered stop-loss (7-11%), Kelly criterion, 22-day time limit"
};
