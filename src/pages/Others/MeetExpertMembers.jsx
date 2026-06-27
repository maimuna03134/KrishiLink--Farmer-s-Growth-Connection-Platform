import React from 'react';
import { BiLeaf } from 'react-icons/bi';
import MyContainer from '../../components/myContainer/MyContainer';

const MeetExpertMembers = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Eliza Thompson',
            role: 'Crop Specialist',
            image: 'https://plus.unsplash.com/premium_photo-1686269460470-a44c06f16e0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWVyfGVufDB8fDB8fHww',
        },
        {
            id: 2,
            name: 'Jassica Andrew',
            role: 'Mechanic',
            image: 'data:image/webp;base64,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',
        },
        {
            id: 3,
            name: 'Hailey Simpson',
            role: 'Farmer',
            image: 'https://tse4.mm.bing.net/th/id/OIP.ET0XwGFmlIBFBScrMC-o-wHaFk?r=0&cb=thfvnextfalcon3&pid=ImgDet&w=178&h=134&c=7&dpr=1.5&o=7&rm=3',
        },
        {
            id: 4,
            name: 'Alees Hardson',
            role: 'Winery Master',
            image: 'https://tse4.mm.bing.net/th/id/OIP.AyoOy7VnMh6Ty3TWnf4SDAHaGy?r=0&cb=thfvnextfalcon3&pid=ImgDet&w=178&h=162&c=7&dpr=1.5&o=7&rm=3',
        },
    ];

    return (
        <section className="dark:bg-gray-800 
            dark:text-gray-100 py-12 md:py-20 px-4">
            <MyContainer>
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <BiLeaf className="w-6 h-6 text-green-600" />
                        <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">
                            Our Team Members
                        </span>
                    </div>
                    <h2 className="text-2xl text-green-700 md:text-3xl lg:text-4xl font-bold dark:bg-gray-800 
            dark:text-gray-100">
                        Meet Expert Members
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Social Icons - Show on hover */}
                                <div className="absolute bottom-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {/* Facebook */}
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-white hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group/icon"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-600 group-hover/icon:text-white transition"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>

                                    {/* Twitter */}
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-white hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group/icon"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-600 group-hover/icon:text-white transition"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-white hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group/icon"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-600 group-hover/icon:text-white transition"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Green Share Icon Button - Bottom Left */}
                                <div className="absolute bottom-6 left-6">
                                    <button className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6 text-center dark:bg-gray-800 
            dark:text-gray-100">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 dark:bg-gray-800 
            dark:text-gray-100">
                                    {member.name}
                                </h3>
                                <p className="text-green-600 font-semibold dark:bg-gray-800 
            dark:text-gray-100">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </MyContainer>
        </section>
    );
};

export default MeetExpertMembers;