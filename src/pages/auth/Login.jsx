import { useState } from "react";

import { Link, useNavigate } from "react-router";

import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

import { FaGoogle } from "react-icons/fa";

import { motion } from "framer-motion";

import { useLogin } from "../../hooks/useLogin";
import { useGoogleLogin } from "../../hooks/useGoogleLogin";

export default function Login() {
  const navigate = useNavigate();
  const googleMutation = useGoogleLogin();
  const loginMutation = useLogin();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginMutation.mutateAsync({
        email,
        password,
      });

      navigate("/dashboard/links");
    } catch (err) {
      console.error(err);
    }
  };

  const error = loginMutation.error?.response?.data?.error;

  return (
    <div
      className="

min-h-screen

flex items-center justify-center

px-4

bg-gradient-to-br

from-indigo-50

via-white

to-purple-50

"
    >
      <div
        className="

absolute inset-0 -z-10

overflow-hidden

"
      >
        <div
          className="

absolute top-0 left-1/2

-translate-x-1/2

w-96 h-96

bg-indigo-200/40

blur-3xl

rounded-full

"
        />

        <div
          className="

absolute bottom-0 right-1/4

w-96 h-96

bg-purple-200/40

blur-3xl

rounded-full

"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="

w-full

max-w-md

"
      >
        <div
          className="

bg-white/80

backdrop-blur-xl

rounded-3xl

shadow-xl

p-8

space-y-6

"
        >
          <div className="text-center">
            <h1
              className="

text-3xl

font-bold

bg-gradient-to-r

from-indigo-600

to-purple-600

bg-clip-text

text-transparent

"
            >
              inToBio
            </h1>

            <p
              className="

text-gray-500

mt-1

"
            >
              Sign in to your account
            </p>
          </div>

          {error && (
            <div
              className="

p-3

rounded-xl

bg-red-50

text-red-600

text-sm

"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="

text-sm

text-gray-600

"
              >
                Email
              </label>

              <div className="relative">
                <FiMail
                  className="

absolute left-3 top-1/2

-translate-y-1/2

text-gray-400

"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="

w-full

pl-10

pr-4

py-3

rounded-xl

bg-gray-50

focus:bg-white

outline-none

transition

"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="

text-sm

text-gray-600

"
              >
                Password
              </label>

              <div className="relative">
                <FiLock
                  className="

absolute left-3 top-1/2

-translate-y-1/2

text-gray-400

"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="

w-full

pl-10

pr-10

py-3

rounded-xl

bg-gray-50

focus:bg-white

outline-none

transition

"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="

absolute right-3

top-1/2

-translate-y-1/2

text-gray-400

cursor-pointer

"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="

w-full

py-3

rounded-xl

text-white

font-semibold

bg-gradient-to-r

from-indigo-600

to-purple-600

hover:shadow-lg

transition

cursor-pointer

disabled:opacity-50

"
            >
              {loginMutation.isPending ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div
            className="

flex items-center

gap-3

text-gray-400

text-sm

"
          >
            <div className="flex-1 h-px bg-gray-200" />
            or
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            onClick={() => googleMutation.mutate()}
            className="

w-full py-3

rounded-xl

bg-gray-50

hover:bg-gray-100

flex items-center

justify-center gap-2

font-medium

cursor-pointer

"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <p
            className="

text-center

text-sm

text-gray-500

"
          >
            Don't have account?
            <Link
              to="/register"
              className="

text-indigo-600

font-semibold

ml-1

cursor-pointer

"
            >
              Create one
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
