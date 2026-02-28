export default function GovernancePage() {
  const board = [
    { name: "Dr. Amina Yusuf", role: "Chair, Board of Trustees" },
    { name: "Shalon Yusuf", role: "Trustee" },
  ];
  const executives = [
    { name: "Isac Yarima", role: "Executive Director" },
    { name: "Aminu balarabe", role: "Program Manager" },
  ];

  return (
    <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
      <h1 className="text-3xl font-bold text-center">
        Governance &amp; Structure
      </h1>
      <p className="text-gray-700 text-center max-w-prose mx-auto">
        We operate under strong governance principles of transparency,
        accountability, and measurable impact.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Board of Trustees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {board.map((b) => (
            <div
              key={b.name}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-lg font-bold text-primary">{b.name}</p>
              <p className="text-gray-600 mt-1">{b.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Executive Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {executives.map((e) => (
            <div
              key={e.name}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-lg font-bold text-primary">{e.name}</p>
              <p className="text-gray-600 mt-1">{e.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
