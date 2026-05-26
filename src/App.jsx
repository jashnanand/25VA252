function App() {
  const products = [
    {
      name: "Laptop",
      price: "₹55,000",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      name: "Headphones",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      name: "Smartphone",
      price: "₹25,000",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      name: "Watch",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];

  return (
    <div>
      <nav style={styles.navbar}>
        <h2>Amazon Clone</h2>

        <input
          type="text"
          placeholder="Search products"
          style={styles.search}
        />

        <button style={styles.cart}>Cart</button>
      </nav>

      <div style={styles.banner}>
        <h1>Welcome to Amazon</h1>
        <p>Best Deals Everyday</p>
      </div>

      <div style={styles.products}>
        {products.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt="" style={styles.image} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>

      <footer style={styles.footer}>
        <p>© 2026 Amazon Clone Project</p>
      </footer>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#131921",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  search: {
    width: "40%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
  },

  cart: {
    padding: "10px 15px",
    backgroundColor: "#febd69",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  banner: {
    backgroundColor: "#232f3e",
    color: "white",
    textAlign: "center",
    padding: "50px",
  },

  products: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "30px",
  },

  card: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  button: {
    backgroundColor: "#ffd814",
    border: "none",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  footer: {
    backgroundColor: "#131921",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px",
  },
};

export default App;