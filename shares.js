const stocks = {Apple: "AAPL", Microsoft: "MSFT", Google: "GOOG"}
const portfolio = {AAPL: 10, MSFT: 100, GOOG: 300}

function addStock(portfolio, stock, shares) {
    portfolio[stock] += shares
}

addStock(portfolio, stocks.Microsoft, 90)
addStock(portfolio, stocks.Apple, 1000)_