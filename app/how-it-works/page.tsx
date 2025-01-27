
export default function HowItWorks() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-green-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 text-sm text-green-400">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Learn Our Process
            </div>

            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              How WhisperLine Works
              <span className="block text-2xl mt-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Your Environment, Our Priority
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Discover how we protect nature while making your report count for a greener future.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mt-24 grid gap-12">
            {[{
              step: "01",
              title: "Submit Your Environmental Report",
              description:
                "Fill out our secure form with as much detail as possible. No personal information is required. Attach photos or videos if available.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              ),
            },
            {
              step: "02",
              title: "Secure Data Encryption",
              description:
                "Your report is encrypted immediately using advanced protocols. Identifiable metadata like IP addresses are removed.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              ),
            },
            {
              step: "03",
              title: "Verification & Forwarding",
              description:
                "We verify the report's validity and forward it to the appropriate environmental agency while maintaining your anonymity.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
            {
              step: "04",
              title: "Anonymous Follow-Up",
              description:
                "Authorities can reach out for additional details via our secure and anonymous communication platform.",
              icon: (
                <svg
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            }].map((step, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-400">
                      Step {step.step}
                    </div>
                    <h3 className="mt-2 text-xl font-medium text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Security Features */}
          <div className="mt-24 rounded-2xl bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Our Commitment to Security
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[{
                title: "End-to-End Encryption",
                description: "All data is encrypted in transit and at rest",
                icon: (
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "No Logs Policy",
                description: "We never store IP addresses or user metadata",
                icon: (
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Regular Audits",
                description: "Independent security firms verify our systems",
                icon: (
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zM11 19a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4.22 4.22a1 1 0 111.415 1.415L5.414 7l2.121-2.121a1 1 0 111.415 1.415L6.828 8l2.121 2.121a1 1 0 11-1.415 1.415L5.414 9l-2.121 2.121a1 1 0 11-1.415-1.415L3.586 8 1.465 5.88a1 1 0 111.415-1.415L5 6.414l.22-.22a1 1 0 011.414-.03z"
                    />
                  </svg>
                ),
              }].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
