import logo from "/pc.jpg";
import { motion } from "framer-motion";
function Header() {
  return (
    <div className="text-white py-12 flex justify-between items-center">
      <div className="flex items-center space-x-12  ">
        <div className="flex items-center space-x-3">
          <img src={logo} className="h-8 rounded-full" />
          <p className="font-bold text-xl">Crypto</p>
        </div>
        <span className="h-20 bg-gray-700 w-px"></span>
        <div className="flex space-x-8 font-semibold">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>PRICING</p>
          <p>TOKENS</p>
          <p>BLOG</p>
          <p>PAGES</p>
        </div>
      </div>
      <div className="flex space-x-8 items-center flex-1 justify-end ">
        <p className="text-gray-200">Cart (0)</p>
        <motion.button
          className="py-4 px-6 font-bold bg-[#522FB9] rounded-full"
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
        >
          DOWNLOAD APP
        </motion.button>
      </div>
      <div></div>
    </div>
  );
}
export default Header;
