import Logo from "./Logo";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" w-full relative bg-transparent px-4   flex justify-between items-center ">
      <Logo />{" "}
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" cursor-pointer md:hidden text-2xl"
        >
          ☰
        </button>
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="md:hidden  rounded-xl fixed top-0 right-0 h-screen w-96 p-6 z-50 shadow-xl bg-gray-100 "
            >
              <button
                className="cursor-pointer mb-3 text-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ✕
              </button>
              <div className="flex flex-col gap-4 headerMenu">
                <a href="#">خانه</a>
                <a href="#">محصولات</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
export default Navbar;
