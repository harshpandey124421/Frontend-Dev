const menu = {
    pizza: 200,
    burger: 120,
    fries: 80,
    coke: 40
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (!menu[item]) {
            throw new Error("Invalid item: " + item);
        }
        return menu[item];
    });

    return prices.reduce((total, p) => total + p, 0);
}


try {
    const total = calculateBill(["pizza", "fries", "coke"]);
    console.log("Total Bill:", total);
} catch (err) {
    console.log("Error:", err.message);
}

try {
    const total2 = calculateBill(["pizza", "icecream"]); // invalid item
    console.log("Total Bill:", total2);
} catch (err) {
    console.log("Error:", err.message);
}
