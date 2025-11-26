import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Privacy Policy - Smokr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Smokr. We respect your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you use our mobile application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Register for an account</li>
                <li>Use the App&apos;s features and services</li>
                <li>Participate in community features</li>
                <li>Contact our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                2.2 Health and Usage Data
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To provide our smoking cessation services, we collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Smoking habits and quit date</li>
                <li>Progress tracking information</li>
                <li>App usage statistics</li>
                <li>Device information and identifiers</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
                2.3 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Device type and operating system</li>
                <li>IP address and location data</li>
                <li>App performance and crash data</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Track your smoking cessation progress</li>
                <li>Send you notifications and motivational messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who
                  perform services on our behalf
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, sale, or acquisition
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly agree
                  to share information
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law. When you delete your account, we will delete
                or anonymize your personal data within a reasonable timeframe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Access:</strong> Request access to your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Opt-out of marketing communications
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4 mt-4">
                To exercise these rights, please contact us through our{" "}
                <a
                  href="/support"
                  className="text-neutral-900 underline hover:text-gray-700"
                >
                  support page
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our App is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and maintained on
                computers located outside of your state, province, country, or
                other governmental jurisdiction where data protection laws may
                differ. By using the App, you consent to such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by updating the &quot;Last
                updated&quot; date at the top of this page. We encourage you to
                review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at{" "}
                <a
                  href="/support"
                  className="text-neutral-900 underline hover:text-gray-700"
                >
                  our support page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
