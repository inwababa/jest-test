const Product = require("../models/product.model");

/**
 * It's an asynchronous function that uses the await keyword to wait for the result of the find()
 * method on the Product model.
 */
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It's an asynchronous function that uses the Product model to find a product by its id, and then
 * sends a response with the product's data.
 */
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It creates a new product using the data from the request body and returns the created product in the
 * response.
 */
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It takes the id of the product to be updated from the request params, and the updated product data
 * from the request body, and then updates the product in the database with the new data, and returns
 * the updated product to the client.
 */
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};


const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};