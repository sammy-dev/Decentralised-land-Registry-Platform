import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import b from "../../images/blockchain-image.webp"
import { getPrincipal } from '../../features/auth/Account';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLandownerLogin = async () => {
        setIsLoading(true);
        const result = await dispatch(getPrincipal());
        if (getPrincipal.fulfilled.match(result)) {
            setIsLoading(false);
            navigate('/landowner');
        } else {
            alert("Please create an internet identity to access our system");
            setIsLoading(false);
        }
    };

    const handleGovernmentLogin = async () => {
        setIsLoading(true);
        const result = await dispatch(getPrincipal());
        if (getPrincipal.fulfilled.match(result)) {
            setIsLoading(false);
            navigate('/government');
        } else {
            alert("Please create an internet identity to access our system");
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#FAF3E0]">
                <div className="loader border-4 border-dotted border-[#2E7D32] rounded-full w-16 h-16 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF3E0] p-5">
            <div className="w-full max-w-5xl text-center">
                {/* Professional Header */}
                <h1 className="text-4xl font-bold text-[#2E7D32] mb-4">
                    Revolutionizing Global Land Ownership with Blockchain Technology
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Our platform ensures secure, transparent, and efficient land registration systems for governments, private entities, and individuals across the world.
                </p>

                {/* Image Section */}
                <div className="relative mb-6 w-full h-64">
                    <img
                        src={b}  // Use the new image 'b'
                        alt="Land and Blockchain"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>


                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <button
                        className="bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[#256029] transition"
                        onClick={handleLandownerLogin}
                        disabled={isLoading}
                    >
                        Login as Landowner
                    </button>
                    <button
                        className="bg-[#8B4513] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[#6F3F2D] transition"
                        onClick={handleGovernmentLogin}
                        disabled={isLoading}
                    >
                        Login as Government Official
                    </button>
                </div>

                {/* Platform Explanation Section */}
                <div className="mt-8 text-gray-600">
                    <p>Our solution is built for governments, landowners, and stakeholders across the globe to streamline land registration processes:</p>
                    <a
                        href="#learn-more"
                        className="text-[#42A5F5] hover:underline"
                    >
                        Learn More About Our Features
                    </a>
                </div>

                {/* Why Choose Our Platform Section */}
                <section id="learn-more" className="mt-12">
                    <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Why Governments Trust Our Platform?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Global Compliance</h3>
                            <p className="text-gray-600">
                                Built with legal frameworks in mind, our system adapts to various country-specific regulations, ensuring global compliance in land registry systems.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Data Integrity & Security</h3>
                            <p className="text-gray-600">
                                Through advanced cryptographic techniques, your land registry data is securely stored and immutable, preventing tampering or unauthorized access.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Interoperability</h3>
                            <p className="text-gray-600">
                                Our platform integrates with existing land management systems through open APIs, providing seamless data exchange between government departments and agencies.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Fraud Prevention</h3>
                            <p className="text-gray-600">
                                By leveraging blockchain's decentralized nature, fraudulent land transactions are significantly reduced, ensuring trustworthy land records.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Real-World Use Cases</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Public Land Records Management</h3>
                            <p className="text-gray-600">
                                Governments around the world use our platform to maintain accurate, up-to-date public land records that are easily accessible to stakeholders.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Land Dispute Resolution</h3>
                            <p className="text-gray-600">
                                Our system helps resolve land ownership disputes quickly by providing tamper-proof transaction histories and land titles, reducing costly legal battles.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Land Transfer & Acquisition</h3>
                            <p className="text-gray-600">
                                Streamline the process of land transfers and acquisitions by digitizing and automating approvals, reducing administrative overhead and delays.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Sustainable Development Planning</h3>
                            <p className="text-gray-600">
                                Governments can use our platform to plan and manage sustainable land development projects, ensuring environmental and economic goals are aligned.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Empowering Governments & Citizens Alike</h2>
                    <p className="text-gray-600 mb-6">
                        Whether you're a government official, landowner, or part of a community, our platform empowers you with the tools needed to make land ownership transparent, secure, and efficient. Join us today and be part of the revolution!
                    </p>
                    <button className="bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[#256029] transition">
                        Get Started
                    </button>
                </section>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#2E7D32] text-white text-center py-8 mt-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                        <div className="text-sm">
                            <p>&copy; 2024 PAWA Land Registry. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-4 text-lg">
                            <FaFacebook className="hover:text-gray-400" />
                            <FaTwitter className="hover:text-gray-400" />
                            <FaLinkedin className="hover:text-gray-400" />
                            <FaInstagram className="hover:text-gray-400" />
                        </div>
                    </div>
                    <p className="text-sm">Designed for governments and landowners worldwide.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
