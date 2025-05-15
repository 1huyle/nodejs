const mongoose = require("mongoose");

const productDetailSchema = new mongoose.Schema(
  {
    ID_product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    ID_tag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ], // Chấp nhận mảng ObjectId
    ID_category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ], // Chấp nhận mảng ObjectId
    ID_color: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Color",
      },
    ], // Chấp nhận mảng ObjectId
    ID_size: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Size",
      },
    ], // Chấp nhận mảng ObjectId
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);
const arrayUnique = (value) => Array.isArray(value) && new Set(value).size === value.length;

productDetailSchema.path("ID_tag").validate(arrayUnique, "ID_tag contains duplicates");
productDetailSchema.path("ID_category").validate(arrayUnique, "ID_category contains duplicates");
productDetailSchema.path("ID_color").validate(arrayUnique, "ID_color contains duplicates");
productDetailSchema.path("ID_size").validate(arrayUnique, "ID_size contains duplicates");
module.exports = mongoose.model("ProductDetail", productDetailSchema);
