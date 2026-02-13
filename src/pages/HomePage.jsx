import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PRODUCT_DATA from "../data/products";
import { countProducts } from "../utils/helpers";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

/* ===== HERO IMAGES ===== */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1400",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=1400",
  "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=1400",
];

/* ===== BRAND LOGOS ===== */
const BRAND_IMAGES = [
  "https://i.postimg.cc/hGCYVPdy/Go-cheese-Photoroom.png",
  "https://i.postimg.cc/QNKzWDxJ/amul-Photoroom.png",
  "https://i.postimg.cc/4NzFB1cc/mccain-Photoroom.png",
  "https://i.postimg.cc/Cx7rVLmz/dlecta-Photoroom.png",
  "https://i.postimg.cc/hvJVt7nz/41ZCPi_Zt_Zl_L_AC_UF350_350_QL80_removebg_preview.png",
 "https://i.postimg.cc/j2WySJTW/61QDW_u7L7L_AC_UF350_350_QL80_removebg_preview.png",
 "https://i.postimg.cc/T1yn3WxW/Asset_3_4x_1.png",
 "https://i.postimg.cc/6q7CpGK8/image_1931_2.avif",
 "https://i.postimg.cc/nrsqhQxB/images_removebg_preview.png",
 "https://i.postimg.cc/J09ZD47n/LKKLogo_square.png",
 "https://i.postimg.cc/QCR19xNC/logo_90x90.webp",
 "https://i.postimg.cc/XqTdG7Np/veeba_logo_main.webp",
 "https://i.postimg.cc/gjf8Xkcr/Venkys.gif",
  "https://i.postimg.cc/hGCYVPdy/Go-cheese-Photoroom.png",
  "https://i.postimg.cc/QNKzWDxJ/amul-Photoroom.png",
  "https://i.postimg.cc/4NzFB1cc/mccain-Photoroom.png",
  "https://i.postimg.cc/Cx7rVLmz/dlecta-Photoroom.png",
  "https://i.postimg.cc/hvJVt7nz/41ZCPi_Zt_Zl_L_AC_UF350_350_QL80_removebg_preview.png",
 "https://i.postimg.cc/j2WySJTW/61QDW_u7L7L_AC_UF350_350_QL80_removebg_preview.png",
 "https://i.postimg.cc/T1yn3WxW/Asset_3_4x_1.png",
 "https://i.postimg.cc/6q7CpGK8/image_1931_2.avif",
 "https://i.postimg.cc/nrsqhQxB/images_removebg_preview.png",
 "https://i.postimg.cc/J09ZD47n/LKKLogo_square.png",
 "https://i.postimg.cc/QCR19xNC/logo_90x90.webp",
 "https://i.postimg.cc/XqTdG7Np/veeba_logo_main.webp",
 "https://i.postimg.cc/gjf8Xkcr/Venkys.gif",

];

const FEATURED = [
  {
    name: "Rich Hot Kitchen",
    brand: "Rich",
    size: "1kg",
    img: "https://i.postimg.cc/Kvpv5snF/RCRHK-Front.webp",
  },
  {
    name: "Processed Cheese",
    brand: "Amul",
    size: "1kg",
    img: "https://i.postimg.cc/WzWjXhq1/Processed-Cheese-1.png",
  },
  {
    name: "Mascarprone Cheese",
    brand: "D'lecta",
    size: "500g",
    img: "https://i.postimg.cc/dtfwCZYL/Front.jpg",
  },
  {
    name: "Favorita 6mm French Fries",
    brand: "M'ccain",
    size: "2kg",
    img: "https://i.postimg.cc/cCbyf2PR/shopping.webp",
  },
];

export default function HomePage() {

  const categories = Object.entries(PRODUCT_DATA);

  const totalProducts = categories.reduce(
    (acc, [, data]) => acc + countProducts(data.subcategories),
    0
  );

  /* HERO SLIDE */
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      {/* ================= HERO ================= */}

      <div className="hero">
        <div className="hero-main hero-with-slider">

          {/* IMAGE SLIDER */}
          <div className="hero-slider">
            <div
              className="hero-slider-track"
              style={{ transform: `translateX(-${heroIndex * 100}%)` }}
            >
              {HERO_IMAGES.map((img, i) => (
                <img key={i} src={img} alt="" />
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="hero-content">

            <div className="hero-tag">🏷️ Wholesale Distributor</div>

            <h1 className="hero-title">
              Quality Products,
              <br />
              <span>Reliable Supply</span>
            </h1>

            <p className="hero-desc">
              Your one-stop wholesale partner for cheese, dairy, frozen foods,
              sauces, beverages and more.
            </p>

            <div className="hero-actions">

              <a
                className="hero-cta"
                href="https://wa.me/8235379736"
                target="_blank"
                rel="noreferrer"
              >
                Order On Whatsapp
              </a>

              <Link to="/about" className="hero-about-btn">
                About Us
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* ================= BRAND TICKER ================= */}

      <div className="brand-ticker">
        <div className="brand-track">
          {[...BRAND_IMAGES, ...BRAND_IMAGES].map((img, i) => (
            <div className="brand-item" key={i}>
              <img src={img} alt="brand" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Browse Categories</h2>
          <span className="section-count">{totalProducts} products</span>
        </div>

        <div className="categories-grid">
          {categories.map(([name, data], i) => (
            <CategoryCard key={name} name={name} data={data} index={i} />
          ))}
        </div>
      </section>

      {/* ================= FEATURED ================= */}

      <section className="section">
        <h2 className="section-title">Featured Products</h2>

        <div className="products-grid">
          {FEATURED.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </section>

    </>
  );
}
