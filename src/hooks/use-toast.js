import { toast as shadToast } from "sonner"; // Assuming you're using `sonner` for toast notifications

export function useToast() {
  return {
    toast: shadToast,
  };
}
