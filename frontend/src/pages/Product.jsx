import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={`${item}-${index}`}
                className="w-[80px] h-[100px] sm:w-[120px] sm:h-[140px] object-cover mb-2 sm:mb-3 flex-shrink-0 cursor-pointer rounded hover:opacity-80 transition"
              />
            ))}
          </div>
          <div className="w-full sm:w-[90%] lg:w-full h-[600px]">
            <img
              className="w-full h-full object-cover rounded"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 mb-3">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-4 h-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item) => (
                <button
                  key={item}
                  className={`border py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded transition ${
                    size === item ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        {/* Tabs */}
        <div className="flex border-b">
          <button className="px-5 py-3 text-sm font-semibold border-b-2 border-black text-black">
            Description
          </button>
          <button className="px-5 py-3 text-sm text-gray-600 hover:text-black transition">
            Reviews (122)
          </button>
        </div>

        {/* Nội dung mô tả sản phẩm */}
        <div className="flex flex-col gap-4 border border-t-0 px-6 py-6 text-sm text-gray-600 leading-relaxed">
          <p>
            Introducing our Men Round Neck Pure Cotton T-shirt – your perfect
            blend of comfort, quality, and minimalist design. Crafted from 100%
            premium-grade cotton, this shirt offers breathability and a soft
            texture that feels gentle on the skin.
          </p>
          <p>
            Designed for everyday wear, the T-shirt features a classic round
            neckline and relaxed fit, making it suitable for both casual outings
            and layering beneath jackets or hoodies. The fabric is pre-shrunk
            and colorfast, ensuring long-lasting wear and minimal shrinkage even
            after multiple washes.
          </p>
          <p>
            Whether you're heading out for a casual meet-up or just lounging at
            home, this T-shirt delivers versatility and style in every stitch.
            Available in multiple sizes to fit every body type comfortably.
          </p>
          <p>
            <span className="font-medium text-gray-700">
              Care Instructions:
            </span>{" "}
            Machine wash cold with like colors. Do not bleach. Tumble dry low or
            lay flat to dry. Iron on low if needed.
          </p>
          <p>
            <span className="font-medium text-gray-700">
              Material Composition:
            </span>{" "}
            100% Organic Cotton, sustainably sourced.
          </p>
          <p>
            Invest in wardrobe essentials that never go out of style – order
            yours today and experience the difference in quality.
          </p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Loading product...</div>
  );
};

export default Product;
