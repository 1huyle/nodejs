document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  const urlParams = new URLSearchParams(window.location.search);
  // Lấy giá trị của tham số 'token'
  const token = urlParams.get('token');

  // Kiểm tra xem token có tồn tại hay không
  if (token) {
      // Lưu token vào localStorage
      localStorage.setItem('token', token);
      console.log('Token saved to localStorage:', token);
  } else {
      console.log('No token found in URL');
  }
});

async function loadProducts() {
  try {
    const response = await fetch("http://localhost:8080/hproducts");
    const data = await response.json();

    const productContainer = document.getElementById("product-container");
    if (data.products && data.products.length > 0) {
      data.products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("col-md-6", "col-lg-3", "my-4");
        productElement.innerHTML = `
          <div class="product-item">
            <div class="image-holder" style="width: 100%; height: 100%;">
              <img src="images/item1.jpg" alt="${product.product_name}" class="product-image img-fluid">
            </div>
            <div class="cart-concern">
              <div class="cart-button d-flex justify-content-between align-items-center">
                <a href="#" class="btn-wrap cart-link d-flex align-items-center text-capitalize fs-6 ">add to cart <i class="icon icon-arrow-io pe-1"></i></a>
                <a href="single-product.html?id=${product._id}" class="view-btn"><i class="icon icon-screen-full"></i></a>
                <a href="#" class="wishlist-btn"><i class="icon icon-heart"></i></a>
              </div>
            </div>
            <div class="product-detail d-flex justify-content-between align-items-center mt-4">
              <h4 class="product-title mb-0"><a href="single-product.html">${product.product_name}</a></h4>
              <p class="m-0 fs-5 fw-normal">$${product.price_new}</p>
            </div>
          </div>
        `;
        productContainer.appendChild(productElement);
      });
    } else {
      console.log("No products found");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
