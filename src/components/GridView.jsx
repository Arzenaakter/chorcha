import Image from "next/image";
import wkPoint from "@/asssets/wkPoint.png";
import goldLig from "@/asssets/goldLig.png";
import question from "@/asssets/question.png";
import bangla from "@/asssets/bangla.png";
import per50 from "@/asssets/50.png";
import per14 from "@/asssets/per14.png";
import green50 from "@/asssets/green50.png";
import progress from "@/asssets/progress.png";

const GridView = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
      <div className="grid  lg:grid-cols-2 gap-5 ">
        <Image src={progress} alt="" />
        <Image src={question} alt="" />
        <Image src={question} alt="" />
        <Image src={question} alt="" />
      </div>
      <div>
        <Image src={goldLig} alt="" />
      </div>
    </div>
  );
};

export default GridView;
