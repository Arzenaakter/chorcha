import rightArrow from "@/asssets/rightArrow.png";
import wkPoint from "@/asssets/wkPoint.png";
import goldLig from "@/asssets/goldLig.png";
import question from "@/asssets/question.png";
import bangla from "@/asssets/bangla.png";
import per50 from "@/asssets/50.png";
import per14 from "@/asssets/per14.png";
import green50 from "@/asssets/green50.png";
import Image from "next/image";
import GridView from "./GridView";

const ReportSection = () => {
  return (
    <div className="bg-[#1C1C1C] py-10 lg:py-20">
      <div className="container mx-auto px-10 lg:px-20   ">
        <div className="space-y-6  text-center">
          {" "}
          <h1 className="text-5xl font-bold ">
            চর্চার সাথে পড়াশোনা হবে স্মার্ট, ফান ও সহজ
          </h1>
          <p className="lg:px-44 text-xl">
            চর্চাতে আছে মক টেস্ট, ১০ লক্ষ প্রশ্নের ডাটাবেজ, দেশব্যাপী লিডারবোর্ড
            যা তোমার পড়াশোনা কে করবে প্রতিযোগী ও যাচাই এর সুযোগ
          </p>
        </div>
        {/* grid view */}
        <div>
          <GridView />
        </div>

        <div className="flex justify-center mt-6">
          {" "}
          <button className="bg-[#017A47] rounded-lg py-4 px-4 text-base flex items-center gap-2 justify-center">
            সাইন আপ করো <Image src={rightArrow} alt="right arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
