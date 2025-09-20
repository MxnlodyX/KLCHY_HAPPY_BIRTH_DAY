import React, { useState, useRef } from 'react';

export default function CardStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startPosRef = useRef(0);
  const dragStartRef = useRef(false);

  const cards = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=400&h=600&fit=crop',
      title: 'Card 1',
      content: 'Beautiful card with stunning imagery'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?w=400&h=600&fit=crop',
      title: 'Card 2',
      content: 'Swipe through this amazing card stack'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop',
      title: 'Card 3',
      content: 'Interactive 3D card stack experience'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=600&fit=crop',
      title: 'Card 4',
      content: 'Smooth transitions and beautiful effects'
    }
  ];

  const nextCard = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevCard = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const goToCard = (index) => {
    if (!isAnimating && index !== currentIndex && !dragStartRef.current) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const resetDrag = () => {
    setIsDragging(false);
    setDragOffset(0);
    dragStartRef.current = false;
    startPosRef.current = 0;
  };

  // Mouse events
  const onMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = true;
    startPosRef.current = e.clientX;
    setDragOffset(0);

    const onMouseMove = (e) => {
      if (dragStartRef.current) {
        const diff = e.clientX - startPosRef.current;
        setDragOffset(diff);
      }
    };

    const onMouseUp = (e) => {
      if (dragStartRef.current) {
        const diff = e.clientX - startPosRef.current;

        if (Math.abs(diff) > 60) {
          if (diff > 0) {
            prevCard();
          } else {
            nextCard();
          }
        }
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      resetDrag();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // Touch events
  const onTouchStart = (e) => {
    setIsDragging(true);
    dragStartRef.current = true;
    startPosRef.current = e.touches[0].clientX;
    setDragOffset(0);
  };

  const onTouchMove = (e) => {
    if (dragStartRef.current) {
      const diff = e.touches[0].clientX - startPosRef.current;
      setDragOffset(diff);
    }
  };

  const onTouchEnd = (e) => {
    if (dragStartRef.current) {
      const lastTouch = e.changedTouches[0];
      const diff = lastTouch.clientX - startPosRef.current;

      if (Math.abs(diff) > 60) {
        if (diff > 0) {
          prevCard();
        } else {
          nextCard();
        }
      }
    }
    resetDrag();
  };

  const getCardStyle = (index) => {
    const position = (index - currentIndex + cards.length) % cards.length;

    let baseTransform = '';
    let zIndex = 0;
    let opacity = 1;

    switch (position) {
      case 0: // Front card
        const rotation = isDragging ? dragOffset * 0.05 : 0;
        const translateX = isDragging ? dragOffset * 0.8 : 0;
        baseTransform = `translateX(${translateX}px) translateY(0) rotate(${rotation}deg) scale(1)`;
        zIndex = 4;
        opacity = 1;
        break;
      case 1:
        baseTransform = 'translateX(-8px) translateY(4px) rotate(-3deg) scale(0.95)';
        zIndex = 3;
        opacity = 0.9;
        break;
      case 2:
        baseTransform = 'translateX(-16px) translateY(8px) rotate(6deg) scale(0.9)';
        zIndex = 2;
        opacity = 0.8;
        break;
      case 3:
        baseTransform = 'translateX(-24px) translateY(12px) rotate(12deg) scale(0.85)';
        zIndex = 1;
        opacity = 0.7;
        break;
      default:
        baseTransform = 'translateX(-32px) translateY(16px) rotate(15deg) scale(0.8)';
        zIndex = 0;
        opacity = 0.6;
    }

    return {
      transform: baseTransform,
      zIndex,
      opacity,
      transition: isDragging ? 'none' : 'all 0.3s ease-out'
    };
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <audio controls autoPlay loop hidden>
        <source
          src="../src/assets/audio/ssvid.net--จากตรงน-ท-เคย-สวยงาม-La-La-Bye-AYLA-s-Official-Lyrics-Video_128kbps.m4a.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div
        className="relative w-90 h-120 mb-8 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl overflow-hidden"
            style={getCardStyle(index)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div
              className="relative z-10 w-full h-full p-6 flex flex-col justify-between text-white cursor-pointer"
              onClick={() => goToCard(index)}
            >
              <div>
                <h2 className="text-2xl font-bold mb-4 drop-shadow-lg">{card.title}</h2>
                <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                  {card.content}
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-xs opacity-80 drop-shadow-md">
                  {String(card.id).padStart(2, '0')}
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drag feedback */}
      {isDragging && Math.abs(dragOffset) > 60 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm pointer-events-none">
          {dragOffset > 0 ? '← Previous Card' : 'Next Card →'}
        </div>
      )}

      {/* Navigation Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={prevCard}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/40 hover:bg-white/60'
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>


    </div>
  );
}