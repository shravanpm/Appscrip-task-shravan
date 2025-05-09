"use client";
import styles from "./page.module.css";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { Products } from "./components/Products";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setShowFilter(false);
    }
  }, [screenWidth]);

  return (
    <div className={styles.main}>
      <div className={styles.filterBar}>
        <div className={styles.filterBarLeft}>
          {screenWidth > 800 && <h4>3425 ITEMS</h4>}
          <button
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            {screenWidth < 800
              ? "FILTER"
              : showFilter
              ? "< HIDE FILTER"
              : "> SHOW FILTER"}
          </button>
        </div>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown}>RECOMMENDED ▼</button>

          {isDropdownOpen && (
            <div className={styles.dropdownContent}>
              <p>NEWEST FIRST</p>
              <p>POPULAR</p>
              <p>PRICE HIGH TO LOW</p>
              <p>PRICE LOW TO HIGH</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.container}>
        {showFilter && <Sidebar />}
        <Products />
      </div>
    </div>
  );
}
