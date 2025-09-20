import './Styles/Menu.css'
import { ArrowLeft } from "lucide-react"; // icon library lucide-react
import { useNavigate } from "react-router-dom";
import MindPhoto from '../assets/mind-hbd.png';
export default function Wish() {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-br from-pink-100 to-purple-200 min-h-screen flex items-center justify-center p-5 font-sans">
            <audio controls autoPlay loop hidden>
                <source src="../src/assets/audio/hbd-sng.m4a" type="audio/mpeg" />
                เบราว์เซอร์ของคุณไม่รองรับการเล่นเพลง
            </audio>
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 bg-gradient-to-b from-pink-400 to-purple-500 flex items-center justify-center p-8">
                    <div className="w-45 h-full bg-white rounded-lg shadow-lg flex items-center justify-center border-4 border-white overflow-hidden">
                        <img
                            src={MindPhoto}
                            alt="Birthday Celebration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-4/5 p-8 md:p-10 relative">
                    <h1 className="font-bold text-3xl md:text-4xl text-pink-600 mb-3 text-center md:text-left text-shadow-custom animate-pulse">
                        HAPPY BIRTHDAY DAY !
                    </h1>
                    <div className="text-gray-700 text-base md:text-lg">
                        <p>Happy Birthday อายุ 21 ขวบนะคะ โตขึ้นอีกปีแล้วน้าา </p>
                        <p>เธอเก่งมาก ๆ เลยนะที่เติบโตมาได้อย่างเข้มแข็งและสดใสขนาดนี้</p>
                        <p>ขอให้ชีวิตหลังจากนี้เธอมีแต่ความสุขมาก ๆ เลยนะ </p>
                        <p>ขอให้เธอมีสุขภาพที่แข็งแรงมาก ๆ ด้วยจะได้ไม่ต้องหาหมอแย้ว </p>
                        <p>ขอให้ประสบความสำเร็จกับทุก ๆ อย่างที่เธอตั้งใจทำเลย </p>
                        <p>ขอให้เธอทำอะไรก็มีความสดใสร่าเริงแบบนี้ไปตลอด</p>
                        <p>ไม่ว่าหลังจากวันนี้เธอจะต้องเจอกับเรื่องอะไรแบบไหน จะดีหรือไม่ดี</p>
                        <p>ขอให้ทุกวันของเธอเต็มไปด้วยสิ่งเล็ก ๆ ที่ทำให้ยิ้มได้เสมอ</p>
                        <p>ขอให้รอยยิ้มของเธอยังคงสดใสเสมอแบบวันแรกทื่เราได้รู้จักกัน</p>
                        <p>ขอให้เส้นทางชีวิตข้างหน้าของเธอราบรื่นเสมอเลยนะ </p>
                        <p>ขอให้ได้เจอผู้คนที่ดี และเจอแต่โอกาสที่ดีเข้ามาในชีวิต</p>
                        <p>ขอให้เป็นมายในเวอร์ชั่นที่ดีขึ้นทุก ๆ ปีเลยนะ  </p>
                        <p>ไม่ว่าชีวิตของเธอหลังจากนี้จะเป็นยังไง จะมีคนที่คอยภูมิใจในทุกๆอย่างที่เธอทำอยู่เสมอ</p>
                    </div>
                    <div className="w-full flex justify-end p-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 px-5 py-2.5 
                    bg-gradient-to-r from-purple-500 to-pink-500 
                    text-white font-semibold rounded-2xl shadow-lg 
                    transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}