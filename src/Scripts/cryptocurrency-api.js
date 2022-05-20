/**
 * This module retrieves the requested cryptocurrency attribute information from the API
 */
import CoinGecko from "coingecko-api";

class CryptocurrencyApi{
    // Creates a connection, and initializes the coingecko API client
    CoinGeckoClient = new CoinGecko();

    /**
     *
     * @param requestedCryptocurrency
     * @param requestedCurrency
     */
    constructor(requestedCryptocurrency = "btc", requestedCurrency= "usd") {
        this.requestedCryptocurrency = requestedCryptocurrency;
        this.requestedCurrency = requestedCurrency;

    }

    /**
     * Checks the API server status
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getServerStatus() {
        return this.CoinGeckoClient.ping();
    }

    /**
     * Retrieves the current price of any supported cryptocurrency
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getPrice() {
        return this.CoinGeckoClient.coins.fetch(this.requestedCryptocurrency);
    }

    /**
     * Retrieves a list of all the supported cryptocurrencies
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getSupportedCryptocurrencies(){
        return this.CoinGeckoClient.coins.list();
    }

    /**
     * Retrieves a list of all the cryptocurrencies id which are able to make API calls
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getCryptocurrencyListOfIDs() {
        return this.CoinGeckoClient.coins.all();
    }

    /**
     * Retrieves a list of all supported cryptocurrencies: prices, market cap, and volume.
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getCryptocurrencyMarkets() {
        return this.CoinGeckoClient.coins.markets();
    }

    /**
     * Retrieves current: name, price, and market cap data
     * @returns {Promise<void>}
     */
    async getCryptocurrencyCurrentData() {

    }

    /**
     * Retrieves coin tickers (up to 100 items)
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getCryptocurrencyTickers() {
        return this.CoinGeckoClient.coins.fetchTickers(this.requestedCryptocurrency);
    }

    /**
     * Retrieves historical data: name, price, market, stats through a specified data range
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getCryptocurrencyHistory() {
        return this.CoinGeckoClient.coins.fetchHistory(this.requestedCryptocurrency);
    }

    /**
     * Retrieves historical market data: price, market cap, and 24hr volume (granularity auto)
     *
     * Data granularity is automatic (cannot be adjusted)
     * 1 day from current time = 5 minute interval data
     * 1 - 90 days from current time = hourly data
     * above 90 days from current time = daily data (00:00 UTC)
     *
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getCryptocurrencyMarketChart() {
        return this.CoinGeckoClient.coins.fetchMarketChart(this.requestedCryptocurrency);
    }

    /**
     * Retrieves historical market data: price, market cap, and 24hr volume within a range timestamp (granularity auto)
     *
     * Data granularity is automatic (cannot be adjusted)
     * 1 day from current time = 5 minute interval data
     * 1 - 90 days from current time = hourly data
     * above 90 days from current time = daily data (00:00 UTC)
     *
     * @returns {Promise<{code: number, data: (Object|*), success: boolean, message: string}>}
     */
    async getCryptocurrencyMarketChartRange() {
        return this.CoinGeckoClient.coins.fetchCoinContractMarketChartRange(this.requestedCryptocurrency);
    }

    /**
     * Retrieves: opening price, the highest price achieves, the lowest price hit, and the close price for the period
     * @returns {Promise<void>}
     */
    async getCryptocurrencyOHCL() {

    }

}