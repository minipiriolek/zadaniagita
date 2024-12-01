const products = [
    { name: "Monitor", price: 3000, category: "Elektronika" },
    { name: "Tablet", price: 1500, category: "Elektronika" },
    { name: "Książka", price: 40, category: "Książki" },
    { name: "Pianino", price: 1200, category: "Muzyka" },
    { name: "Kabel", price: 200, category: "Elektronika" },
    { name: "Bluza", price: 50, category: "Odzież" },
  ];
  function filterProducts(products, category, minPrice, maxPrice) {
    return products
      .filter(
        (product) =>
          (!category || product.category === category) && 
          (!minPrice || product.price >= minPrice) && 
          (!maxPrice || product.price <= maxPrice) 
      );
  }
  function displayProducts(filteredProducts) {
    if (filteredProducts.length === 0) {
      console.log("Nie znaleziono produktów spełniających kryteria.");
      return;
    }
    console.log("Wyniki filtrowania:");
    filteredProducts.forEach(({ name, price, category }) => {
      console.log(`- ${name} (${category}): ${price} PLN`);
    });
  }

  const category = "Elektronika"; 
  const minPrice = 100;
  const maxPrice = 2000;
   
  const filteredProducts = filterProducts(products, category, minPrice, maxPrice);
  displayProducts(filteredProducts);