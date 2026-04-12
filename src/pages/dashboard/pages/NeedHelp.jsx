import { FiMail, FiHelpCircle, FiBook, FiMessageCircle } from "react-icons/fi";

import { motion } from "framer-motion";

const NeedHelp = () => {
  const faqs = [
    {
      question: "How do I create and manage links?",
      answer:
        "Go to 'My Links' tab to add, edit, and organize your bio links. Drag to reorder and toggle visibility.",
      icon: FiBook,
    },

    {
      question: "Can I customize my profile theme?",
      answer:
        "Yes! In the 'Profile' tab you can choose themes and customize button styles.",
      icon: FiHelpCircle,
    },

    {
      question: "How do analytics work?",
      answer:
        "Analytics shows profile views and link clicks over the last 7 days.",
      icon: FiMessageCircle,
    },

    {
      question: "How do I share my profile?",
      answer: "Your public profile is available at inToBio.com/username",
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

  return (
    <div className="space-y-10">
      {/* header */}

      <div>
        <h1 className="text-3xl font-semibold">Help & Support</h1>

        <p className="text-gray-500 mt-1">Find answers or contact our team</p>
      </div>

      {/* faq */}

      <div
        className="

bg-white

rounded-3xl

p-6 md:p-8

shadow-sm

space-y-5

"
      >
        <h2
          className="

text-xl

font-semibold

"
        >
          FAQs
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const Icon = faq.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="

p-4

rounded-xl

bg-gray-50

hover:bg-indigo-50/40

transition

cursor-pointer

"
              >
                <div className="flex gap-3">
                  <div
                    className="

w-9 h-9

rounded-lg

bg-indigo-50

flex items-center justify-center

"
                  >
                    <Icon className="text-indigo-600" />
                  </div>

                  <div>
                    <p className="font-medium">{faq.question}</p>

                    <p className="text-sm text-gray-500 mt-1">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* contact */}

      <div
        className="

grid sm:grid-cols-2

gap-4

"
      >
        {contacts.map((c, i) => {
          const Icon = c.icon;

          return (
            <a
              key={i}
              href={c.href}
              className="

bg-white

p-6

rounded-2xl

shadow-sm

hover:shadow-md

transition

cursor-pointer

block

"
            >
              <Icon className="text-indigo-600 mb-3" />

              <p className="font-medium">{c.label}</p>

              <p className="text-sm text-gray-500 mt-1">{c.value}</p>
            </a>
          );
        })}
      </div>

      {/* resources */}

      <div
        className="

rounded-3xl

p-8

text-white

bg-linear-to-r

from-indigo-600

to-purple-600

"
      >
        <h2 className="text-xl font-semibold">Learn more</h2>

        <p className="opacity-90 mt-1">Explore guides and tutorials</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {["Documentation", "Tutorials", "Blog"].map((item) => (
            <button
              key={item}
              className="

px-4 py-2

rounded-lg

bg-white/20

hover:bg-white/30

transition

cursor-pointer

"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
