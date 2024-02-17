import Container from "../../components/ui/Container";
import useScale from "../../hooks/useScale";
import { motion } from "framer-motion"
const Services = () => {

  const { componentRef, scaleValues } = useScale();

  return (
    <Container className=" my-20">
      <div>
        <div className="text-center py-10">
          <h1 className="text-6xl font-semibold text-white">
            <span className="text-gradient bg-gradient-to-r from-[#ffa31d] to-[#ed1c24] bg-clip-text text-transparent">Services</span> that we provide.
          </h1>
          <p className="text-2xl  max-w-[80ch] mx-auto my-5 text-gray-300">
            We provide various computer repair services and solutions for our
            new and regular customers. Feel free to find out more below.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[20px] ">
          <motion.div
            ref={componentRef}
            style={{
              scale: scaleValues,
              opacity: scaleValues,
            }}
            className=" bg-blend-overlay bg-[#00000067]  bg-[url('/images/portfolio_2.jpeg')] bg-cover bg-no-repeat rounded-md h-[448px] col-span-12 lg:col-span-12 p-5"
          >
            <h3 className="text-[30px] font-semibold text-white">Battery Replacemant</h3>
            <h2 className="text-[36px] mt-[60px] w-[60%] text-gray-100">
              Get back to 100% battery health. With 6 month replacement warranty.
            </h2>
          </motion.div>

          <motion.div
            ref={componentRef}
            style={{
              scale: scaleValues,
              opacity: scaleValues,
            }}
            className="bg-[url('/images/portfolio_2.jpeg')] bg-cover bg-blend-overlay bg-[#00000067] bg-no-repeat bg-center rounded-md h-[448px] col-span-12 lg:col-span-5 p-5"
          >
            <h3 className="text-[30px] font-semibold text-white ">Chip Replacement </h3>
            <h2 className="text-[36px] mt-[60px] text-gray-100">
              There is no need to replace the motherboard for a tiny little dead chip
              set.
            </h2>
          </motion.div>

          <motion.div
            ref={componentRef}
            style={{
              scale: scaleValues,
              opacity: scaleValues,
            }}
            className="bg-[#00000067] bg-[url('/images/portfolio_2.jpeg')] bg-cover bg-blend-overlay rounded-md h-[448px] col-span-12 lg:col-span-7 p-5"
          >
            <h3 className="text-[30px] font-semibold text-white">Data Recovery</h3>
            <h2 className="text-[36px] mt-[60px] text-gray-100">
              Lost your old memories ? Lost your project? Don’t worry, We will recover
              it for you
            </h2>
          </motion.div>


          <motion.div
            ref={componentRef}
            style={{
              scale: scaleValues,
              opacity: scaleValues,
            }}
            className="bg-[#00000067] bg-[url('/images/portfolio_2.jpeg')] bg-cover bg-blend-overlay    bg-no-repeat rounded-md h-[448px] col-span-12 lg:col-span-12 p-5"
          >
            <h3 className="text-[30px] font-semibold text-white">Storage Replacement</h3>
            <h2 className="text-[36px] mt-[60px] w-[60%] text-gray-100">
              Get rid of your slow HDD, upgrade to super fast SSD with ease
            </h2>
          </motion.div>

          <div className="bg-[#00000067] rounded-md h-[448px] col-span-12 lg:col-span-4 p-5">
            <h1 className="text-[80px] font-semibold text-white">
              Same Day <span className="text-[#ed1c24]">Delivery</span>
            </h1>
          </div>
          <div className="bg-[#00000067] rounded-md h-[448px] col-span-12 lg:col-span-4 p-5">
            <h1 className="text-[80px] font-semibold">
              <span className="text-[#ed1c24]">Free</span>
              <br />
              <span className=" text-white">
                Diagno
                <br />
                stics
              </span>
            </h1>
          </div>
          <div className="bg-[#00000067] rounded-md h-[448px] col-span-12 lg:col-span-4 p-5">
            <h1 className="text-[80px] font-semibold textr text-white">
              Remote
              <br />
              <span className="text-[#ed1c24]">Support</span>
              <br />
              Service
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
