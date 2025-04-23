"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { RiEyeLine as Eye, RiEyeOffLine as EyeOff } from "@remixicon/react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const isAuthenticated = Cookies.get("isAuthenticated") === "true";
    const authExpiry = Cookies.get("authExpiry");

    if (isAuthenticated && authExpiry && Date.now() < Number(authExpiry)) {
      router.push("/dashboard");
    } else {
      handleLogout();
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("isAuthenticated");
    Cookies.remove("authExpiry");
    Cookies.remove("token");
  };

  const API = `${process.env.NEXT_PUBLIC_API_BASE}/admin/login`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Wrong user or password");
        throw new Error(data.message || "Login failed");
      }

      const expiryTime = Date.now() + 24 * 60 * 60 * 1000; // 1 day
      Cookies.set("isAuthenticated", "true", { expires: 1 });
      Cookies.set("authExpiry", expiryTime.toString(), { expires: 1 });
      Cookies.set("token", data.token, { expires: 1 });

      setSuccess("Logged in Successfully!");
      toast.success("Redirecting to Dashboard...");
      setTimeout(() => router.push("/dashboard"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="bg-gray-800 p-8 sm:p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-100">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-300 font-semibold mb-1">
              Username
            </label>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="h-12 text-lg bg-gray-900 text-gray-100 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="h-12 text-lg pr-10 bg-gray-900 text-gray-100 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <Button
                type="button"
                className="absolute right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
                variant="ghost"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          {error && (
            <p className="text-red-400 font-semibold text-sm">{error}</p>
          )}
          {success && (
            <p className="text-green-400 font-semibold text-sm">{success}</p>
          )}

          <Button type="submit" className="w-full h-12 text-lg bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
