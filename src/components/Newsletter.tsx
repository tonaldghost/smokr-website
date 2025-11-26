export default function Newsletter() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-12 pb-20 sm:pb-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Get weekly tips, success stories, and expert advice to support your
            smoke-free journey. Join thousands who have already quit.
          </p>
          <div className="mt-6 flex max-w-md gap-x-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-full rounded-r-none bg-white px-3.5 py-2 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:-outline-offset-2 focus:outline-neutral-900 sm:text-sm/6"
            />
            <button
              type="submit"
              className="px-4 py-2 flex items-center cursor-pointer rounded-l-none gap-2 text-sm bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 text-white rounded-full font-medium transition duration-400"
              style={{
                boxShadow: "0 -4px 2px 1px rgba(255, 255, 255, 0.025) inset",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
