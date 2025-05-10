function maxProfit(prices) {
  let globalProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];

      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }
  return globalProfit;
}
//console.log(maxProfit([7, 1, 5, 3, 6, 4]));

const maxProfit = function (prices) {};
