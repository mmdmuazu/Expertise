import { ContactForm } from "../../../components/sections/ContactForm";
import { contactAction } from "../../actions/contact";

export default function PartnerPage() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Partner with Us</h1>
      <ContactForm action={contactAction} />
    </main>
  );
}
