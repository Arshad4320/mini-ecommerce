import Title from "./Title";
import Marquee from "react-fast-marquee";

// Example phone companies
const companies = [
  {
    id: 1,
    name: "Samsung",
    image:
      "https://e7.pngegg.com/pngimages/752/825/png-clipart-samsung-galaxy-e7-samsung-galaxy-j2-samsung-galaxy-a8-a8-logo-samsung-blue-electronics-thumbnail.png",
  },
  {
    id: 2,
    name: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 3,
    name: "Xiaomi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  },
  {
    id: 4,
    name: "Motorola",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCiR6dtcVHc4_WzLJlXeol7-pvOQKHQ3yxQ&s",
  },
  {
    id: 5,
    name: "Oppo",
    image: "https://crystalpng.com/wp-content/uploads/2025/05/oppo-logo.png",
  },
  {
    id: 6,
    name: "Vivo",
    image:
      "https://images.seeklogo.com/logo-png/45/1/vivo-vivo-logo-png_seeklogo-453184.png",
  },
  {
    id: 7,
    name: "OnePlus",
    image:
      "https://e7.pngegg.com/pngimages/815/372/png-clipart-oneplus-6-oneplus-5t-oneplus-2-oneplus-one-text-trademark-thumbnail.png",
  },
  {
    id: 8,
    name: "Samsung",
    image:
      "https://e7.pngegg.com/pngimages/752/825/png-clipart-samsung-galaxy-e7-samsung-galaxy-j2-samsung-galaxy-a8-a8-logo-samsung-blue-electronics-thumbnail.png",
  },
  {
    id: 9,
    name: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 10,
    name: "Xiaomi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
  },
  {
    id: 11,
    name: "Motorola",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCiR6dtcVHc4_WzLJlXeol7-pvOQKHQ3yxQ&s",
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
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex flex-col items-center justify-center min-w-[140px] gap-4 bg-white shadow-lg rounded-xl p-4"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="h-12 object-contain mb-2"
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
