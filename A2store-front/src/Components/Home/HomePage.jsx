import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const prods = await fetchProducts();
        setProducts(prods);
        setVisibleProducts(prods.slice(0, 3));
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const goToNext = () => {
    const nextIndex = (currentIndex + 3) % products.length;
    setCurrentIndex(nextIndex);
    setVisibleProducts(products.slice(nextIndex, nextIndex + 3));
  };

  const goToPrev = () => {
    const prevIndex =
      (currentIndex - 3 + products.length) % products.length;
    setCurrentIndex(prevIndex);
    setVisibleProducts(products.slice(prevIndex, prevIndex + 3));
  };

  if (loading) return <div className="loading">Chargement...</div>;

  return (
    <div className="homepage">
      <div className="overlay">
        <h1 className="home-title">
          Découvrez nos derniers produits et offres exclusives  
          Faites votre shopping dès maintenant !
        </h1>

        <div className="carousel-container">
          <button className="arrow left" onClick={goToPrev}>
            &#8249;
          </button>
          <div className="product-carousel">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={`data:image/png;base64,${product.image_1920}`}
                  alt={product.name}
                />
                <p className="price">{product.list_price} MRU</p>
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={goToNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
