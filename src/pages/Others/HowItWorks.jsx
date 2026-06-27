import React from 'react';
import MyContainer from '../../components/myContainer/MyContainer';
import { FaArrowRight, FaHandshake, FaUserPlus, FaUsers } from 'react-icons/fa';

const HowItWorks = () => {
    return (
      <MyContainer>
        <section className=" p-10 rounded-3xl mb-12 dark:bg-gray-800 
            dark:text-gray-100">
          <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12 dark:bg-gray-800 
            dark:text-gray-100">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center lg:w-11/12 gap-8 dark:bg-gray-800 
            dark:text-gray-100">
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
                <div className="dark:bg-gray-800 
            dark:text-gray-100 p-8 rounded-2xl text-center w-80 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                  <step.icon className="text-5xl text-emerald-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2 dark:bg-gray-800 
            dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:bg-gray-800 
            dark:text-gray-100">{step.desc}</p>
                </div>
                {i < 2 && (
                  <FaArrowRight className="text-4xl text-green-600 hidden md:block dark:bg-gray-800 
            dark:text-gray-100" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      </MyContainer>
    );
};

export default HowItWorks;