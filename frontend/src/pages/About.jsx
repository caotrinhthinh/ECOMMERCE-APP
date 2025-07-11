import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are an online store committed to offering high-quality fashion
            products that combine style, comfort, and durability. Our platform
            is designed for a smooth shopping experience, backed by dedicated
            customer support.
          </p>
          <p>
            We believe that shopping should be an enjoyable, seamless
            experience. That's why our website is designed to be easy to
            navigate, fast, and mobile-friendly, allowing you to shop anywhere,
            anytime. Our team is constantly working behind the scenes to update
            our collections, introduce new styles, and make sure that our
            products reflect the needs and preferences of our diverse community.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to ensure complete customer satisfaction through both
            our products and services. We continuously improve, follow the
            latest trends, and maintain a professional and friendly approach.
            Thank you for choosing us!
          </p>
        </div>
      </div>

      <div className="text-4xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-6000">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-6000">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-6000">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
