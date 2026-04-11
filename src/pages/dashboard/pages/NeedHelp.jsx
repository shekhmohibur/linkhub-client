import { FiMail, FiHelpCircle, FiBook, FiMessageCircle } from "react-icons/fi";

const NeedHelp = () => {
  const faqs = [
    {
      question: "How do I create and manage links?",
      answer:
        "Go to 'My Links' tab to add, edit, and organize your bio links. You can drag to reorder and toggle visibility.",
      icon: FiBook,
    },
    {
      question: "Can I customize my profile theme?",
      answer:
        "Yes! In the 'Profile' tab, you can choose from multiple color themes and customize button styles.",
      icon: FiHelpCircle,
    },
    {
      question: "How do analytics work?",
      answer:
        "The Analytics tab shows real-time data about profile views and link clicks over the last 7 days.",
      icon: FiMessageCircle,
    },
    {
      question: "How do I share my profile?",
      answer:
        "Your public profile is available at inToBio.com/yourusername. Share this link anywhere!",
      icon: FiMail,
    },
  ];

  const contacts = [
    {
      icon: FiMail,
      label: "Email Support",
      value: "support@intobio.com",
      href: "mailto:support@intobio.com",
    },
    {
      icon: FiMessageCircle,
      label: "Live Chat",
      value: "Chat with us",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Help & Support
        </h1>
        <p className="text-gray-600">
          Find answers to common questions or get in touch
        </p>
      </motion.div>

      {/* FAQs Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-3xl border shadow-sm p-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition"
              >
                <div className="flex items-start gap-3">
                  <Icon className="text-indigo-600 mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6"
      >
        {contacts.map((contact, idx) => {
          const Icon = contact.icon;
          return (
            <motion.a
              key={idx}
              variants={itemVariants}
              href={contact.href}
              className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md hover:border-indigo-200 transition"
            >
              <Icon className="text-indigo-600 mb-3" size={28} />
              <h3 className="font-semibold text-gray-900">{contact.label}</h3>
              <p className="text-gray-600 text-sm mt-2">{contact.value}</p>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white"
      >
        <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
        <p className="mb-6 opacity-90">
          Check out our documentation and guides to get the most out of inToBio.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition"
          >
            Documentation
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition"
          >
            Tutorials
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition"
          >
            Blog
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default NeedHelp;
