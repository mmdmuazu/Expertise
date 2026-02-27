import { ContactForm } from "../../../components/sections/ContactForm";
import { contactAction } from "../../actions/contact";

export default function ContactPage() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-lg mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <p className="text-gray-700 text-center">
        Hotoro, Kano State
        <br />
        Phone: +234-800-000-0000
        <br />
        Email: info@expertisehub.org
      </p>
      <section>
        <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
        <ContactForm action={contactAction} />
      </section>
    </main>
  );
}
