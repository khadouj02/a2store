import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaHeadphones,
  FaTv,
  FaPrint,
  FaNetworkWired,
  FaGamepad
} from "react-icons/fa";

import "./CategoryMenu.css";

const iconMap = {
  "Téléphones": <FaMobileAlt size={30} />,
  "Ordinateur portable": <FaLaptop size={30} />,
  "Appareils photo": <FaCamera size={30} />,
  "Casques audio": <FaHeadphones size={30} />,
  "Téléviseurs": <FaTv size={30} />,
  "Imprimantes": <FaPrint size={30} />,
  "Réseaux": <FaNetworkWired size={30} />,
  "Gaming": <FaGamepad size={30} />,
};

const CategoryMenu = ({ selectedCategory, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/odoo/products/");
        const products = response.data;

        const categorySet = new Set();
        products.forEach((p) => {
          if (p.categ_id) categorySet.add(p.categ_id);
        });

        setCategories(Array.from(categorySet));
      } catch (error) {
        console.error("Erreur chargement catégories :", error);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="category-container">
      <h2 className="category-title">Parcourir par catégorie</h2>
      <div className="category-wrapper">
        <button className="category-arrow left" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <div className="category-menu" ref={scrollRef}>
          {categories.map((category) => (
            <div
              key={category}
              className={`category-box ${selectedCategory === category ? "active" : ""}`}
              onClick={() => onSelectCategory && onSelectCategory(category)}
            >
              {/* <div className="icon">{iconMap[category] || <FaTv size={30} />}</div> */}
              <div className="label">{category}</div>
            </div>
          ))}
        </div>
        <button className="category-arrow right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
