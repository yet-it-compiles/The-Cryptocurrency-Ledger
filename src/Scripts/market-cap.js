/* Simple module which calculates the market cap of an asset */

class MarketCap {
    /**
     * @param currentPrice the current price of the asset
     * @param circulatingSupply the amount of actively available coins
     */
    constructor(currentPrice, circulatingSupply) {
        this.currentPrice = currentPrice;
        this.circulatingSupply = circulatingSupply;
    }

    /**
     * Calculates the total market cap the asset can achieve
     * @returns {number} the market cap for the asset
     */
    calculateMarketCap() {
        return this.circulatingSupply * this.currentPrice;
    }
}