/* Simple module which calculates the percent increase */

class PercentIncreaseCalculator {
    /**
     * @param initialValue the initial purchase value of an asset
     * @param finalValue the target sell price of an asset
     */
    constructor(initialValue, finalValue) {
        this.initialValue = initialValue;
        this.finalValue = finalValue;
    }

    /**
     * Calculates the percent increase of the two given values
     * @returns {number} the percent increase
     */
    calculatePercentIncrease() {
        if (this.initialValue !== 0)
            return 100 * ((this.finalValue - this.initialValue) / Math.abs(this.initialValue));
        console.log('Your initial value cannot be 0\n');
    }


    /*
     * Calculates the difference between the two given values
     * @returns {number} the different between final - initial
     */
    calculateDifference() {
        return this.finalValue - this.initialValue;
    }
}

//                    ============================ Calculations Testing  ============================
const calculator = new PercentIncreaseCalculator(0, 1);

console.log("Percent Increase: " + calculator.calculatePercentIncrease())
console.log("Difference: " + calculator.calculateDifference().toFixed(2))