import React, { useEffect, useState } from "react";
import "./FeedbackLoopAnimation.css";

export default function FeedbackLoopAnimation() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const captions = [
    "Step 1 – Initially, the algorithm shows everyone a similar mix of ads. Any differences are small and mostly random.",
    "Step 2 – The algorithm notices weak correlations between demographics and ad clicks, and begins nudging groups toward certain ad types.",
    "Step 3 – A positive feedback loop forms. Each demographic ends up clustered around a narrow slice of ads, reinforcing the algorithm’s biased assumptions.",
  ];

  useEffect(() => {
    if (!playing) return;

    if (step >= 2) {
      setPlaying(false);
      return;
    }

    const t = setTimeout(() => setStep((s) => Math.min(2, s + 1)), 3500);
    return () => clearTimeout(t);
  }, [playing, step]);

  const prev = () => {
    setPlaying(false);
    setStep((s) => Math.max(0, s - 1));
  };

  const next = () => {
    setPlaying(false);
    setStep((s) => Math.min(2, s + 1));
  };

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    setStep(0);
    setPlaying(true);
  };

  return (
    <div className="fb-loop-module">
      <div className={`fb-loop-sim step-${step}`}>
        <div className="fb-loop-ads left">
          <div className="fb-loop-ad fb-ad-1">
            <strong>Ad type 1</strong>
            <span>Education / training</span>
          </div>
          <div className="fb-loop-ad fb-ad-2">
            <strong>Ad type 2</strong>
            <span>Low-wage jobs</span>
          </div>
        </div>

        <div className="fb-loop-ads right">
          <div className="fb-loop-ad fb-ad-3">
            <strong>Ad type 3</strong>
            <span>High-paying jobs</span>
          </div>
          <div className="fb-loop-ad fb-ad-4">
            <strong>Ad type 4</strong>
            <span>Luxury goods</span>
          </div>
        </div>

        <div className="fb-loop-people-overlay">
          <div className="fb-loop-person fb-p-1 fb-demo-a">A</div>
          <div className="fb-loop-person fb-p-2 fb-demo-b">B</div>
          <div className="fb-loop-person fb-p-3 fb-demo-c">C</div>

          <div className="fb-loop-person fb-p-4 fb-demo-a">A</div>
          <div className="fb-loop-person fb-p-5 fb-demo-b">B</div>
          <div className="fb-loop-person fb-p-6 fb-demo-d">D</div>

          <div className="fb-loop-person fb-p-7 fb-demo-c">C</div>
          <div className="fb-loop-person fb-p-8 fb-demo-d">D</div>
          <div className="fb-loop-person fb-p-9 fb-demo-b">B</div>

          <div className="fb-loop-person fb-p-10 fb-demo-a">A</div>
        </div>
      </div>

      <div className="fb-loop-controls">
        <div className="fb-loop-btnrow">
          <button onClick={prev} disabled={step === 0}>
            ◀ Back
          </button>
          <button onClick={next} disabled={step === 2}>
            Next ▶
          </button>
          <button className="play" onClick={togglePlay}>
            {playing ? "⏸ Pause" : "▶ Play story"}
          </button>
        </div>
        <p className="fb-loop-caption">{captions[step]}</p>
      </div>
    </div>
  );
}
