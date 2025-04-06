import { useState } from "react";

interface PropTypes {
  data: {
    title: string;
    highlightedText: string;
    tag: string;
    desc: string;
    lightImg: string;
    darkImg: string;
  };
}

const Hero = ({ data }: PropTypes) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-15 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <div className="flex justify-center">
                <h4 className="mb-5 py-1 text-sm font-semibold text-violet-950 bg-violet-200 rounded-xl text-center w-64">
                  {data?.tag}
                </h4>
              </div>

              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero text-center">
                {data?.title} {"   "}
                <span className="bg-gradient-to-r from-[#0eaffc] to-[#7612e5] bg-clip-text text-transparent">
                  {data?.highlightedText}
                </span>
              </h1>
              <p className="text-center text-secondary">{data?.desc}</p>

              <div className="mt-5 flex flex-wrap gap-5 justify-center">
                <a
                  href="/#portafolio"
                  aria-label="get started button"
                  className="
                    rounded-full 
                    bg-gradient-to-r 
                    from-[#0eaffc] 
                    to-[#7612e5] 
                    px-7.5 
                    py-2.5 
                    text-white 
                    transition-all 
                    duration-500 
                    ease-in-out 
                    hover:scale-105">
                  ¡Saber más!
                </a>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <img
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                  loading="lazy"
                  decoding="async"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <img
                    className="shadow-solid-l dark:hidden"
                    src={data?.lightImg}
                    alt="Hero"
                    width={660}
                    height={418}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="hidden shadow-solid-l dark:block"
                    src={data?.darkImg}
                    alt="Hero"
                    width={660}
                    height={418}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
