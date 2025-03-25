import axios from 'axios';

// Exemple de fonction pour récupérer les produits
export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/odoo/products/');
        console.log(response.data);  // Affiche les produits dans la console
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        return [];
    }
};


