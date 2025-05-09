"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState({});

  const toggleSection = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      title: "IDEAL FOR",
      filters: ["Men", "Women", "Baby & Kids"],
    },
    { title: "OCCASION" },
    { title: "WORK" },
    { title: "FABRIC" },
    { title: "SEGMENT" },
    { title: "SUITABLE FOR" },
    { title: "RAW MATERIALS" },
    { title: "PATTERN" },
  ];

  return (
    <div
      className={styles.sidebar}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <div className={styles.filterItem}>
        <label>
          {" "}
          <input type="checkbox" /> Customizable
        </label>
      </div>

      <hr className={styles.separator} />
      <div>
        {sections.map((section, index) => (
          <div key={index} className={styles.filterSection}>
            <div
              className={styles.sectionHeader}
              onClick={() => toggleSection(section.title)}
            >
              <span>{section.title}</span>
              <span>{expanded[section.title] ? "▲" : "▼"}</span>
            </div>

            {/* Expanded Filters */}
            {expanded[section.title] && section.filters && (
              <div className={styles.sectionContent}>
                <p className={styles.selectAll}>Unselect all</p>
                {section.filters.map((filter, i) => (
                  <label key={i} className={styles.checkboxLabel}>
                    <input type="checkbox" />
                    {filter}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
