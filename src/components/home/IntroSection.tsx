'use client'

import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function IntroSection() {
  const refs = useRef([]);
  const container = useRef(null);

  const phrase = "We think the life changing benefits of strength-training can be achieved at any stage of life. We have personal trainers in Stoke Newington who'll help you stay accountable, motivated and strong you're in the right place.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 0.7 * window.innerHeight,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    const body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<span key={word + "_" + i} className="inline-block mr-2">{letters}</span>)
    })
    return body
  }

  const splitLetters = (word) => {
    const letters = []
    word.split("").forEach((letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}} className="opacity-20">{letter}</span>)
    })
    return letters;
  }

  return (
    <section className="px-6 lg:px-8">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-16">
        <div className="col-span-4 md:col-span-8 lg:col-span-10">
          <h2 ref={container} className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {splitWords(phrase)}
          </h2>
        </div>
        <div className="col-span-4 md:col-span-6 lg:col-span-6 lg:col-start-5">
          <p className="text-lg text-gray-600 leading-relaxed">
            Every journey starts with a single step. Whether you're beginning your fitness journey or looking to break through plateaus, we're here to guide you with expert knowledge, personalized programs, and unwavering support.
          </p>
        </div>
      </div>
    </section>
  );
}