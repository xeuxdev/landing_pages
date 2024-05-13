import { Button } from "@/components/button";
import Header from "@/components/header";
import Skew from "@/components/skew";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section
          className="flex relative max-w-6xl mx-auto pt-[115px]"
          id="home"
        >
          {/* blur bg */}
          <div className="absolute top-20 left-48 w-[327px] h-[237px] -z-10">
            <div className="relative w-full h-full">
              <div className="absolute left-0 bottom-0 w-[299px] h-[157px] bg-[#FDE598] blur-[51.5773px] " />
              <div className="absolute left-0 top-0 w-[299px] h-[157px] bg-[#FF5555] blur-[51.5773px] " />
            </div>
          </div>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-24 top-10"
          >
            <path
              d="M40.9117 4.97056L25.8375 21.6408L45.3253 32.8369L24.8128 23.6519L20.1867 45.6456L22.5835 23.2988L0.236642 25.6956L22.2304 21.0695L13.0454 0.556969L24.2415 20.0448L40.9117 4.97056Z"
              fill="black"
            />
          </svg>

          {/* left  */}
          <div className="space-y-6 *:text-black max-w-[618px]">
            <h1 className="font-bold text-[64px] leading-[64px] capitalize ">
              make the best financial decisions
            </h1>
            <p className="font-medium text-lg opacity-50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <div className="flex items-center gap-5">
              <Button>
                Get Started
                <svg
                  width="25"
                  height="8"
                  viewBox="0 0 25 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button variant={"secondary"}>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                  <path
                    d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
                Watch Video
              </Button>
            </div>

            <div className="relative">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-[28rem] top-10"
              >
                <path
                  d="M40.9117 4.97056L25.8375 21.6408L45.3253 32.8369L24.8128 23.6519L20.1867 45.6456L22.5835 23.2988L0.236642 25.6956L22.2304 21.0695L13.0454 0.556969L24.2415 20.0448L40.9117 4.97056Z"
                  fill="black"
                />
              </svg>

              <Skew />
            </div>
          </div>
          {/* right */}
          <div>
            <svg
              width="656"
              height="726"
              viewBox="0 0 656 726"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-[15%] top-0"
            >
              <path
                d="M465.594 259.894C519.381 313.68 552.914 377.505 563.668 437.198C574.422 496.892 562.391 552.403 525.13 589.664C487.869 626.925 432.358 638.955 372.664 628.201C312.972 617.448 249.146 583.914 195.36 530.128C141.574 476.341 108.04 412.516 97.2866 352.824C86.5325 293.13 98.5633 237.619 135.824 200.358C173.085 163.097 228.596 151.066 288.29 161.82C347.983 172.574 411.808 206.107 465.594 259.894Z"
                stroke="black"
              />
              <path
                d="M497.861 227.627C551.648 281.413 585.181 345.238 595.934 404.931C606.688 464.625 594.658 520.136 557.397 557.397C520.136 594.658 464.625 606.689 404.931 595.935C345.238 585.181 281.413 551.648 227.627 497.861C173.84 444.075 140.307 380.25 129.553 320.557C118.799 260.863 130.83 205.352 168.091 168.091C205.352 130.83 260.863 118.8 320.557 129.554C380.25 140.307 444.075 173.84 497.861 227.627Z"
                stroke="black"
              />
              <path
                d="M530.128 195.36C583.914 249.147 617.448 312.972 628.201 372.664C638.955 432.359 626.925 487.869 589.664 525.13C552.403 562.391 496.892 574.422 437.198 563.668C377.505 552.914 313.68 519.381 259.894 465.594C206.107 411.808 172.574 347.983 161.82 288.29C151.066 228.596 163.097 173.085 200.358 135.824C237.619 98.5634 293.13 86.5327 352.824 97.2867C412.516 108.04 476.341 141.574 530.128 195.36Z"
                stroke="black"
              />
            </svg>
            {/* blur bg */}
            <div className="absolute top-[28rem] -right-[112px] w-[457px] h-[280px] -z-10">
              <div className="relative w-full h-full">
                <div className="absolute w-[331.46px] h-[178.57px] rotate(150deg) blur-[51.5773px] " />
                <div className="absolute w-[397.43px] h-[214.11px] bg-[#FF5555] rotate(150deg) blur-[51.5773px] " />
              </div>
            </div>

            <div className="absolute top-0 -right-6 w-[600px] h-[724px]">
              <div className="relative w-full h-full">
                <Image
                  src={"/phone-1.png"}
                  alt=""
                  width={572}
                  height={752}
                  className="absolute top-0 left-0 z-30"
                />
                <Image
                  src={"/phone-2.png"}
                  alt=""
                  width={572}
                  height={752}
                  className="absolute top-16 left-32 z-20"
                />
                <Image
                  src={"/phone-1.png"}
                  alt=""
                  width={572}
                  height={752}
                  className="absolute top-32 left-64 z-10"
                />
              </div>
            </div>

            <svg
              width="47"
              height="46"
              viewBox="0 0 47 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[22rem] top-[39rem]"
            >
              <path
                d="M34.7847 45.5693L22.584 26.6942L6.72559 42.6202L20.9067 25.1839L0.859633 15.023L21.8247 23.122L25.2934 0.916202L24.0695 23.3579L46.2603 19.7948L24.5387 25.5657L34.7847 45.5693Z"
                fill="black"
              />
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
