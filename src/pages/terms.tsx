import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Terms of Service - Smokr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Smokr (the &quot;App&quot;), you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to these Terms of Service, please
                do not use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                2. Use of the App
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smokr is designed to help users quit smoking through tracking,
                motivation, and community support. The App is intended for
                personal, non-commercial use only.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You must be at least 13 years old to use this App</li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account
                </li>
                <li>You agree to provide accurate and complete information</li>
                <li>
                  You will not use the App for any illegal or unauthorized
                  purpose
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                3. Medical Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smokr is not a medical device and does not provide medical
                advice. The App is designed to support your journey to quit
                smoking but should not replace professional medical advice,
                diagnosis, or treatment. Always seek the advice of your
                physician or other qualified health provider with any questions
                you may have regarding smoking cessation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                4. User Content
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of any content you post through the App. By
                posting content, you grant Smokr a non-exclusive, worldwide,
                royalty-free license to use, display, and distribute your
                content within the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                5. Prohibited Conduct
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Harass, abuse, or harm other users</li>
                <li>Post false, misleading, or fraudulent content</li>
                <li>Attempt to gain unauthorized access to the App</li>
                <li>Use the App to distribute spam or malware</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The App and its original content, features, and functionality
                are owned by Smokr and are protected by international copyright,
                trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                7. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your account and
                access to the App at our sole discretion, without notice, for
                conduct that we believe violates these Terms of Service or is
                harmful to other users, us, or third parties, or for any other
                reason.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Smokr, its directors, employees, or agents be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits,
                data, use, goodwill, or other intangible losses, resulting from
                your access to or use of or inability to access or use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms of Service
                at any time. We will provide notice of any changes by updating
                the &quot;Last updated&quot; date at the top of this page. Your
                continued use of the App after any such changes constitutes your
                acceptance of the new Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <Link
                  href="/support"
                  className="text-neutral-900 underline hover:text-gray-700"
                >
                  our support page
                </Link>
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
