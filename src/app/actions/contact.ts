"use server";
import { revalidatePath } from "next/cache";

interface ContactForm {
  name: string;
  email: string;
  type: string;
  message: string;
}

export async function contactAction(data: ContactForm) {
  // server action invoked from form – replace with whatever backend logic you need
  console.log("contact data received", data);

  // if you want to trigger a page revalidation, uncomment the next line
  // revalidatePath("/marketing/get-involved");

  return { success: true };
}
