import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function convertUnicode(input) {
  return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a, b) =>
    String.fromCharCode(parseInt(b, 16))
  );
}
function Card({ price, code }) {
  //   const c = convertUnicode(code);
  return (
    <motion.div
      className="bg-[#282454] p-6 rounded-3xl text-3xl flex items-center  "
      whileHover={{ opacity: 0.5 }}
    >
      <p>1&#8383; = </p>
      <p className="ml-2 font-bold font-sans"> {price}</p>
      <p
        className="font-semibold"
        dangerouslySetInnerHTML={{ __html: code }}
      ></p>
    </motion.div>
  );
}

export default Card;
