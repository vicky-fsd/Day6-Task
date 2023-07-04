class UberPriceCalculator {
  constructor(baseFare, costPerKm, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distanceInMiles, durationInMinutes) {
    var distanceCost = this.costPerKm * distanceInMiles;
    var durationCost = this.costPerMinute * durationInMinutes;
    var totalPrice = this.baseFare + distanceCost + durationCost;
    return totalPrice;
  }
}
var calculator = new UberPriceCalculator(100, 2, 1);
var distance = 10; // 10 Kms
var duration = 25; // 25 minutes

var totalPrice = calculator.calculatePrice(distance, duration);
console.log(`The total price of the Uber ride is Rs. ${totalPrice}`); //output : The total price of the Uber ride is Rs. 145
