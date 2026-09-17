import ProductsService from "../services/productsService.js";

class ProductsController {
  async allProducts(req, res) {
    const result = await ProductsService.getAllProducts();

    if (!result) {
      return res.status(404).json({
        error: "Products not found!",
      });
    }

    return res.status(200).json({
      products: result,
    });
  }

  async productById(req, res) {
    const { id } = req.params;

    const result = await ProductsService.getProductsById(id);

    if (!result) {
      return res.status(404).json({
        error: "Product not found!",
      });
    }

    return res.status(200).json({
      product: result,
    });
  }

  async createProduct(req, res) {
    const {
      product_img,
      product_name,
      product_description,
      product_price,
      product_status,
    } = req.body;

    const result = await ProductsService.createProduct({
      product_img,
      product_name: product_name.trim(),
      product_description: product_description.trim(),
      product_price: product_price,
      product_status: product_status,
    });

    if (!result) {
      return res.status(401).json({
        error: "Product not created!",
      });
    }

    return res.status(201).json({
      success: "Product created successfully!",
    });
  }

  async updateProduct(req, res) {
    const {
      product_img,
      product_name,
      product_description,
      product_price,
      product_status,
    } = req.body;
    const { id } = req.params;

    const result = await ProductsService.updateProduct(id, {
      product_img,
      product_name: product_name.trim(),
      product_description: product_description.trim(),
      product_price: product_price,
      product_status: product_status,
    });

    if (!result) {
      return res.status(401).json({
        error: "Product not updated!",
      });
    }

    return res.status(201).json({
      success: "Product updated successfully!",
    });
  }

  async deleteProduct(req, res) {
    const { id } = req.params;

    const result = ProductsService.deleteProduct(id);

    if (!result) {
      return res.status(401).json({
        error: "Product is not Deleted!",
      });
    }

    return res.status(201).json({
      success: "Product deleted successfully!",
    });
  }
}

export default new ProductsController();
