import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function FarmerLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { username, password });
    // Add your login logic here
  };
  const handleSignUp = () => {
    navigate("/signup");
    //console.log("Printing the check");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header Logo */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold">
                <span className="text-orange-500">Bloom</span>
                <span className="text-green-700">Kisan</span>
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                — Connecting Farmers & Buyers —
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative overflow-hidden">
        {/* Background Image Simulation */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-amber-100 to-green-100 opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-center min-h-[600px]">
            <div className="grid md:grid-cols-3 gap-8 items-center w-full">
              {/* Left Farmer Illustration */}
              <div className="hidden md:flex justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <div className="text-6xl">🧺</div>
                  </div>
                  <div className="text-5xl mb-2">👨‍🌾</div>
                  <p className="text-gray-700 font-medium">Fresh Flowers</p>
                  <p className="text-gray-600 text-sm">Direct from Farmers</p>
                </div>
              </div>

              {/* Center Login Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto w-full">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                  Login to BloomKisan
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  Bridging Farmers & Buyers Directly
                  <br />
                  <span className="text-orange-500 font-medium">
                    Get the Best Price for Fresh Flowers!
                  </span>
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-2xl">👤</span>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-2xl">🔒</span>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
                    >
                      Login
                    </button>

                    <button
                      type="button"
                      onClick={handleSignUp}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-green-700 text-sm"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>

              {/* Right Buyer Illustration */}
              <div className="hidden md:flex justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <div className="text-6xl">🧺</div>
                  </div>
                  <div className="text-5xl mb-2">👨‍💼</div>
                  <p className="text-gray-700 font-medium">Quality Products</p>
                  <p className="text-gray-600 text-sm">Best Market Prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Upload Flowers
              </h3>
              <p className="text-gray-600">
                Farmers can easily list their fresh flower inventory
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Live Auctions
              </h3>
              <p className="text-gray-600">
                Real-time bidding for the best market prices
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Secure Delivery
              </h3>
              <p className="text-gray-600">
                Safe and timely delivery to your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 BloomKisan. All rights reserved. Empowering farmers,
            connecting markets.
          </p>
        </div>
      </div>
    </div>
  );
}
