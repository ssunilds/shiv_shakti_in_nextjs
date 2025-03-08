"use client";

import { useState } from "react";
import AdminPanel from "./AdminPanel";

export default function ProtectedAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/adminAuth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Server Error! Try Again.");
    }
  };

  return isAuthenticated ? (
    <AdminPanel />
  ) : (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <input
        type="password"
        placeholder="Enter Admin Password"
        className="w-full p-2 border rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}
