// Custom declaration to satisfy TypeScript for the zod resolver path
// The @hookform/resolvers package ships types for the root import but not for
// the subpath. This file tells TypeScript that the module exists.

declare module "@hookform/resolvers/zod" {
  import { zodResolver } from "@hookform/resolvers/dist/zod";
  export { zodResolver };
}
