import ProductsModel from "../models/productsModel.js";

class ProductsService {
  async getAllProducts() {
    const getProducts = await ProductsModel.selectProducts();

    if (getProducts.length === 0) {
      return false;
    }

    const products = {
      total: getProducts.length,
      products: getProducts,
    };

    return products;
  }

  async getProductsById(id) {
    const [result] = ProductsModel.selectProductById(id);

    if (!result) {
      return false;
    }

    return result;
  }

  async createProduct(productData) {
    const result = await ProductsModel.insertProduct(productData);

    if (result.affectedRows === 0) {
      return false;
    }

    return true;
  }

  async updateProduct(id, productData) {
    const result = await ProductsModel.updateProduct(id, productData);

    if (result.affectedRows === 0) {
      return false;
    }

    return true;
  }

  async deleteProduct(id) {
    const result = await ProductsModel.deleteProduct(id);

    if (result.affectedRows === 0) {
      return false;
    }

    return true;
  }
}

export default new ProductsService();
