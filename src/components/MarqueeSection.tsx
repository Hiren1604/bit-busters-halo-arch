
import { Star, Award, LayoutGrid, Home, Building, LightbulbIcon, Palette, Compass } from "lucide-react";

export default function MarqueeSection() {
  const items = [
    {
      text: "Sustainable Design",
      icon: <LightbulbIcon className="h-5 w-5" />
    },
    {
      text: "Modern Architecture",
      icon: <Building className="h-5 w-5" />
    },
    {
      text: "Luxury Spaces",
      icon: <Star className="h-5 w-5" />
    },
    {
      text: "Innovative Solutions",
      icon: <Compass className="h-5 w-5" />
    },
    {
      text: "Eco-friendly Building",
      icon: <Home className="h-5 w-5" />
    },
    {
      text: "Interior Excellence",
      icon: <Palette className="h-5 w-5" />
    },
    {
      text: "Commercial Design",
      icon: <LayoutGrid className="h-5 w-5" />
    },
    {
      text: "Award-Winning Projects",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <div className="py-4 bg-secondary/50 overflow-hidden border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="mx-8 text-lg font-medium flex items-center">
            <span className="flex items-center mr-2">
              {item.icon}
              <span className="mx-1">/</span>
            </span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
