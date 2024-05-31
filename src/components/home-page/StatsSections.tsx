"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const StatsSections = () => {
  return (
    <div>
      <div className="py-10 bg-dark-red-200 lg:py-32 text-dark-red">
        <div className="flex flex-col justify-center lg:flex-row gap-10 lg:gap-40">
          <div className="flex flex-col items-center justify-center">
            <Counter counter={2312} noPlus />
            <span className="font-medium text-sm md:text-md">JOBS CREATED</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Counter counter={50} />
            <span className="font-medium text-sm md:text-md">CLIENTS SERVED</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Counter counter={50} />
            <span className="font-medium text-sm md:text-md">EMPLOYEES</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsSections;

function Counter({ counter, noPlus = false }: { counter: number, noPlus?:boolean }) {
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
          ref.current.textContent = `${Intl.NumberFormat("en-US").format(latest.toFixed(0))}${!noPlus?"+":""}`;
        }
      }),
    [springValue]
  );

  return (
    <motion.span
      transition={{ type: "spring", duration: 0.8 }}
      className="block text-[47px] md:text-[69px] font-roboto"
      ref={ref}
    >
      0
    </motion.span>
  );
}
