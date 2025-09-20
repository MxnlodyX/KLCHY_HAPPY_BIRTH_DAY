import { useState } from "react";
import MusicPopup  from "./Music";
export default function NotePage() {
    const [showPopup, setShowPopup] = useState(false);

    const fullMessage = [
        "ชอบม้ายยย วางแผนทำไว้ตั้งแต่กรกฎาแล้ว เริ่มตั้งแต่นั่งเรียน React เรียน Tailwind เพราะตั้งใจจะทำ surprise ให้เธอนี่แหล่ะ",
        "นี่น่าจะเป็นครั้งแรกที่ตั้งใจทำของขวัญเองในชีวิตเลยนะ 55555",
        "ถ้าเรายังคบกันอยู่เธอน่าจะชอบละอินมากกว่านี้ ",
        "ขอโทษจริงๆนะคะที่รักษาความสัมพันธ์ของเราไว้ไม่ได้ แต่ขอบคุณเธอมากจริงๆนะคะที่เข้ามาในช่วงหนึ่งของชีวิต",
        "มันเป็น part ที่ดีสำหรับแมนมากจริงๆนะคะ การที่ได้รักมาย ได้ทั้งหัวเราะ ร้องไห้ ดีใจ เสียใจ ภูมิใจ เรียนรู้หลายๆ มุมของชีวิต",
        "ความสัมพันธ์ของเราก็เจอมาค่อนข้างเกือบครบอารมณ์เลยนะ 55555 ขอโทษที่ในหลายๆครั้งชอบใช้อารมณ์หรือตัดสินอะไรกับเธอมากเกินไปนะคะ",
        "ขอโทษที่ไม่รักตัวเอง ขอโทษที่ใจร้ายกับเธอ ขอโทษที่ในบางครั้งก็ทำเรื่องเล็กๆน้อยๆให้ไม่ได้",
        "แต่ขอบคุณเธอมากจริงๆนะคะที่ตลอดเวลาเกือบสองปีเราพยายามกันมามากจริงๆ",
        "ส่วนของขวัญชิ้นนี้ก็อาจจะเป็นอันสุดท้ายที่แมนให้เธอแล้วก็ได้",
        "ตั้งใจว่าหลังจากให้ของขวัญวันเกิดเธอ แมนอยากจะจบความสัมพันธ์ที่มันยุ่งยากกับเธอแล้วจริงๆ มันไม่ใช่เพราะว่าไม่รักเธอแล้ว",
        "แต่เธอดูเหมือนจะไม่รักกันแล้วมากกว่า เสียใจมากเลยนะคะ แค่ถ้าแมนเข้มแข็งควบคุมตัวเองให้ได้อีกนิด ไม่เผลอปากดีใส่เธอ เราคงจะยังรักกันอยู่แล้วได้ปรับความเข้าใจกันหลังฝึกงานเสร็จ",
        "ทีนี้เราจะได้แยกย้ายกันไปใช้ชีวิตจริงๆสักทีนะคะ แมนอยากจะตัดใจจากเธอให้ได้แล้วจริง ๆ",
        "ขอบคุณที่ทำให้เรียนรู้กับการเป็นแฟนคนแรกนะคะ ขอบคุณที่ทำให้อยากเป็นคนที่ดีขึ้น",
        "การที่แมนเป็นเพื่่อนไม่ได้ ไม่ใช่ว่าใจแคบนะคะ แต่การที่จะตัดใจจากใครสักคนที่เรารักมากๆเพื่อให้ความรู้สึกที่เหมือนเดิมมันเปลี่ยนไป มันต้องอาศัยระยะเวลามากจริงๆ",
        "สมมุติว่าถ้าเราไม่ใช่คู่กันจริงๆ วัยทำงานเราอาจจะเป็นเพื่อนกันก็ได้ reply story คุยกัน เรื่องชีวิตนู่นนี้ อนาคตไม่แน่นอน เหลือไว้แค่ความหวังดีที่มีให้กันเสมอ wish u always have a better life naka"
    ];

    const handleYes = () => {
        window.location.href = "/MemorySite"; // เปลี่ยน URL ตามต้องการ
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200 flex justify-center items-center p-6">
            {/* เพลงเปิดอัตโนมัติ */}
            <audio controls autoPlay loop hidden>
                <source
                    src="../src/assets/audio/ssvid.net--จากตรงน-ท-เคย-สวยงาม-La-La-Bye-AYLA-s-Official-Lyrics-Video_128kbps.m4a.mp3"
                    type="audio/mpeg"
                />
            </audio>

            <div className="bg-white/80 w-[90%] max-w-xl backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center flex flex-col gap-4 overflow-y-auto max-h-[80vh] animate-fadeIn">
                <h1 className="text-3xl font-bold text-purple-700">
                    Last Note แล้วมั้งง
                </h1>
                <h2 className="text-xl text-purple-700">
                    อาจจะซ้ำแต่อยากให้อ่านจนจบนะคะ พยายามเขียนสั้นแล้ว
                </h2>
                <div className="text-gray-800 text-lg text-left">
                    {fullMessage.map((line, index) => (
                        <p key={index} className="mb-2">
                            {line}
                        </p>
                    ))}
      
                </div>
            </div>

      

            {/* Animation fadeIn */}
            <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeIn 1s forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
