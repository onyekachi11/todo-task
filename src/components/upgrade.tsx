import Cup from "../assets/cup.png";
const Upgrade = () => {
  return (
    <div className="bg-[#CDE53D] border border-[#9EB031] p-5 flex gap-4 items-center justify-between border">
      <img src={Cup} alt="Profile Image" />
      <div className="text-[#071D55]">
        <p className="font-bold ">Go Pro Upgrade Now</p>
      </div>
      <div className="border border-black p-4 bg-[#071D55] text-[#F2C94C]">
        <p>$1</p>
      </div>
    </div>
  );
};

export default Upgrade;
