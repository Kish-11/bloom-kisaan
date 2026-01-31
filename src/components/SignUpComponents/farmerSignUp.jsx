import React, { useState } from "react";
import { signUp } from "../../services/authService";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FarmerSignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    userType: "farmer", // farmer or buyer
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const createAccount = async () => {
    try {
      const response = await signUp(formData);
      if (response.status === 200) {
        console.log("SignUp successful");
        alert("SignUp successfull please login");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("SignUp unsuccessful");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Sign up data:", formData);
    // Add your signup logic here
    // After successful signup, redirect to login:
    // window.location.href = '/';
  };

  const goToLogin = () => {
    navigate("/");
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

      {/* Sign Up Form */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-amber-100 to-green-100 opacity-40"></div>

        <div className="relative max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
              Create Your Account
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Join BloomKisan Today!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* User Type Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  I am a:
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value="farmer"
                      checked={formData.userType === "farmer"}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-gray-700">🧑‍🌾 Farmer</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value="buyer"
                      checked={formData.userType === "buyer"}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600"
                    />
                    <span className="text-gray-700">👨‍💼 Buyer</span>
                  </label>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
                onClick={createAccount}
              >
                Create Account
              </button>

              {/* Back to Login */}
              <div className="text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={goToLogin}
                    className="text-green-700 hover:text-green-800 font-medium"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </form>
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
