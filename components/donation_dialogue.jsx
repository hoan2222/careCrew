import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DonationDialogue({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Support us now</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col space-y-4">
          <img
            src="https://hoan2222.github.io/careCrew/qr-paypal-me.svg"
            alt="https://paypal.me/carecrewberlin"
          />
          <a href="https://paypal.me/carecrewberlin" className="w-full">
            <Button className="w-full py-5 cursor-pointer">Donate now</Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
