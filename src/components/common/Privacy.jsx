const Privacy = () => {
  const updated = "April 2026";

  return (
    <div
      className="

max-w-3xl

mx-auto

px-4

py-16

space-y-10

"
    >
      <h1
        className="

text-3xl

font-semibold

tracking-tight

"
      >
        Privacy Policy
      </h1>

      <p className="text-gray-500 text-sm">Last updated: {updated}</p>

      {/* intro */}

      <section className="space-y-3">
        <p className="text-gray-700">
          We respect your privacy and are committed to protecting your personal
          information.
        </p>
      </section>

      {/* data */}

      <section className="space-y-3">
        <h2 className="font-semibold">Information We Collect</h2>

        <ul className="text-gray-700 list-disc ml-5 space-y-1">
          <li>Account information (name, email)</li>

          <li>Profile content you create</li>

          <li>Analytics data (page views)</li>

          <li>Cookies for performance</li>
        </ul>
      </section>

      {/* usage */}

      <section className="space-y-3">
        <h2 className="font-semibold">How We Use Information</h2>

        <p className="text-gray-700">
          We use information to provide and improve the service.
        </p>
      </section>

      {/* sharing */}

      <section className="space-y-3">
        <h2 className="font-semibold">Data Sharing</h2>

        <p className="text-gray-700">
          We do not sell personal data. We may share information with service
          providers.
        </p>
      </section>

      {/* cookies */}

      <section className="space-y-3">
        <h2 className="font-semibold">Cookies</h2>

        <p className="text-gray-700">
          We use cookies to improve performance and analytics.
        </p>
      </section>

      {/* security */}

      <section className="space-y-3">
        <h2 className="font-semibold">Security</h2>

        <p className="text-gray-700">
          We use reasonable measures to protect your data.
        </p>
      </section>

      {/* rights */}

      <section className="space-y-3">
        <h2 className="font-semibold">Your Rights</h2>

        <p className="text-gray-700">
          You may request deletion or modification of your data.
        </p>
      </section>

      {/* contact */}

      <section className="space-y-3">
        <h2 className="font-semibold">Contact</h2>

        <p className="text-gray-700">
          Contact support@intobio.com for privacy questions.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
