import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarTop}>
        <div className={styles.navbarLogo}>
          <img
            src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745730729/ecom/logo_cz60t2.png"
            alt="logo"
          />
        </div>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.navbarTopRight}>
          <span>
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745808933/ecom/search-normal_mmvwqe.png"
              alt="Search"
            />
          </span>
          <span>
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745808932/ecom/heart_imiqac.png"
              alt="Favorite"
            />
          </span>
          <span>
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745808933/ecom/shopping-bag_pm7ll7.png"
              alt="Cart"
            />
          </span>
          <span>
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745808932/ecom/profile_htl2ct.png"
              alt="Profile"
            />
          </span>
          <span style={{ paddingTop: "2px" }}>
            <p>
              ENG{" "}
              <img
                src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745809187/ecom/arrow-down_u4ejex.png"
                alt="expand"
              />
            </p>
          </span>
        </div>
      </div>
      <div className={styles.navLinkContainer}>
        <nav className={styles.navLinks}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>
      <button className={styles.menuButton}>☰</button>
    </div>
  );
}
