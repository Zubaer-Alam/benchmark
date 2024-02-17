
import { motion } from "framer-motion";

const SquishyCard = ({color}) => {
    return (
      <section className="bg-neutral-900 px-4 py-12">
        <div className="mx-auto w-fit">
        <motion.div
        whileHover="hover"
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        variants={{
          hover: {
            scale: 1.05,
          },
        }}
        className={`relative w-80 shrink-0 overflow-hidden rounded-xl bg-[${color}] p-8`}
      >
        <div className="relative z-10 text-white">
          <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
            Service 1
          </span>
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{
              hover: {
                scale: 1,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
          >
        asd
            <br />
            asdsads
          </motion.span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
          </p>
        </div>
        <motion.svg
        width="320"
        height="384"
        viewBox="0 0 320 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
        variants={{
          hover: {
            scale: 1.5,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <motion.circle
          variants={{
            hover: {
              scaleY: 0.5,
              y: -25,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          cx="160.5"
          cy="114.5"
          r="101.5"
          fill="#262626"
        />
        <motion.ellipse
          variants={{
            hover: {
              scaleY: 2.25,
              y: -25,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          cx="160.5"
          cy="265.5"
          rx="101.5"
          ry="43.5"
          fill="#262626"
        />
      </motion.svg>
      </motion.div>
        </div>
      </section>
    );
  };
  

  
 

export default SquishyCard;