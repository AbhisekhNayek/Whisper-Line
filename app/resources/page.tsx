"use client";

export default function HelpCenter() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      <div className="container max-w-5xl p-6 sm:p-8 bg-black rounded-lg shadow-lg border border-green-500/20">
        {/* Header Section */}
        <h1 className="text-3xl font-extrabold text-center mb-6 text-white">
          Help Center
        </h1>

        {/* Search Bar */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="How can we help you today?"
            className="w-full p-4 rounded-lg bg-black border border-green-500/20 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="grid gap-12">
          {/* FAQs Section */}
          <section className="bg-black/80 p-6 rounded-2xl shadow-lg border border-green-500/20">
            <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6">
              {["How do I reset my password?", "How do I submit a report?", "Is my data safe?", "What measures ensure my anonymity?"].map(
                (faq, i) => (
                  <div
                    key={i}
                    className="bg-black p-4 rounded-lg shadow-md border border-green-500/20 transition-all hover:bg-green-600 hover:border-green-600"
                  >
                    <p className="text-gray-300">{faq}</p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Guides & Tutorials Section */}
          <section className="bg-black/80 p-6 rounded-2xl shadow-lg border border-green-500/20">
            <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">
              Guides & Tutorials
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {["How to submit a report", "Using secure communication", "Account recovery steps", "Data privacy tips"].map(
                (guide, i) => (
                  <div
                    key={i}
                    className="bg-black p-4 rounded-lg shadow-md border border-green-500/20 transition-all hover:bg-green-600 hover:border-green-600"
                  >
                    <p className="text-gray-300">{guide}</p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Contact Support Section */}
          <section className="bg-black/80 p-6 rounded-2xl shadow-lg border border-green-500/20">
            <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">
              Contact Support
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[ 
                { method: "Live Chat", description: "Chat instantly with our support team." },
                { method: "Email Support", description: "Send detailed queries securely." },
                { method: "Phone Support", description: "Call our helpline for immediate help." },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="bg-black p-4 rounded-lg shadow-md border border-green-500/20 transition-all hover:bg-green-600 hover:border-green-600"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {contact.method}
                  </h3>
                  <p className="text-gray-300 text-sm">{contact.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feedback Section */}
          <section className="bg-black/80 p-6 rounded-2xl shadow-lg border border-green-500/20">
            <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">
              Feedback
            </h2>
            <form className="space-y-4">
              <textarea
                placeholder="Share your feedback here..."
                className="w-full p-4 rounded-lg shadow-md bg-black text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg transition-all"
              >
                Submit Feedback
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
