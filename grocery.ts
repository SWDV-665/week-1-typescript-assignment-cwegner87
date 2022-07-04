class Grocery {
    item: string;
    constructor(
      public name: string,
      public quanity: Number,
      public department: string,
      public price: Number,
      public sku: Number )
       {
      this.item = name + " " + quanity + " " + department + " " + price + " " + sku;
    }
  }

  interface Goods {
    name: string;
    quanity: Number;
    department: string;
    price: Number;
    sku: Number;
  }

  function groceries(goods: Goods) {
    return goods.name + " " + goods.quanity + " " + goods.department + " " + goods.price + " " + goods.sku;

    }
      
    let groceryitem1 = new Grocery("Milk", 1, "Dairy", 2.99, 12345,);
    let groceryitem2 = new Grocery("Bread", 2, "Groceries", 1.99, 12346,);
    let groceryitem3 = new Grocery("Eggs", 3, "Dairy", 3.99, 12347,);
    let groceryitem4 = new Grocery("Coffee", 4, "Beverages", 4.99, 12348,);
    let groceryitem5 = new Grocery("Apples", 5, "Fruits", 5.99, 12349,);

    


    document.body.textContent = groceries(groceryitem1);
    document.body.textContent = groceries(groceryitem2);
    document.body.textContent = groceries(groceryitem3);
    document.body.textContent = groceries(groceryitem4);
    document.body.textContent = groceries(groceryitem5);
    
    
        // Language: typescript  