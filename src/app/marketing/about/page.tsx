export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4 space-y-12">
      <h1 className="text-4xl font-bold text-center text-primary">
        About Expertise Hub Empowerment Foundation
      </h1>
      <section className="text-gray-700">
        <p className="mt-4">
          Expertise Hub Empowerment Foundation was established to address the
          growing youth development crisis in Northern Nigeria. We recognized
          that while talent exists everywhere, access to opportunity does not.
          We respond by equipping young people with relevant skills, structured
          mentorship, and platforms that unlock their potential.
        </p>
      </section>

      <section className="card p-8 border-l-4 border-primary animate-fade-in">
        <h2 className="text-2xl font-semibold mb-3 text-primary">Mission</h2>
        <p className="text-gray-700">
          To empower young people in Northern Nigeria through skills
          development, leadership training, advocacy and entrepreneurship. We
          respond by equipping young people with relevant skills, structured
          mentorship, and platforms that unlock their potential.
        </p>
      </section>

      <section className="card p-8 border-l-4 border-accent animate-fade-in">
        <h2 className="text-2xl font-semibold mb-3 text-accent">Vision</h2>
        <p className="text-gray-700">
          A Nigeria where every young person — regardless of gender, background,
          or location — has the skills, confidence, and opportunity to thrive
          and lead positive change.
        </p>
      </section>

      <section className="card p-8 border-l-4 border-teal animate-fade-in">
        <h2 className="text-2xl font-semibold mb-3 text-teal">The Challenge</h2>
        <div className="text-gray-700">
          <p>Northern Nigeria faces:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Youth unemployment</li>
            <li>Limited digital access</li>
            <li>Barriers affecting girls</li>
            <li>Drug abuse & vulnerability</li>
            <li>Weak school-to-work transition</li>
          </ul>
          <p className="mt-4">
            Without intervention, these challenges deepen poverty and
            instability. We exist to disrupt that cycle.
          </p>
        </div>
      </section>

      {/* Newsletter signup or contact input */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg animate-fade-in">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-4">
          Subscribe to our newsletter to receive the latest news and updates
          from Expertise Hub Empowerment Foundation.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="input"
          />
          <button
            type="submit"
            className="btn-accent inline-block w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
