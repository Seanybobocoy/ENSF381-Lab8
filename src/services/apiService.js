import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

// Fetches a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fetches details for a single product by its ID
export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Searches for products by a query string
export const searchProducts = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search?q=${query}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Deletes a product by its ID
export const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Adds a new product to the database
export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${BASE_URL}/add`, product);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Edits an existing product by ID
export const editProduct = async (id, product) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        throw error;
    }
};