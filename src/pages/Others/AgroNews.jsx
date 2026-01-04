import React from 'react';
import MyContainer from '../../components/myContainer/MyContainer';
import { FaCalendarAlt, FaNewspaper } from 'react-icons/fa';

const AgroNews = () => {
    const news = [
      {
        title: "New Organic Farming Policy 2025",
        excerpt: "Government launches subsidy for organic farmers.",
        date: "Nov 13, 2025",
      },
      {
        title: "Monsoon Forecast & Crop Planning",
        excerpt: "Expert tips to maximize yield this season.",
        date: "Nov 12, 2025",
      },
      {
        title: "Smart Irrigation Techniques",
        excerpt: "Save 40% water with drip & sensor tech.",
        date: "Nov 11, 2025",
      },
    ];
    return (
      <MyContainer>
        <section className=" p-10  mb-12">
          <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12 flex items-center justify-center gap-3">
            <FaNewspaper className="text-5xl" /> Agro News & Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-lime-50 to-green-50 p-6 rounded-2xl border-l-4 border-green-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-green-700 text-sm mb-3">
                  <FaCalendarAlt /> {item.date}
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <a
                  href="#"
                  className="text-green-700 font-bold hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>
      </MyContainer>
    );
};

export default AgroNews;