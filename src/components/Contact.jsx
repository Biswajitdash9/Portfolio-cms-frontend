function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gray-100"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact