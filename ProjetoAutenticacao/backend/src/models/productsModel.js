import conn from "../config/database.js";

class ProductsModel {
  async selectProducts() {
    const query = "SELECT * FROM products;";
    const result = await conn.execute(query);

    return result;
  }

  async selectProductById(id) {
    const query = `
    SELECT * FROM products 
    WHERE product_id = ?;`;
    const result = conn.execute(query, [id]);

    return result;
  }

  async insertProduct(productData) {
    const {
      product_img,
      product_name,
      product_description,
      product_price,
      product_status,
    } = productData;
    const query = `
      INSERT INTO products (
        product_img, product_name,
        product_description,
        product_price, product_status
      ) VALUES (
       ?, ?, ?, ?, ? 
      );
    `;

    const result = await conn.execute(query, [
      product_img,
      product_name,
      product_description,
      product_price,
      product_status,
    ]);

    return result;
  }

  async updateProduct(id, productData) {
    const {
      product_img,
      product_name,
      product_description,
      product_price,
      product_status,
    } = productData;

    const query = `
      UPDATE products SET 
        product_img = ?, product_name = ?,
        product_description = ?,
        product_price = ?, product_status = ?
      WHERE product_id = ?;
    `;

    const result = await conn.execute(query, [
      product_img,
      product_name,
      product_description,
      product_price,
      product_status,
      id,
    ]);

    return result;
  }
}
