import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import happybirthday from '../assets/—Pngtree—vase flowers cute handdrawn icon_21113379.PNG';
import GiftVideo from '../assets/5260065.png';
import notepage from '../assets/—Pngtree—cute lovely envelope cartoon_7931141.png';

export default function Menu() {

  // ข้อมูลของขวัญ
  const gifts = [
    {
      route: "happybirthday",
      img: happybirthday,
    },
    {
      route: "GiftVideo",
      img: GiftVideo,
    },
    {
      route: "notepage",
      img: notepage,
    },
  ];

  return (
    <motion.div
      className="h-screen w-screen flex justify-center items-start bg-gradient-to-br from-pink-200 via-pink-100 to-pink-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center mt-24 px-4">
        <motion.h1
          className="oooh-baby-regular font-bold text-6xl text-pink-400 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Present for you
        </motion.h1>

        <motion.span
          className="oooh-baby-regular font-bold text-3xl mb-10 text-pink-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Click any gift to open
        </motion.span>

        {/* Grid ของขวัญ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {gifts.map((gift, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center rounded-2xl shadow-lg bg-pink-300 overflow-hidden cursor-pointer"
            >
              <Link to={`/${gift.route}`} className="w-full h-full">
                <img
                  className="w-full h-40 sm:h-48 lg:h-60 object-cover"
                  src={gift.img}
                  alt=""
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
