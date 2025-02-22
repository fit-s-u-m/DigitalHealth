import {Register} from "@/components/registor";
import { motion } from "framer-motion";
import BackButton from "@/components/backButton";


export default function RegisterForm() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 30 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1 }}
    //   className="relative h-screen flex items-center justify-center bg-gray-100"
    // >
    //   {/* Background Patterns */}
    //   <motion.div
    //     initial={{ x: -100, opacity: 0 }}
    //     animate={{ x: 0, opacity: 0.2 }}
    //     transition={{ duration: 1 }}
    //     className="absolute -left-20 top-0 w-[250px] md:w-[400px] rotate-[-20deg]"
    //   >
    //     <img src="/assets/pattern.svg" alt="Pattern" className="w-full" />
    //   </motion.div>

    //   <motion.div
    //     initial={{ x: 100, opacity: 0 }}
    //     animate={{ x: 0, opacity: 0.2 }}
    //     transition={{ duration: 1 }}
    //     className="absolute -right-20 bottom-0 w-[250px] md:w-[400px] rotate-[20deg]"
    //   >
    //     <img src="/assets/pattern.svg" alt="Pattern" className="w-full" />
    //   </motion.div>
    <div className="relative h-screen flex items-center justify-center bg-gray-100">
      {/* Form Container */}
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register Patient
        </h2>
          <Register/>
        <div className="absolute top-6 left-6">
          <BackButton destinationRoute="/patients" />
        </div>
      </div>
    </div>

    // </motion.div>
  );
}
