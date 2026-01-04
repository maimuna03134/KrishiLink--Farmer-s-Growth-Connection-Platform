import React from 'react'
import MyContainer from '../../components/myContainer/MyContainer'
import { Link } from 'react-router'
import { BsArrowRight } from 'react-icons/bs'

export default function CTApage() {
  return (
      <div>
          <section className="py-20 mb-20 bg-linear-to-r from-green-700 via-green-500 to-emerald-400">
              <MyContainer className={"px-4 sm:px-6 lg:px-8 text-center"}>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Ready to Grow Your Farm <br />
                      <span className="text-green-200">with Krisilink?</span>
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                      Join our platform today and connect with experts, resources, and fellow farmers to boost your yield and thrive sustainably.
                  </p>
                  <Link
                        to="/all-crops"
                      className="px-10 py-5 bg-white text-green-800 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  >
                      Get Started Now
                      <BsArrowRight className="w-5 h-5" />
                  </Link>
              </MyContainer>
          </section>
      </div>

  )
}
