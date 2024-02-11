"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-90 ">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 py-14 lg:py-28">
        {/* Content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-white text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Your Financial Navigator for Busines.
          </h2>
          <p className="text-gray-20 text-lg text-center lg:text-left mb-6">
            Effortlessly manage family finances with Kauntabook. Set allowances,
            track spending, and empower your loved ones with smart money
            management tools.
          </p>
          <div className="flex justify-center flex-no-wrap gap-6">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              link="https://drive.google.com/file/d/1fhuwHasLryo05RNEOoqzxe-vxqEQIKAg/view?usp=drivesdk"
              variant="btn_dark_green_outline"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              link="https://drive.google.com/file/d/1fhuwHasLryo05RNEOoqzxe-vxqEQIKAg/view?usp=drivesdk"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <Image
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src="/images/hero/hero-bg.png"
            alt="phone"
            width={350}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import Image from "next/image";
// import { Fade } from "react-awesome-reveal";
// import Button from "./Button";

// export default function Hero() {
//   return (
//     <section id="getapp-section" className="relative">
//       <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
//         {/* LEFT  */}
//         <Fade cascade direction="left" triggerOnce>
//           <div className="flex flex-1 flex-col items-center lg:items-start">
//             <h2 className="text-green-50 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
//               Your Financial Navigator for Families.
//             </h2>
//             <p className="text-gray-20 text-lg text-center lg:text-left mb-6">
//               Effortlessly manage family finances with Kauntabook. Set
//               allowances, track spending, and empower your loved ones with smart
//               money management tools.
//             </p>
//             <div className="flex justify-center flex-wrap gap-6">
//               <button
//                 type="button"
//                 className="btn btn-purple hover:bg-brown-50 hover:text-black"
//               >
//                 Get it on Chrome
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-white hover:bg-green-50 hover:text-white"
//               >
//                 Get it on Firefox
//               </button>
{
  /* <Button
                type="button"
                title="App Store"
                icon="/apple.svg"
                link="https://drive.google.com/file/d/1fhuwHasLryo05RNEOoqzxe-vxqEQIKAg/view?usp=drivesdk"
                variant="btn_dark_green_outline"
                full
              />
              <Button
                type="button"
                title="Play Store"
                icon="/android.svg"
                link="https://drive.google.com/file/d/1fhuwHasLryo05RNEOoqzxe-vxqEQIKAg/view?usp=drivesdk"
                variant="btn_dark_green_outline"
                full
              /> */
}
//             </div>
//           </div>
//         </Fade>
//         {/* RIGHT  */}
//         <Fade cascade direction="right" triggerOnce>
//           <div className="flex flex-auto items-center justify-end">
//             <Image src="/phones.png" alt="phone" width={550} height={870} />
//           </div>
//         </Fade>
//       </div>
//     </section>
//   );
// }
