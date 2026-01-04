import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, TrendingUp, MapPin, Calendar } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function DashboardOverview() {
    const [crops, setCrops] = useState([]);
    const [interests, setInterests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalCrops: 0,
        totalValue: 0,
        categories: 0,
        locations: 0
    });

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);

            // Fetch crops data
            const cropsResponse = await fetch(`${API_BASE_URL}/crops?limit=100`);
            const cropsData = await cropsResponse.json();

            if (cropsData.success) {
                const cropsArray = cropsData.data;
                setCrops(cropsArray);

                // Calculate statistics
                const totalValue = cropsArray.reduce((sum, crop) =>
                    sum + (crop.pricePerUnit * crop.quantity), 0
                );

                const uniqueCategories = [...new Set(cropsArray.map(c => c.type))];
                const uniqueLocations = [...new Set(cropsArray.map(c => c.location))];

                setStats({
                    totalCrops: cropsArray.length,
                    totalValue: totalValue,
                    categories: uniqueCategories.length,
                    locations: uniqueLocations.length
                });
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setLoading(false);
        }
    };

    // Prepare chart data
    const getCategoryData = () => {
        const categoryMap = {};
        crops.forEach(crop => {
            categoryMap[crop.type] = (categoryMap[crop.type] || 0) + 1;
        });
        return Object.entries(categoryMap).map(([name, value]) => ({ name, value }));
    };

    const getLocationData = () => {
        const locationMap = {};
        crops.forEach(crop => {
            locationMap[crop.location] = (locationMap[crop.location] || 0) + crop.quantity;
        });
        return Object.entries(locationMap).map(([name, quantity]) => ({ name, quantity }));
    };

    const getPriceData = () => {
        return crops.slice(0, 10).map(crop => ({
            name: crop.name.length > 15 ? crop.name.substring(0, 15) + '...' : crop.name,
            price: crop.pricePerUnit,
            quantity: crop.quantity
        }));
    };

    const getRecentCrops = () => {
        return crops.slice(0, 8);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600 font-medium">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Crops Dashboard</h1>
                    <p className="text-gray-600">Overview of your agricultural marketplace</p>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Total Crops</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalCrops}</p>
                            </div>
                            <div className="bg-emerald-100 p-3 rounded-lg">
                                <Package className="w-8 h-8 text-emerald-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Total Value</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">${stats.totalValue.toLocaleString()}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <TrendingUp className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Categories</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.categories}</p>
                            </div>
                            <div className="bg-amber-100 p-3 rounded-lg">
                                <Calendar className="w-8 h-8 text-amber-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Locations</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.locations}</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <MapPin className="w-8 h-8 text-purple-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Category Distribution Pie Chart */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Category Distribution</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={getCategoryData()}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {getCategoryData().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Location Quantity Bar Chart */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Quantity by Location</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={getLocationData()}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="quantity" fill="#10b981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Price Comparison Line Chart */}
                    <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Price per Unit (Top 10 Crops)</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={getPriceData()}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} name="Price ($)" />
                                <Line type="monotone" dataKey="quantity" stroke="#f59e0b" strokeWidth={2} name="Quantity" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Crops</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
                                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Quantity</th>
                                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Price/Unit</th>
                                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Total Value</th>
                                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getRecentCrops().map((crop, index) => (
                                    <tr key={crop._id} className={`border-b border-gray-100 hover:bg-gray-50 transition ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                        <td className="py-3 px-4 font-medium text-gray-900">{crop.name}</td>
                                        <td className="py-3 px-4">
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                                {crop.type}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">{crop.location}</td>
                                        <td className="py-3 px-4 text-right text-gray-900">{crop.quantity} {crop.unit}</td>
                                        <td className="py-3 px-4 text-right font-medium text-gray-900">${crop.pricePerUnit}</td>
                                        <td className="py-3 px-4 text-right font-bold text-gray-900">
                                            ${(crop.pricePerUnit * crop.quantity).toLocaleString()}
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${crop.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                {crop.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}