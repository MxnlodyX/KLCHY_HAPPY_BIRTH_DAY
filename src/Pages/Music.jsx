import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

export default function MusicPopup() {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl p-6 w-96 shadow-2xl flex flex-col items-center">

                {/* ปกเพลง */}
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center mb-6 shadow-md">
                    <span className="text-6xl text-white">🎵</span>
                </div>

                {/* ชื่อเพลง */}
                <h2 className="text-lg font-semibold">ภาพถ่ายวันวาน</h2>
                <p className="text-gray-500 text-sm mb-6">Purpeech</p>

                {/* Progress bar */}
                <div className="w-full mb-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>0:00</span>
                        <span>3:45</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="w-full accent-purple-500"
                    />
                </div>

                {/* ปุ่มควบคุม */}
                <div className="flex items-center justify-center gap-6 my-4">
                    <button className="text-gray-400 hover:text-purple-500 transition">
                        <SkipBack size={28} />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition"
                    >
                        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                    </button>
                    <button className="text-gray-400 hover:text-purple-500 transition">
                        <SkipForward size={28} />
                    </button>
                </div>

                {/* Volume */}
                <div className="flex items-center gap-2 w-full">
                    <Volume2 className="text-gray-500" size={18} />
                    <input type="range" min="0" max="100" className="w-full accent-purple-500" />
                </div>
            </div>
        </div>
    );
}
