"use client";
import styles from "./page.module.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Products } from "./components/Products";

export default function Home() {
  const [showFilter, setShowFilter] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={styles.main}>
      <div className={styles.filterBar}>
        <div className={styles.filterBarLeft}>
          <h4>3425 ITEMS</h4>
          <button onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? "< HIDE FILTER" : "> SHOW FILTER"}
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
