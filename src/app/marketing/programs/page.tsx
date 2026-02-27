export default function ProgramsPage() {
  const pillars = [
    {
      title: "Skills Development & Employability",
      description:
        "Digital skills (Web Dev, Graphics, Animation), vocational skills (solar, CCTV, production), soft skills & work readiness, internship & placement support. Impact: increased employability and income generation.",
    },
    {
      title: "Advocacy & Awareness",
      description:
        "Gender equality campaigns, anti-drug awareness, mental health education, youth civic responsibility. Impact: reduced vulnerability and increased social inclusion.",
    },
    {
      title: "Leadership & Civic Engagement",
      description:
        "Youth Leadership Academy, school clubs, volunteer mobilization, community projects. Impact: youth become change-makers.",
    },
    {
      title: "Entrepreneurship & Innovation",
      description:
        "Ideation workshops, startup bootcamps, youth enterprise grants, mentorship & incubation. Impact: youth transition from job seekers to job creators.",
    },
  ];

  return (
    <main className="py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">
        Programs by Pillar
      </h1>
      <div className="grid gap-8 max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="group border rounded-lg p-6 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
              {p.title}
            </h2>
            <p className="mb-4 text-gray-700">{p.description}</p>
            <a
              href="#"
              className="inline-flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
