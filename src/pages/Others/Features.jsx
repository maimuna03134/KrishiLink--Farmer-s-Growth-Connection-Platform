import React from 'react';
import MyContainer from '../../components/myContainer/MyContainer';
import { FaLeaf, FaComments, FaShoppingCart } from "react-icons/fa";

const Features = () => {
    return (
        <MyContainer>
            <section className="p-10 mb-12">
      <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: FaLeaf, title: "Resource Library", desc: "Access free guides, videos & tools" },
          { icon: FaComments, title: "Community Forum", desc: "Ask questions, share experience" },
          { icon: FaShoppingCart, title: "Direct Marketplace", desc: "Sell crops without middlemen" }
        ].map((f, i) => (
          <div key={i} className="text-center bg-linear-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md">
            <f.icon className="text-6xl text-emerald-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-emerald-800 mb-3">{f.title}</h3>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
                </div>
                </section>
        </MyContainer>
    );
};

export default Features;