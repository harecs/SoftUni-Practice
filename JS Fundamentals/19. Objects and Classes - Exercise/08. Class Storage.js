class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;

        this.addProduct = function(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += Number(product.quantity) * Number(product.price);
        }

        this.getProducts = function() {
            let productsInJSON = [];

            for (const product of this.storage) {
                productsInJSON.push(JSON.stringify(product));
            }

            return productsInJSON.join('\n');
        }
    }
}