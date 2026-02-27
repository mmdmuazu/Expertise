export function toast({
  title,
  description,
  variant,
}: {
  title: string;
  description?: string;
  variant?: "destructive" | "default";
}) {
  // Simple fallback toast using alert; replace with Shadcn UI toast implementation
  alert(`${title}${description ? ": " + description : ""}`);
}
