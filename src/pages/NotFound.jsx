import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiArrowRight, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-200/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/40 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <FiHome /> Go Home
          </Link>
          <Link
            to="/dashboard/links"
            className="px-6 py-3 rounded-xl border border-indigo-200 bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition flex items-center justify-center gap-2"
          >
            Dashboard <FiArrowRight />
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-16"
        >
          <div className="text-6xl mb-4">🔍</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
