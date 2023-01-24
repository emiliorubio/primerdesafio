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
productManager.addProduct('Shakira', 'Concierto del pespecho', 150, 'http://www.coderimages.com/shakira.jpg', '2468', 100)
console.log('Metodo getProducts: ',productManager.getProducts())
productManager.addProduct('Bad Bunny', 'Concierto poético', 400, 'http://www.coderimages.com/badbunny.jpg', '2468', 300)
console.log('Metodo getProductById: ',productManager.getProductById(1))



