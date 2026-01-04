
import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  const aboutImages = [
    "https://plus.unsplash.com/premium_photo-1764687628498-34809d9a8db8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9tYXRvJTIwZmVpbGR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1690291176872-f2f898ee8f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RyYXdiZXJ5fGVufDB8fDB8fHww",
  ];

  const projectImages = [
    {
      img: "https://media.istockphoto.com/id/641940492/photo/rural-women-cutting-silage-for-domestic-cattle.webp?a=1&b=1&s=612x612&w=0&k=20&c=1-tgxvJwpYSuRlITlmv-6jLPb4Jiax9t0dNgd8Nqw8c=",
      title: "Organic Vegetable Farm Expansion",
      investment: "$15,000 - $25,000",
    },
    {
      img: "https://images.unsplash.com/photo-1498408040764-ab6eb772a145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpZWxkfGVufDB8fDB8fHww",
      title: "Organic Fertilizer Manufacturing",
      investment: "$10,000 - $20,000",
    },
  ];

  const faq = [
    "What makes your products organic?",
    "Do you use any genetically modified seeds?",
    "How do you maintain soil fertility naturally?",
    "Can small farmers join your network?",
    "Where are your farms located?",
    "Do you deliver to local markets or export internationally?",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="bg-gray-200 p-2 text-green-900 font-semibold mt-2"><Link to='/'><span>Home</span></Link> / About Us</p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-green-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-yellow-400 uppercase text-sm mb-2">About Us</h2>
            <h1 className="text-3xl font-bold mb-4">
              Growing with <span className="text-yellow-400">Heart and Earth</span>
            </h1>
            <p className="mb-6">
              Krisilink empowers farmers by connecting them with the tools, insights, and community they need to increase productivity, share knowledge, and achieve sustainable growth.
            </p>
            <button className="bg-yellow-400 text-green-900 px-6 py-2 rounded-md hover:bg-yellow-500 transition">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {aboutImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="About"
                className="rounded-lg object-cover w-full h-48"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-amber-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-green-900 uppercase text-sm mb-2">Our Projects</h2>
          <h1 className="text-3xl font-bold mb-8">
            Growing a Greener <span className="text-green-700">Future Together</span>
          </h1>

          <div className="space-y-6">
            {projectImages.map((project, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-transparent backdrop-blur-sm bg-opacity-50 text-white p-2 w-full">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm">Investment: {project.investment}</p>
                  <button className="mt-2 bg-green-700 px-4 py-1 rounded hover:bg-green-800 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-amber-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-green-900 uppercase text-sm mb-2">FAQ</h2>
          <h1 className="text-3xl font-bold mb-8">
            Your Farming <span className="text-green-700">Questions, Answered</span>
          </h1>

          <div className="space-y-4">
            {faq.map((q, index) => (
              <div
                key={index}
                className="border border-green-200 rounded p-4 cursor-pointer hover:bg-green-50 transition"
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section
        className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1824598485/photo/punjabi-sikh-farmer-in-the-mustard-farm-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=xSzgEF4X0poMtm7AH1Kh2ey2H0cnS_W1wAzKrsZRods=')",
        }}
      >
        <div>
          <h2 className="text-3xl font-bold text-white">
            Let's Cultivate <span className="text-green-400">Success Together</span>
          </h2>
          <p className="mt-2 mb-4">
            Krisilink connects farmers with the resources, knowledge, and community they need to grow sustainably and thrive together.
          </p>
          <div className="space-x-4">
            <Link to={'/all-crops'} className="bg-green-700 px-6 py-2 rounded hover:bg-green-800 transition">
              Get Started
            </Link>
            <Link to={'/contact'} className="border border-white px-6 py-2 rounded hover:bg-white hover:text-green-900 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

