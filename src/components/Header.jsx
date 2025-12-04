import Image from "next/image";
import logo from "@/asssets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto px-10 lg:px-20 py-2 flex justify-between items-center gap-10 ">
        <div>
          <Image src={logo} alt="" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 text-base">
            <li>ফিচারসমূহ</li>
            <li>চর্চা সাফল্য</li>
            <li>সাবস্ক্রিপশন</li>
          </ul>
        </div>
        <button className="bg-[#017A47] rounded-lg py-2 px-4 text-base ">
          সাইন আপ করো
        </button>
      </div>
    </div>
  );
};

export default Header;
