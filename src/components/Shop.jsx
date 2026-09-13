import { useMemo, useState } from "react";

// ✅ Update these paths/names to match YOUR files
import collarsImg from "../assets/images/collars.jpeg";
import bedImg from "../assets/images/couch.jpeg";
import cuttersImg from "../assets/images/cutter.jpeg";
import foodImg from "../assets/images/food.jpeg";

const PRODUCTS = [
  { id: 1, name: "Pet Collars", price: 499, category: "Pet Accessories", img: collarsImg },
  { id: 2, name: "Pet Bed", price: 1500, category: "Pet Accessories", img: bedImg },
  { id: 3, name: "Cutters", price: 799, category: "Pet Grooming", img: cuttersImg },
  { id: 4, name: "Pet Food", price: 999, category: "Pet Food", img: foodImg },
];

const CATEGORIES = [
  "All Products",
  "Pet Food",
  "Pet Grooming",
  "Pet Accessories",
  "Health and Wellness",
];

const Shop = () => {
  const [activeCat, setActiveCat] = useState("All Products");
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [addedId, setAddedId] = useState(null);

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    // category filter
    if (activeCat !== "All Products") {
      list = list.filter((p) => p.category === activeCat);
    }

    // search filter
    if (query.trim() !== "") {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    return list;
  }, [activeCat, query]);

  const handleAddToCart = (productId) => {
    setCartCount((c) => c + 1);
    setAddedId(productId);

    // remove "Added!" after 1.2s
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="shop" className="py-5 shop-section">
      <div className="container">
        {/* Title */}
        <h2 className="text-center fw-bold mb-2">Our Best Selling Products</h2>

        {/* Cart Count */}
        <p className="text-center text-muted mb-4">
          Cart Items: <strong>{cartCount}</strong>
        </p>

        {/* Search */}
        <div className="d-flex justify-content-center mb-4">
          <input
            className="form-control"
            style={{ maxWidth: "520px", borderRadius: "12px" }}
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCat(cat)}
              className={`shop-tab btn ${
                activeCat === cat ? "shop-tab-active" : "shop-tab-inactive"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="row g-4 justify-content-center">
          {filteredProducts.map((p) => (
            <div key={p.id} className="col-12 col-sm-6 col-md-3">
              <div className="shop-card text-center h-100">
                <div className="shop-img-wrap mx-auto">
                  <img src={p.img} alt={p.name} className="img-fluid" />
                </div>

                <h5 className="mt-3 mb-1 fw-semibold">{p.name}</h5>
                <div className="text-muted">Rs.{p.price}</div>

                <button
                  className="btn btn-sm mt-3 px-4"
                  style={{ background: "#8b5e5e", color: "#fff" }}
                  onClick={() => handleAddToCart(p.id)}
                >
                  {addedId === p.id ? "Added!" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-center text-muted">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
