import React from "react";
import { Link } from "react-router";

const faqs = [
    {
        question: "What makes your products organic?",
        answer:
            "All our products are grown without synthetic chemicals or pesticides. We follow organic farming standards and focus on natural soil enrichment."
    },
    {
        question: "Do you use any genetically modified seeds?",
        answer:
            "No, we only use natural, non-GMO seeds to ensure the authenticity and health of our crops."
    },
    {
        question: "How do you maintain soil fertility naturally?",
        answer:
            "We rotate crops, use compost, and apply organic fertilizers to maintain healthy, nutrient-rich soil."
    },
    {
        question: "Can small farmers join your network?",
        answer:
            "Absolutely! Krisilink is designed to support farmers of all scales. Small farmers can benefit from resources, training, and market access."
    },
    {
        question: "Where are your farms located?",
        answer:
            "Our farms are spread across multiple regions, focusing on areas with fertile soil and sustainable agricultural practices."
    },
    {
        question: "Do you deliver to local markets or export internationally?",
        answer:
            "We cater to both local and international markets, ensuring fresh, high-quality produce reaches every customer."
    },
];

// Single FAQ Item Component
function FAQItem({ question, answer }) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="border-b border-gray-300 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left text-gray-800 font-medium"
            >
                {question}
                <span className="text-xl">{open ? "-" : "+"}</span>
            </button>
            {open && (
                <p className="mt-2 text-gray-600 text-sm">
                    {answer}
                </p>
            )}
        </div>
    );
}

export default function FAQPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div
                className="relative h-64 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/1414407392/photo/tomato-farm.webp?a=1&b=1&s=612x612&w=0&k=20&c=QhLz21goJKPAaGxQQxx1AJPIwJ-fGXc2v5nHcLVIafM=')"
                }}
            >
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center ">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">FAQs</h1>
                    <p className="bg-gray-200 p-2 text-green-900 font-semibold mt-2"><Link to='/'><span>Home</span></Link> / FAQ</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-16 px-4">
                {/* First Section */}
                <div className="mb-12">
                    <p className="text-green-700 font-semibold mb-2">FAQs</p>
                    <h2 className="text-3xl font-bold mb-6">Your Farming Questions, Answered</h2>
                    <div className="bg-white shadow-md rounded-md divide-y px-6">
                        {faqs.map((item, i) => (
                            <FAQItem key={i} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>

                {/* Second Section */}
                <div>
                    <p className="text-green-700 font-semibold mb-2">FAQs</p>
                    <h2 className="text-3xl font-bold mb-6">Learn More About What We Do</h2>
                    <div className="bg-white shadow-md rounded-md divide-y px-6">
                        {faqs.map((item, i) => (
                            <FAQItem key={i} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
