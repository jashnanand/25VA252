export default function App() {
  const foodItems = [
    {
      id: 1,
      name: "Burger",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Pasta",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Sandwich",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const [cart, setCart] = React.useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-red-500 text-white p-4 shadow-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold">FoodExpress</h1>
        <div className="text-lg font-semibold">
          Cart Items: {cart.length}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-red-400 text-white text-center py-10">
        <h2 className="text-4xl font-bold mb-2">Order Delicious Food</h2>
        <p className="text-lg">Fast Delivery at Your Doorstep</p>
      </div>

      {/* Food Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-lg text-gray-600 mb-4">₹{item.price}</p>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Cart is Empty
          </p>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h3>

              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg">
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
