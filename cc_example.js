//Task 1
let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 800,category: "Electronics"},
    {name: "Desk Chair", price: 150, category: "Furniture"},
    {name: "HeadPhones", price: 100, category: "Electronics"}
]

// function getProductsByCategory(product_array, category){
//     return product_array.filter(product => product.category === category);
// }
// console.log(getProductsByCategory(products, "Electoronics"))

//Task 2 

function applyDiscount(products, discountRate){
    return products.map(product =>({
        ...product,
    price: product.price- (product.price * discountRate),
    name: product.name.toUpperCase()
    }
        
    ))
}

console.log(applyDiscount(products, 0.1));
console.log("*".repeat(20));
console.log(products);


//Task 3
