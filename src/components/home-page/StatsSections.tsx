"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const StatsSections = () => {
  return (
    <div>
      <div className="py-10 bg-dark-red-200 lg:py-32 text-dark-red">
        <div className="flex flex-col justify-center lg:flex-row gap-16 lg:gap-44">
          <div className="flex flex-col items-center justify-center">
            <Counter counter={9} />
            <span className="font-medium">JOBS CREATED</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Counter counter={100} />
            <span className="font-medium">CLIENTS SERVED</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Counter counter={30} />
            <span className="font-medium">EMPLOYEES</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsSections;

function Counter({ counter }: { counter: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 200,
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(counter);
    }
  }, [motionValue, isInView, counter]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Intl.NumberFormat("en-US").format(latest.toFixed(0))}+`;
        }
      }),
    [springValue]
  );

  return (
    <motion.span
      transition={{ type: "spring", duration: 0.8 }}
      className="block text-6xl font-roboto"
      ref={ref}
    >
      0
    </motion.span>
  );
}
