var Grocery = /** @class */ (function () {
    function Grocery(name, quanity, department, price, sku) {
        this.name = name;
        this.quanity = quanity;
        this.department = department;
        this.price = price;
        this.sku = sku;
        this.item = name + " " + quanity + " " + department + " " + price + " " + sku;
    }
    return Grocery;
}());
function groceries(goods) {
    return goods.name + " " + goods.quanity + " " + goods.department + " " + goods.price + " " + goods.sku;
}
var groceryitem1 = new Grocery("Milk", 1, "Dairy", 2.99, 12345);
var groceryitem2 = new Grocery("Bread", 2, "Groceries", 1.99, 12346);
var groceryitem3 = new Grocery("Eggs", 3, "Dairy", 3.99, 12347);
var groceryitem4 = new Grocery("Coffee", 4, "Beverages", 4.99, 12348);
var groceryitem5 = new Grocery("Apples", 5, "Fruits", 5.99, 12349);
document.body.textContent = groceries(groceryitem1);
document.body.textContent = groceries(groceryitem2);
document.body.textContent = groceries(groceryitem3);
document.body.textContent = groceries(groceryitem4);
document.body.textContent = groceries(groceryitem5);
// Language: typescript  
