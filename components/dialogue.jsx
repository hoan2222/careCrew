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
import { MessageCircleMore } from "lucide-react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#2353B2] text-white cursor-pointer hover:scale-[1.1]">
          <div className="flex flex-row items-center space-x-3">
            <p className=" font-medium text-lg">Join us</p>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join us now</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col space-y-4">
          <a href="/" className="w-full">
            <Button className="w-full py-5 cursor-pointer flex space-x-4">
              <MessageCircleMore size={40} color="#fdfdfd" strokeWidth={3} />
              <p> WhatsApp Group</p>
            </Button>
          </a>
          <a href="/" className="w-full">
            <Button className="w-full py-5 cursor-pointer">Text us</Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
