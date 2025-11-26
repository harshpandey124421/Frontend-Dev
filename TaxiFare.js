class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance");
        }
        return this.distance * 10;   // simple fare formula
    }
}


const driver = new Driver("Aman", 4.8, "Swift");
const trip = new Trip("Delhi", "Noida", 12);

try {
    console.log("Fare:", trip.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}
