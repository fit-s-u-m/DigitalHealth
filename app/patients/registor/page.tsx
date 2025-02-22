import {Register} from "@/components/registor";
import { motion } from "framer-motion";
import BackButton from "@/components/backButton";


export default function RegisterForm() {
  return (
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
