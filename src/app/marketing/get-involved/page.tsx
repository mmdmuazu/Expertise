import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <main className="py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Get Involved</h1>
      <p className="mb-8 max-w-2xl mx-auto">
        Join us as a volunteer or partner to make a real difference in the lives
        of northern Nigerian youth.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/marketing/volunteer" className="btn-primary">
          Join as Volunteer
        </Link>
        <Link href="/marketing/partner" className="btn-secondary">
          Partner with Us
        </Link>
      </div>
    </main>
  );
}
