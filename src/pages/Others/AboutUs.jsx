
import React from "react";

const AboutUs = () => {
  const aboutImages = [
    "https://images.unsplash.com/photo-1524594157364-0f9e0a2b7f7f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  ];

  const projectImages = [
    {
      img: "https://images.unsplash.com/photo-1600180758895-7d9ef65f28b3?auto=format&fit=crop&w=800&q=80",
      title: "Organic Vegetable Farm Expansion",
      investment: "$15,000 - $25,000",
    },
    {
      img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
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
          <p className="text-green-900 font-semibold mt-2">Home / About Us</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eget lorem sit amet justo tempor dignissim. Curabitur eget sapien
              vel risus feugiat pretium. Suspendisse potenti.
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
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
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
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <h2 className="text-3xl font-bold">
          Let's Cultivate <span className="text-yellow-400">Success Together</span>
        </h2>
        <p className="mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="space-x-4">
          <button className="bg-green-700 px-6 py-2 rounded hover:bg-green-800 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-green-900 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

