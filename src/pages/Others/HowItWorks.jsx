import React from 'react';
import MyContainer from '../../components/myContainer/MyContainer';
import { FaArrowRight, FaHandshake, FaUserPlus, FaUsers } from 'react-icons/fa';

const HowItWorks = () => {
    return (
      <MyContainer>
        <section className="bg-emerald-50 p-10 rounded-3xl shadow-xl mb-12">
          <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center lg:w-11/12 gap-8">
            {[
              {
                icon: FaUserPlus,
                title: "Sign Up",
                desc: "Create your farmer profile in minutes",
              },
              {
                icon: FaUsers,
                title: "Connect",
                desc: "Network with farmers, experts & buyers",
              },
              {
                icon: FaHandshake,
                title: "Grow & Trade",
                desc: "Share knowledge & sell directly",
              },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="bg-linear-to-br from-green-100 to-emerald-50 p-8 rounded-2xl text-center w-80 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                  <step.icon className="text-5xl text-emerald-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
                {i < 2 && (
                  <FaArrowRight className="text-4xl text-green-600 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      </MyContainer>
    );
};

export default HowItWorks;