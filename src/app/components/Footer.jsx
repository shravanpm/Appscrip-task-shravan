import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.subscribe}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <div className={styles.currency}>
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745778671/ecom/United_States_of_America_US_qgt5gi.png"
              alt="country"
            />
            <p> USD</p>
          </div>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr className={styles.separator} />

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.footerColumn}>
          <h4>mettā muse</h4>
          <div className={styles.footerColumnList}>
            <span>About Us</span>
            <span>Stories</span>
            <span>Artisans</span>
            <span>Boutiques</span>
            <span>Contact Us</span>
            <span>EU Compliances Docs</span>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>QUICK LINKS</h4>
          <div className={styles.footerColumnList}>
            <span>Orders & Shipping</span>
            <span>Join/Login as a Seller</span>
            <span>Payment & Pricing</span>
            <span>Return & Refunds</span>
            <span>FAQs</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780257/ecom/Insta_u8gh0a.png"
              alt="instagram"
            />
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780256/ecom/mdi_linkedin_kiyao8.png"
              alt="linkedIn"
            />
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780601/ecom/gpay_vfgf20.png"
              alt="google pay"
            />
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780599/ecom/master_card_xkejc5.png"
              alt="visa"
            />
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780599/ecom/paypal_aibm09.png"
              alt="PayPal"
            />
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780598/ecom/amex_yezizz.png"
              alt="American Express"
            />
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780761/ecom/Apple_Pay_logo.svg_bx82sm.png"
              alt="Apple Pay"
              style={{
                backgroundColor: "white",
                padding: "2px",
                borderRadius: "10%",
              }}
            />
            <img
              src="https://res.cloudinary.com/dmpdvpvqt/image/upload/v1745780598/ecom/shopify_pay_krzn0x.png"
              alt="Shopify Pay"
            />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
