'use client'

import React from 'react';
import Image from 'next/image';
import Reveal from '../../components/utils/Reveal';

const highlights = [
  { src: '/highlight1.jpg' },
  { src: '/highlight2.jpg' },
  { src: '/highlight3.jpg' },
  { src: '/highlight4.jpg' },
  { src: '/highlight5.jpg' },
  { src: '/highlight6.jpg' },
  { src: '/highlight7.jpg' },
];
const Highlights = () => {
  return (
    <section className="mb-0 py-20 px-10 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="w-full mx-auto">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
            <span className="text-[#BF872B] font-bold">ANUISA</span> Highlights
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-xl mx-auto mb-10">
            A glimpse into our most memorable moments at ANUISA events.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden p-10 rounded-lg bg-gray-800 border border-gray-700">
            <div
                className="slider"
                style={
                    {
                    "--height": "300px",
                    "--width": "500px",
                    "--quantity": highlights.length * 2,
                    } as React.CSSProperties
                }
                >
                <div className="list">
                    {highlights.concat(highlights).map((item, index) => (
                    <div
                        className="item flex items-center justify-center"
                        key={index}
                        style={{
                        "--position": index + 1,
                        } as React.CSSProperties & Record<string, string | number>}
                    >
                        <Image
                        src={item.src}
                        alt={`Highlight ${index + 1}`}
                        className="rounded-xl object-cover w-full h-full"
                        width={500}
                        height={300}
                        priority
                        />
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* CSS slider styles */}
      <style>{`
        .slider {
          width: 100%;
          height: var(--height);
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
        }

        .slider .list {
          display: flex;
          min-width: calc(var(--width) * var(--quantity));
          position: relative;
        }

        .slider .item {
          width: var(--width);
          height: var(--height);
          position: absolute;
          left: 100%;
          animation: autoRun 25s linear infinite;
          animation-delay: calc((25s / var(--quantity)) * (var(--position) - 1) - 25s) !important;
        }

        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc(var(--width) * -1);
          }
        }

        .slider:hover .item {
          animation-play-state: paused !important;
          filter: grayscale(1);
        }

        .slider .item:hover {
          filter: grayscale(0);
        }
      `}</style>
    </section>
  );
};

export default Highlights;
