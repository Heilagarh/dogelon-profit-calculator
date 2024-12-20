const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=dogelon-mars,dogecoin,shiba-inu&vs_currencies=usd";

async function calculate() {
    const investment = document.getElementById("investment").value;
    const response = await fetch(API_URL);
    const data = await response.json();

    const dogelonPrice = data["dogelon-mars"].usd;
    const dogeMarketCap = 10000000000; // Replace with dynamic data

    const potentialPrice = dogeMarketCap / 500000000000000;
    const potentialProfit = (investment / dogelonPrice) * potentialPrice;

    document.getElementById("result").textContent = `Potential profit: $${potentialProfit.toFixed(2)}`;
}
