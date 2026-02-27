export default function PartnersPage() {
  const partnerTypes = [
    "Schools",
    "Government ministries",
    "NGOs",
    "International development agencies",
    "Corporate partners",
    "Community leaders",
  ];
  return (
    <main className="py-16 px-4 max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-center">Our Partners</h1>
      <p className="text-gray-700 text-center mb-8">
        We collaborate with a wide range of stakeholders to deliver impact.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        {partnerTypes.map((p) => (
          <li
            key={p}
            className="flex items-center gap-2 p-3 rounded hover:bg-primary/10 transition cursor-pointer"
          >
            <span className="text-primary font-bold">•</span> {p}
          </li>
        ))}
      </ul>
      <div className="text-center mt-8">
        <a href="/marketing/get-involved" className="btn-primary inline-block">
          Interested in partnering? Let's collaborate.
        </a>
      </div>
    </main>
  );
}
