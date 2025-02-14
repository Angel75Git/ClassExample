//Task 1
let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 800,category: "Electronics"},
    {name: "Desk Chair", price: 150, category: "Furniture"},
    {name: "HeadPhones", price: 100, category: "Electronics"}
]

function getProductsByCategory(product_array, category){
    return product_array.filter(product => product.category === category);
}
console.log(getProductsByCategory(products, "Electoronics"))

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

let sales = [250, 400, 150, 900, 1200];

function caluculateTotalRevenue(sales){
    return sales.reduce((total, sale) => total + sale, 0)
}
console.log(`Total Rev. 2024: $${caluculateTotalRevenue(sales)}`);

//Task 4
let employee = {name: "John Doe", salary: 50000, position: "Manager"}
function updateSalary(employee, percentageIncrease){
    return employee.salary += employee.salary * percentageIncrease;
}
console.log(updateSalary(employee, 0.1));

