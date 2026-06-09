class HomePage {
    constructor(page){
        this.page = page
        this.productCards = page.locator('.card-title a') //localizador de los productos    
    }

    // Abre la pagina principal
    async open(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    // Selecciona una de las categorias
    async selectCategory(categoryName){
        await this.page.getByRole('link', { name : categoryName }).click();
    }

    //Selecciona uno de los productos
    async selectProduct(productName){
        await this.page.getByRole('link', { name: productName}).click();
    }

    // Valida si un producto aparece en pantalla. Devuelve True or False
    async isProductVisible(productName){
        return await this.page.getByRole('link', { name: productName}).isVisible();
    }
}

// Permite usar HomePage desde otros archivos
module.exports = {HomePage};