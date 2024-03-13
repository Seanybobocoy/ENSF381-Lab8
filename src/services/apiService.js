import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

// Fetches a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Rethrow to allow caller to handle
    }
};

// Fetches details for a single product by its ID
export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product details for ID ${id}:`, error);
        throw error; // Rethrow to allow caller to handle
    }
};

// Deletes a product by its ID
export const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product with ID ${id}:`, error);
        throw error; // Rethrow to allow caller to handle
    }
};

// Adds a new product to the database
export const addProduct = async (product) => {
    try {
        const response = await axios.post(`${BASE_URL}/add`, product, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding a new product:", error);
        throw error; // Rethrow to allow caller to handle
    }
};

// Edits an existing product by ID
export const editProduct = async (id, product) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, product, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error editing product with ID ${id}:`, error);
        throw error; // Rethrow to allow caller to handle
    }
};
