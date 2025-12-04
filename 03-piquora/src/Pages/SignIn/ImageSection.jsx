import React from "react";
import BgImg from "../../assets/iamges/SigninScreen.png";
import CheckIcon from "../../assets/icon/check.png"

const ImageSection = () => {
  const tags =[
    {
      title: 'Intelligent Matchmaking',
      subTitle: 'Get paired with compatible users using smart algorithms.'
    },
    {
      title: 'Icebreaker Quests',
      subTitle: 'Fun questions to spark meaningful conversations.'
    },
    {
      title: 'Verified Profiles',
      subTitle: 'Connect with users who are identity-verified for safety.'
    },
    {
      title: 'Priority Filtering',
      subTitle: 'Quickly find matches based on what matters most to you'
    },
    {
      title: 'Real-Time Chat',
      subTitle: 'Enjoy smooth, instant conversations without delays.'
    }
    

  ]
  return (
    <div
    className=" lg:flex hidden
    relative overflow-hidden
    bg-[#1C1C1C] 
     md:h-[986px] h-[840px] w-full rounded-2xl"
    
    >
      {/* Top-right radial glow */}
      <div
      className="
      pointer-events-none
      absolute top-0 right-0
      w-[265px] h-[265px]
      bg-[radial-gradient(circle_at_top_right,rgba(52,164,140,0.55)_0%,transparent_70%)]"
      />
      {/* bottom img */}
      <div style={{ backgroundImage: `url(${BgImg})` }} className="absolute left-0 w-full h-full bg-no-repeat bg-contain bg-bottom "/>

      {/* your content here */}
      <div className="flex flex-col gap-8 p-6  md:w-2/3 lg:pt-15 lg:pl-15 text-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal ">Love with <span className="font-bold">Confidence</span></h1>
          <h6 className="text-sm font-normal text-white/70">Our Commitment to your privacy, with 7 days free trial, you get.</h6>
        </div>
        <div className="flex flex-col gap-5">
          {tags.map((tag, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <img src={CheckIcon} alt="" className="" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-xl">{tag.title}</h3>
                <p className="text-sm text-white/70">{tag.subTitle}</p>
              </div>
             </div>
            ))}

        </div>
      </div>
    </div>

  );
};

export default ImageSection;
