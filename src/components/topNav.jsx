import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import categories from "../categories.json"; // Importez votre fichier JSON
import "./style/TopNav.css";
import { useNavigate, useLocation } from "react-router-dom";

const TopNav = ({ scrollToFormateur }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const Home=()=>{
    navigate('/')
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Reset sub-category when a new category is hovered
  };

  const handleSubCategoryHover = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleSupportClick = () => {
    navigate('/support');
  };

  const handleFormateurClick = () => {
    if (location.pathname === '/') {
      scrollToFormateur();
    } else {
      navigate('/devenirForm');
    }
  };

  return (
    <div className="navbar">
      <div className="burgerAndLogo">
        <div className="burgerMenu" onClick={toggleMenu}>
          <FiAlignJustify />
        </div>
        <div className="logo" onClick={Home}>
          {"<E-lea"}
          <span className="logo-highlight">rnin</span>
          {"g/>"}
        </div>
      </div>
      <div className="mainContent">
        <div
          className="categorie"
          onMouseEnter={toggleCategories}
          onMouseLeave={toggleCategories}
        >
          Categorie <CiCircleChevDown />
          {categoriesOpen && (
            <div className="categoriesDropdown">
              <div className="categoriesList">
                {Object.keys(categories).map((category, index) => (
                  <div
                    key={index}
                    className="categoryGroup"
                    onMouseEnter={() => handleCategoryHover(category)}
                  >
                    <strong>{category}</strong>
                  </div>
                ))}
              </div>
              {selectedCategory && (
                <div className="subCategoriesList">
                  {Object.keys(categories[selectedCategory]).map(
                    (subCategory, index) => (
                      <div
                        key={index}
                        className="subCategoryGroup"
                        id="sub"
                        onMouseEnter={() => handleSubCategoryHover(subCategory)}
                      >
                        {subCategory}
                      </div>
                    )
                  )}
                </div>
              )}
              {selectedCategory && selectedSubCategory && (
                <div className="coursesList">
                  <ul>
                    {Array.isArray(
                      categories[selectedCategory][selectedSubCategory]
                    ) &&
                      categories[selectedCategory][selectedSubCategory].map(
                        (course, index) => <li key={index}>{course}</li>
                      )}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="searchContainer">
          <FaSearch className="searchIcon" />
          <input type="text" placeholder="Rechercher" className="searchInput" />
        </div>
      </div>
      <div className={`links ${menuOpen ? "open" : ""}`}>
        <div onClick={handleSupportClick}>
          {" "}
          <BiSupport style={{ marginRight: "10px" }} />
          Support
        </div>
        <span onClick={handleFormateurClick} className="link" id="for">
          <GiTeacher style={{ marginRight: "10px" }} />
          Devenir Formateur
        </span>
        <div className="actions">
          <button className="button">Se connecter</button>
          <button className="signupButton">S'inscrire</button>
        </div>
        <div className="language">
          <span role="img" aria-label="globe" className="globeIcon">
            <GrLanguage />
          </span>
        </div>
      </div>
      <div className="searchIconMobile" onClick={toggleSearch}>
        <FaSearch />
      </div>
      {searchOpen && (
        <div className="searchContainerMobile">
          <FaSearch className="searchIconMobileInside" />
          <input
            type="text"
            placeholder="Rechercher"
            className="searchInputMobile"
          />
        </div>
      )}
    </div>
  );
};

export default TopNav;
