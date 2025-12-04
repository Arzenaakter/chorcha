import star from "@/asssets/star.png";
import appStore from "@/asssets/appStore.png";
import googlePlay from "@/asssets/googlePlay.png";
import MockupMobileView from "@/asssets/MockupMobileView.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-10 lg:px-20  py-10 lg:py-20 grid lg:grid-cols-12 gap-6 ">
      <div className="lg:col-span-6 lg:py-32 space-y-6">
        <h1 className="text-5xl font-bold ">চর্চা করো নিজের গতিতে</h1>
        <p>
          সিলেবাসের যেকোন টপিক থেকে প্রশ্ন খুঁজে প্র্যাকটিস করো, AI দিয়ে
          ব্যাখ্যা বুঝে নাও, আর মক টেস্ট দিয়ে নিজের প্রস্তুতি মাপো।
        </p>
        <div className="flex items-center gap-5">
          <button>
            <Image src={appStore} alt="app Store  download button" />
          </button>
          <button>
            <Image src={googlePlay} alt="google Play button" />
          </button>
        </div>
        <p className="flex items-center gap-2 mt-4">
          100k+ downloads | <Image src={star} alt="star icon" /> 4.6 Rating with
          over 8k Reviews
        </p>
      </div>
      <div className="lg:col-span-6 flex lg:justify-end ">
        <div className="py-10">
          <Image
            src={MockupMobileView}
            alt="Mock up Mobile
        View"
            className="w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
