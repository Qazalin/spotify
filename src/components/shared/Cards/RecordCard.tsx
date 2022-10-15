import Image from "next/image";
import { useState } from "react";

export const RecordCard: React.FC<{
  title: string;
  subtitle: string;
  imgSrc: string;
  href: string;
  onPlay: () => void;
  rounded: boolean;
}> = ({ title, imgSrc, subtitle, href, rounded, onPlay }) => {
  const [showPlay, setShowPlay] = useState(false);
  return (
    <a href={href} className="hover:no-underline">
      <div
        className="bg-zinc-800 p-2 rounded-md bg-opacity-25 hover:bg-opacity-80 transition-all duration-300 cursor-pointer px-3 row-span-1 col-span-1 relative max-w-[10rem]"
        onMouseEnter={() => setShowPlay(true)}
        onMouseLeave={() => setShowPlay(false)}
      >
        <div className="relative">
          <Image
            src={imgSrc}
            width={200}
            height={200}
            alt="cardImage"
            className={`${rounded ? "rounded-full" : "rounded-none"} mb-3`}
          />
          <div
            className={`bg-green-400 rounded-full w-8 h-8 flex justify-center items-center absolute -bottom-2 -right-1 hover:scale-105 transition-all cursor-default shadow-lg shadow-zinc-900 ${
              showPlay ? "opacity-100" : "opacity-0"
            }`}
            onClick={onPlay}
          >
            <PlayBtn />
          </div>
        </div>

        <h3 className="text-md font-[600]">{title}</h3>
        <p className="text-sm capitalize text-zinc-400 mt-1">{subtitle}</p>
      </div>
    </a>
  );
};

const PlayBtn = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className=""
  >
    <g
      id="media-player"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g className="fill-black" fillRule="nonzero">
        <path
          d="M6,5.91163459 C6,5.75685126 6.03697696,5.60461753 6.10744507,5.46928446 C6.33662312,5.02915104 6.85711733,4.8703993 7.27000143,5.11470253 L17.5597696,11.2031511 C17.6995651,11.285868 17.8148031,11.4087114 17.8923989,11.5577331 C18.1215769,11.9978665 17.9726537,12.552712 17.5597696,12.7970152 L7.27000143,18.8854638 C7.14304703,18.9605827 7.00023832,19 6.85503786,19 C6.38281349,19 6,18.5919218 6,18.0885318 L6,5.91163459 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
);
