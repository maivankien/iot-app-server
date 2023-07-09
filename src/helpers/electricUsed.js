const electricityBill = (quantity) => {
    let result = 0;

    if (quantity <= 50) {
        result = quantity * 1728;
    } else if (quantity <= 100) {
        result = 50 * 1728 + (quantity - 50) * 1786;
    } else if (quantity <= 200) {
        result = 50 * 1728 + 50 * 1786 + (quantity - 100) * 2074;
    } else if (quantity <= 300) {
        result = 50 * 1728 + 50 * 1786 + 100 * 2074 + (quantity - 200) * 2612;
    } else if (quantity <= 400) {
        result = 50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (quantity - 300) * 2919;
    } else {
        result = 50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (quantity - 400) * 3015;
    }

    return result;
}


module.exports = electricityBill

const sanLuongDien = 250;
const tienDien = electricityBill(sanLuongDien) + electricityBill(sanLuongDien) * 0.1;
console.log("Tiền điện: " + tienDien + " đồng");
