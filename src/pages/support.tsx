import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import {
  EnvelopeSimpleIcon,
  ChatCircleDotsIcon,
  QuestionIcon,
  BookOpenIcon,
  BugIcon,
  LightbulbIcon,
} from "@phosphor-icons/react";

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Support - Smokr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Support Center
          </h1>
          <p className="text-gray-600 mb-12 text-lg">
            We&apos;re here to help you on your journey to quit smoking. Find
            answers, get help, or reach out to our team.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 rounded-xl">
                  <EnvelopeSimpleIcon size={24} className="text-neutral-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Email Support
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Get help via email. We typically respond within 24 hours.
                  </p>
                  <a
                    href="mailto:support@smokr.app"
                    className="text-neutral-900 font-medium hover:underline"
                  >
                    support@smokr.app
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 rounded-xl">
                  <ChatCircleDotsIcon size={24} className="text-neutral-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Community Forum
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Connect with other users and share your experiences.
                  </p>
                  <a
                    href="#community"
                    className="text-neutral-900 font-medium hover:underline"
                  >
                    Join the community
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border border-neutral-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <QuestionIcon
                    size={24}
                    className="text-neutral-900 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      How do I track my progress?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Simply open the app and your smoke-free time will be
                      displayed on the home screen. You can view detailed
                      statistics including money saved, cigarettes not smoked,
                      and health improvements in the Progress section.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <QuestionIcon
                    size={24}
                    className="text-neutral-900 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Can I reset my quit date?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes, you can reset your quit date in Settings. We
                      understand that quitting is a journey, and sometimes it
                      takes multiple attempts. Don&apos;t be discouraged - keep
                      trying!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <QuestionIcon
                    size={24}
                    className="text-neutral-900 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Is my data private and secure?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Absolutely. We take your privacy seriously. Your data is
                      encrypted and stored securely. We never sell your personal
                      information. Read our{" "}
                      <a
                        href="/privacy"
                        className="text-neutral-900 underline hover:text-gray-700"
                      >
                        Privacy Policy
                      </a>{" "}
                      for more details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <QuestionIcon
                    size={24}
                    className="text-neutral-900 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      How do I delete my account?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can delete your account from Settings {">"} Account{" "}
                      {">"} Delete Account. Please note that this action is
                      permanent and cannot be undone. All your data will be
                      permanently deleted.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <QuestionIcon
                    size={24}
                    className="text-neutral-900 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Does the app work offline?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes! Most features work offline. Your progress continues
                      to track even without an internet connection. Community
                      features require an internet connection to sync.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <QuestionIcon
                    size={24}
                    className="text-neutral-900 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      What platforms is Smokr available on?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Currently, Smokr is available on iOS via the App Store.
                      We&apos;re working hard on bringing the app to Android and
                      web platforms. Stay tuned!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Additional Resources
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-neutral-200 rounded-xl p-6 text-center hover:border-neutral-300 transition-colors">
                <div className="inline-flex p-4 bg-neutral-100 rounded-xl mb-4">
                  <BookOpenIcon size={32} className="text-neutral-900" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  User Guide
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how to make the most of Smokr&apos;s features
                </p>
                <a
                  href="#guide"
                  className="text-neutral-900 font-medium hover:underline text-sm"
                >
                  Read guide
                </a>
              </div>

              <div className="border border-neutral-200 rounded-xl p-6 text-center hover:border-neutral-300 transition-colors">
                <div className="inline-flex p-4 bg-neutral-100 rounded-xl mb-4">
                  <BugIcon size={32} className="text-neutral-900" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Report a Bug
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Found an issue? Let us know so we can fix it
                </p>
                <a
                  href="mailto:support@smokr.app?subject=Bug Report"
                  className="text-neutral-900 font-medium hover:underline text-sm"
                >
                  Report bug
                </a>
              </div>

              <div className="border border-neutral-200 rounded-xl p-6 text-center hover:border-neutral-300 transition-colors">
                <div className="inline-flex p-4 bg-neutral-100 rounded-xl mb-4">
                  <LightbulbIcon size={32} className="text-neutral-900" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Feature Request
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Have an idea? We&apos;d love to hear your suggestions
                </p>
                <a
                  href="mailto:support@smokr.app?subject=Feature Request"
                  className="text-neutral-900 font-medium hover:underline text-sm"
                >
                  Share idea
                </a>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Still need help?
            </h2>
            <p className="text-gray-600 mb-8">
              Can&apos;t find what you&apos;re looking for? Send us a message
              and we&apos;ll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-900 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent resize-none"
                  placeholder="Tell us more about your question or issue..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
