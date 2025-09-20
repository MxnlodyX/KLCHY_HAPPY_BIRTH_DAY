import { useState } from "react";
import MisicPopUp from './Music';
import GiftBox from '../assets/box-gif.gif';
export default function GiftVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const [popUp, setClosePopup] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-purple-200">
      <div className="flex flex-col justify-center items-center"
        onClick={() => setIsOpen(true)}
      >

        <img src={GiftBox} alt="" />
        <span className="text-3xl font-bold animate-bounce">แกลองจิ้มกล่องของขวัญดูสิ่</span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          {popUp && (
            <div className="p-3 w-100 bg-white rounded-xl flex flex-col justify-start items-center">
              <h1 className='oooh-baby-regular font-bold text-5xl  text-pink-400 outline-text-2'> Message </h1>
              <p className="text-center mt-4 text-gray-700 leading-relaxed">
                ตั้งใจทำสิ่งนี้มาให้ เป็นครั้งแรกเลยที่ลองทำแบบนี้ <br />
                ไม่รู้ว่าจะชอบรึเปล่า แต่ก็อยากให้เปิดใจลองดูจนจบนะ <br />
                แต่นี่ชอบมากเลยอ่ะ มันมีความสุขตอนทำอ่ะ น้ำตาไหลเลย <br />
                อยากให้ชอบนะ ทำครั้งแรกอาจจะไม่ค่อยดีเท่าไร <br />
                ถือเป็นของขวัญเล็ก ๆ จากชั้นละกันนะ 🫶 <br />
                <span className="text-red-500">อย่าลืมเปิดเสียง แล้วก็เปิดจอใหญ่ 1080hd ด้วยนะจ้ะ</span>
              </p>
              <button onClick={() => setClosePopup(false)} className="mt-2 font-bold text-white px-4 py-2 rounded-md text-sm bg-red-200 ">
                ปิด Popup
              </button>
            </div>
          )}
          {!popUp && (
            <div className="p-2 bg-pink-400 rounded-2xl ">
              <div className="w-[800px] h-[450px] aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/LDeCafpfCTg?autoplay=1&loop=1&mute=1&playlist=LDeCafpfCTg"
                  title="HBD Video"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
}
