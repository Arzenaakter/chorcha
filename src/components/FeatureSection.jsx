import MockupMobileView from "@/asssets/MockupMobileView.png";
import Image from "next/image";
const featureData = [
  {
    id: "01",
    title: "কাস্টম মক টেস্ট",
    des: "নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ",
    imgLink: MockupMobileView,
  },
  {
    id: "02",
    title: "বিগত সকল প্রশ্ন ব্যাংক",
    des: "নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ",
    imgLink: MockupMobileView,
  },
  {
    id: "03",
    title: "কাস্টম মক টেস্ট",
    des: "নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ",
    imgLink: MockupMobileView,
  },
  {
    id: "04",
    title: "কাস্টম মক টেস্ট",
    des: "নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ",
    imgLink: MockupMobileView,
  },
];

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-10 lg:px-20  py-20 ">
      <div className="space-y-6  text-center">
        {" "}
        <h1 className="text-5xl font-bold ">চর্চার ফিচারসমূহ</h1>
        <p className="lg:px-44 text-xl">
          চর্চাতে আছে মক টেস্ট, ১০ লক্ষ প্রশ্নের ডাটাবেজ, দেশব্যাপী লিডারবোর্ড
          যা তোমার পড়াশোনা কে করবে প্রতিযোগী ও যাচাই এর সুযোগ
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        {featureData.map((item, index) => (
          <div key={index} className=" p-6  ">
            <h5 className="font-bold">{item.title}</h5>
            <p className="py-10">{item.des}</p>
            <Image src={item.imgLink} alt="" className=" w-[300px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
