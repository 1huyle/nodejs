const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    // thay đổi sản phẩm
    price_new: {
      type: Number,
      required: true,
    },
    price_old: {
      type: Number,
      required: true,
    },
    star: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
const fashionProducts = [
  {
    product_name: "Áo Thun Nam Basic",
    image: "http://res.cloudinary.com/du0alko2s/image/upload/v1730623463/ouocis8y5by261rdxfyv.jpg",
    price_new: 2000,
    price_old: 3000,
    star: 0,
    description: "Áo thun nam basic, chất liệu cotton mềm mịn, thoáng mát.",
    information: "Màu sắc: Trắng, Size: S/M/L/XL",
    sku: "ATN-BASIC-WHITE",
  },
  {
    product_name: "Đầm Nữ Dự Tiệc Cao Cấp",
    image: "http://res.cloudinary.com/du0alko2s/image/upload/v1730623463/ouocis8y5by261rdxfyv.jpg",
    price_new: 2000,
    star: 0,
    price_old: 3000,
    description: "Đầm nữ dự tiệc sang trọng, chất liệu voan cao cấp.",
    information: "Màu sắc: Đỏ, Size: S/M/L",
    sku: "DNT-VIP-RED",
  },
  {
    product_name: "Đầm Nữ Dự Tiệc Cao Cấp",
    image: "http://res.cloudinary.com/du0alko2s/image/upload/v1730623463/ouocis8y5by261rdxfyv.jpg",
    price_new: 2000,
    price_old: 3000,
    description: "Đầm nữ dự tiệc sang trọng, chất liệu voan cao cấp.",
    information: "Màu sắc: Đỏ, Size: S/M/L",
    sku: "DNT-VIP-RED",
  },
  {
    product_name: "Đầm Nữ Dự Tiệc Cao Cấp",
    image: "http://res.cloudinary.com/du0alko2s/image/upload/v1730623463/ouocis8y5by261rdxfyv.jpg",
    price_new: 2000,
    price_old: 3000,
    description: "Đầm nữ dự tiệc sang trọng, chất liệu voan cao cấp.",
    information: "Màu sắc: Đỏ, Size: S/M/L",
    sku: "DNT-VIP-RED",
  },
  {
    product_name: "Đầm Nữ Dự Tiệc Cao Cấp",
    image: "http://res.cloudinary.com/du0alko2s/image/upload/v1730623463/ouocis8y5by261rdxfyv.jpg",
    price_new: 2000,
    price_old: 3000,
    description: "Đầm nữ dự tiệc sang trọng, chất liệu voan cao cấp.",
    information: "Màu sắc: Đỏ, Size: S/M/L",
    sku: "DNT-VIP-RED",
  },
  {
    product_name: "Đầm Nữ Dự Tiệc Cao Cấp",
    image: "http://res.cloudinary.com/du0alko2s/image/upload/v1730623463/ouocis8y5by261rdxfyv.jpg",
    price_new: 2000,
    price_old: 3000,
    description: "Đầm nữ dự tiệc sang trọng, chất liệu voan cao cấp.",
    information: "Màu sắc: Đỏ, Size: S/M/L",
    sku: "DNT-VIP-RED",
  },
];

const addProducts = async () => {
  try {
    for (const product of fashionProducts) {
      await Product.updateOne(
        { product_name: product.product_name }, // Kiểm tra danh mục theo tên
        { $set: product }, // Cập nhật nếu tồn tại, thêm mới nếu không
        { upsert: true } // Thêm mới nếu không tìm thấy
      );
    }
    console.log("Danh mục Product đã được thêm hoặc cập nhật thành công.");
  } catch (error) {
    console.error("Lỗi khi thêm danh mục:", error);
  }
};

// Gọi hàm thêm danh mục
addProducts();

module.exports = Product;
