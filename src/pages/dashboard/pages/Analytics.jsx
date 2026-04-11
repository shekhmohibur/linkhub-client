import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiMousePointer,
  FiEye,
  FiBarChart2,
} from "react-icons/fi";

import { useData } from "../../../contexts/DataContext";

const analyticsData = [
  { day: "Mon", views: 120, clicks: 40 },
  { day: "Tue", views: 210, clicks: 90 },
  { day: "Wed", views: 160, clicks: 60 },
  { day: "Thu", views: 300, clicks: 120 },
  { day: "Fri", views: 260, clicks: 110 },
  { day: "Sat", views: 180, clicks: 70 },
  { day: "Sun", views: 220, clicks: 95 },
];

const stats = [
  {
    title: "Views",
    value: "1,840",
    growth: "+12%",
    icon: FiEye,
  },
  {
    title: "Clicks",
    value: "612",
    growth: "+8%",
    icon: FiMousePointer,
  },
  {
    title: "CTR",
    value: "33%",
    growth: "+2%",
    icon: FiTrendingUp,
  },
  {
    title: "Top link",
    value: "Portfolio",
    growth: "124 clicks",
    icon: FiBarChart2,
  },
];

const topLinks = [
  { title: "Portfolio", clicks: 124, percentage: 28 },
  { title: "Instagram", clicks: 98, percentage: 22 },
  { title: "YouTube", clicks: 76, percentage: 17 },
  { title: "Store", clicks: 52, percentage: 12 },
];

const StatCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
    >
      <div className="flex justify-between items-start mb-4">
        <Icon className="text-indigo-600" size={24} />
        <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
          {item.growth}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-1">{item.title}</p>
      <p className="text-3xl font-bold text-gray-900">{item.value}</p>
    </motion.div>
  );
};

const Analytics = () => {
  const { loading } = useData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">
          Track your performance and engagement metrics
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <StatCard key={item.title} item={item} />
        ))}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white rounded-3xl border shadow-sm p-6 lg:p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Traffic Overview
          </h2>
          <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
            Last 7 days
          </span>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={analyticsData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#4F46E5"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorViews)"
                name="Views"
              />
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="#A855F7"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorClicks)"
                name="Clicks"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-6 pt-6 border-t">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-indigo-600"></div>
            <span className="text-sm text-gray-600">Views</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-purple-600"></div>
            <span className="text-sm text-gray-600">Clicks</span>
          </div>
        </div>
      </motion.div>

      {/* Top Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-white rounded-3xl border shadow-sm p-6 lg:p-8"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Top Performing Links
        </h2>
        <div className="space-y-4">
          {topLinks.map((link, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{link.title}</h3>
                <p className="text-sm text-gray-500">{link.clicks} clicks</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-indigo-600 to-purple-600 rounded-full"
                    style={{ width: `${link.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                  {link.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Analytics;
