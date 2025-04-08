import { toast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info" | "default";

export function showToast(message: string, type: ToastType = "default") {
  switch (type) {
    case "success":
      toast.success(message, {
        style: {
          background: "#10B981", // Green background
          color: "white", // White text for better contrast
        },
      });
      break;
    case "error":
      toast.error(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "info":
      toast.info(message);
      break;
    default:
      toast(message);
  }
}
