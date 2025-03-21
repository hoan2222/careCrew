"use client";
import { Button } from "../ui/button";
import { MoveRight, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Mobile() {
  let [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full z-50">
      {/* Fixer Header */}
      <div className="flex flex-row justify-between space-x-3 w-full px-5 py-3 bg-[#FDFDFD]">
        <img
          src="https://hoan2222.github.io/careCrew/CareCrew.svg"
          alt="CARE_CREW"
        />
        {open ? (
          <X size={40} onClick={() => setOpen(false)} />
        ) : (
          <Menu size={40} onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Animiertes Menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center px-5 w-full bg-[#FDFDFD] pb-40"
          >
            <motion.div
              className="flex flex-col items-center space-y-8 flex-1 justify-center"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {["ABOUT US", "OUR CONCEPT", "PROJECTS"].map((item) => (
                <motion.a
                  key={item}
                  href={`https://hoan2222.github.io/careCrew#${item
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-2xl"
                  onClick={() => setOpen(false)}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              href="https://hoan2222.github.io/careCrew"
              className="pb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button className={"bg-[#2353B2] text-white cursor-pointer"}>
                <div className="flex flex-row items-center space-x-5 py-8 ">
                  <p className="font-medium text-3xl">Donate now</p>
                  <MoveRight className="scale-150" />
                </div>
              </Button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
