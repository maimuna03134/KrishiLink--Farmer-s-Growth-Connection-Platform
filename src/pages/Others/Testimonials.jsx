import React from 'react';
import MyContainer from '../../components/myContainer/MyContainer';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
      {
        text: "KrishiLink helped me sell my harvest 30% higher!",
        author: "Rahim Mia, Paddy Farmer",
      },
      {
        text: "Best platform to learn modern farming for free.",
        author: "Suman Rani, Vegetable Grower",
      },
      {
        text: "Connected with 50+ buyers in just one week!",
        author: "Kamal Hossain, Fruit Seller",
      },
    ];
    return (
      <MyContainer>
        <section className="p-10 rounded-3xl ">
          <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12 dark:bg-gray-800 
            dark:text-gray-100">
            What Farmers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="dark:bg-gray-800 
            dark:text-gray-100  p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <FaQuoteLeft className="text-4xl text-green-600 mb-4 dark:bg-gray-800 
            dark:text-gray-100" />
                <p className="text-lg italic text-gray-800 mb-6 dark:bg-gray-800 
            dark:text-gray-100">"{t.text}"</p>
                <p className="text-right font-bold text-emerald-700 dark:bg-gray-800 
            dark:text-gray-100">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </section>
      </MyContainer>
    );
};

export default Testimonials;