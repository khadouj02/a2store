import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import CategoryMenu from "../Category/CategoryMenu";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Erreur lors de la récupération des produits");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  const categories = ["Tous", ...new Set(products.map((p) => p.categ_id))];
  const filteredProducts =
    selectedCategory === "Tous"
      ? products
      : products.filter((p) => p.categ_id === selectedCategory);

  return (
    <div className="product-container">
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ul className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              <div className="product-top-icons">
                <FaHeart className="icon heart" />
                <FaShoppingCart className="icon cart" />
              </div>
              {product.image_1920 && (
                <img
                  src={`data:image/png;base64,${product.image_1920}`}
                  alt={product.name}
                />
              )}
              <h3>{product.name}</h3>
              <p className="price">{product.list_price} MRU</p>
              <button>Acheter</button>
            </li>
          ))
        ) : (
          <p>Aucun produit disponible.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
