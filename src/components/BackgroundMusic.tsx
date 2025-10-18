"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [initialized, setInitialized] = useState(false); // first user click

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.08; // soft
      audioRef.current.muted = true;  // start muted
    }
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;

    // Start playback on first click only
    if (!initialized) {
      audioRef.current.play().catch(() => {});
      setInitialized(true);
    }

    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  return (
    <div
      onClick={toggleMute}
      className="flex items-center gap-2 cursor-pointer select-none group transition"
    >
      <audio ref={audioRef} loop src="/bg-music.mp3" />
      {muted ? (
        <VolumeX
          size={18}
          className="text-neutral-400 group-hover:text-neutral-200 transition"
        />
      ) : (
        <Volume2
          size={18}
          className="text-cyan-400/80 group-hover:text-cyan-400 transition"
        />
      )}
      <span
        className={`text-sm font-medium transition ${
          muted
            ? "text-neutral-400 group-hover:text-neutral-200"
            : "text-cyan-400/80 group-hover:text-cyan-400"
        }`}
      >
        {muted ? "Focus Mode" : "Enjoy your stay"}
      </span>
    </div>
  );
}
