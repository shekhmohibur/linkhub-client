const Terms = () => {
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
        Terms of Service
      </h1>

      <p className="text-gray-500 text-sm">Last updated: {updated}</p>

      {/* intro */}

      <section className="space-y-3">
        <p className="text-gray-700">
          Welcome to inToBio. By accessing or using our service, you agree to be
          bound by these Terms.
        </p>
      </section>

      {/* use */}

      <section className="space-y-3">
        <h2 className="font-semibold">Use of Service</h2>

        <p className="text-gray-700">
          inToBio allows users to create a personalized bio link page. You agree
          not to misuse the service or attempt unauthorized access.
        </p>
      </section>

      {/* account */}

      <section className="space-y-3">
        <h2 className="font-semibold">Accounts</h2>

        <p className="text-gray-700">
          You are responsible for maintaining the security of your account. We
          are not liable for any loss caused by unauthorized access.
        </p>
      </section>

      {/* content */}

      <section className="space-y-3">
        <h2 className="font-semibold">User Content</h2>

        <p className="text-gray-700">
          You retain ownership of your content but grant us permission to
          display it on your public page. You must not upload illegal or harmful
          content.
        </p>
      </section>

      {/* availability */}

      <section className="space-y-3">
        <h2 className="font-semibold">Service Availability</h2>

        <p className="text-gray-700">
          We strive to keep the service available but cannot guarantee
          uninterrupted access.
        </p>
      </section>

      {/* termination */}

      <section className="space-y-3">
        <h2 className="font-semibold">Termination</h2>

        <p className="text-gray-700">
          We may suspend accounts that violate our policies.
        </p>
      </section>

      {/* liability */}

      <section className="space-y-3">
        <h2 className="font-semibold">Limitation of Liability</h2>

        <p className="text-gray-700">
          We are not responsible for damages arising from use of the service.
        </p>
      </section>

      {/* contact */}

      <section className="space-y-3">
        <h2 className="font-semibold">Contact</h2>

        <p className="text-gray-700">Questions? contact support@intobio.com</p>
      </section>
    </div>
  );
};

export default Terms;
