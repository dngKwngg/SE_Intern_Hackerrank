const products = ["egg", "tea", "milk"];
const productsPrice = [2, 3, 4];
const productSold = ["egg", "egg", "tea", "milk"];
const soldPrice = [2, 3, 4, 4];

function priceCheck(products, productsPrice, productSold, soldPrice) {
    let count = 0;
    for (let i = 0; i < productSold.length; i++) {
        if (products.includes(productSold[i])) {
            if (
                productsPrice[products.indexOf(productSold[i])] !== soldPrice[i]
            ) {
                count++;
            }
        }
    }
    return count;
}
