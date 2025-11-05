import Title from "./Title";
import Marquee from "react-fast-marquee";

// Example phone companies
const people = [
  {
    id: 1,
    name: "Elon Musk",
    image:
      "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg",
  },
  {
    id: 2,
    name: "Bill Gates",
    image:
      "https://yt3.googleusercontent.com/Lkdq6f24FLF4U0AnMrGXQ-qOfhCdF-SMblNC5rOtVvBGRT4SkUDBt_Gb1Wg5sICw6SSHl51INUk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    name: "Sundar Pichai",
    image:
      "https://s7d1.scene7.com/is/image/wbcollab/sundar_pichai_google_ceo-1?qlt=75&resMode=sharp2",
  },
  {
    id: 4,
    name: "Mark Zuckerberg",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg",
  },
  {
    id: 5,
    name: "Jeff Bezos",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/67531eb2b5f7c9e191f632d7/0x0.jpg?format=jpg&crop=711,713,x316,y125,safe&height=416&width=416&fit=bounds",
  },
  {
    id: 6,
    name: "Tim Cook",
    image:
      "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
  },
  {
    id: 7,
    name: "Larry Page",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-83414114.jpg",
  },
  {
    id: 8,
    name: "Steve Jobs",
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png?quality=90&strip=all&crop=0,13.457556935818,100,73.084886128364",
  },
];

const MarqueeCard = () => {
  return (
    <div>
      <Title title={"Our happy clients"} />
      <div className="overflow-hidden mb-16 max-w-11/12 mx-auto">
        <div className="flex gap-6 ">
          <Marquee pauseOnHover={true} speed={150}>
            {" "}
            {people.map((company) => (
              <div
                key={company.id}
                className="flex flex-col items-center rounded-md justify-center  min-w-[200px] bg-white  p-4"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="h-20 object-cover mb-2 rounded-md "
                />
                <p className="text-sm font-semibold text-gray-700">
                  {company.name}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeCard;
