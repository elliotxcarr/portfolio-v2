import Image from "next/image"
import {motion} from 'motion/react'
export default function Intro() {
  return (
    <div className="flex flex-row w-full h-140 px-15 justify-around pt-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col items-start justify-center"
      >
        <div className="text-6xl flex flex-col text-white font-semibold gap-2">
          Elliot Carr
          <div className=" h-1 bg-(--elliot-red)"></div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h1 className="text-2xl ">Junior Software Developer</h1>
          <h1 className="text-2xl">First Class BSc Hons in Digital Media</h1>
        </div>
        <div className="flex my-5 gap-2">
          <button className="p-2 outline-(--elliot-red) outline-1 text-lg text-white hover:cursor-pointer hover:bg-(--el-darker-red) hover:text-white duration-200">
            Contact Me
          </button>
          <button className="p-2 outline-1 outline-(--elliot-blue) text-white text-lg  hover:cursor-pointer hover:bg-(--el-darker-blue) hover:text-white duration-200">
            My CV
          </button>
        </div>
        <div className=" flex flex-row gap-4">
          <Image src='/insta.svg' alt="" width={30} height={30} className="text-white"></Image>
          <Image src='/linkedIn.svg' alt="" width={30} height={30} className="text-white"></Image>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Image src="/me.PNG" width={420} height={100} alt="" />
      </motion.div>
    </div>
  );
}