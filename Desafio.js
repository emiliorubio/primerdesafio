class ProductManager {
    constructor() {
        this.products = []
        this.idCounter = 1
    }
    
    getProducts = () => {
        return this.products
    }

    getProductById = (id) => {
        const product = this.products.find(elem => elem.id === id)
        if (!product) {
            console.error("Producto no se encuentra en el listado")
            return
        }
        
        return product
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Faltan datos del producto");
            return
        }
        
        if (this.products.find(elem => elem.code === code)) {
            console.error("Codigo de producto ya existe");
            return
        }
        
        const id = this.idCounter
        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
        this.idCounter++
    }
}

const productManager = new ProductManager()
console.log('Metodo getProducts: ',productManager.getProducts())
productManager.addProduct('Pizza', 'Napolitana', 150, 'https://cdn0.recetasgratis.net/es/posts/5/2/6/pizza_napolitana_32625_orig.jpg', '2468', 200)
console.log('Metodo getProducts: ',productManager.getProducts())
productManager.addProduct('Empanada', 'Pino', 400, 'https://images-gmi-pmc.edge-generalmills.com/314901be-3745-46d7-be00-3772e9887a63.jpg', '2468', 300)
console.log('Metodo getProductById: ',productManager.getProductById(1))



