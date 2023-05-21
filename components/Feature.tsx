import { RxAvatar } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaDatabase } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { SiTailwindcss, SiStripe } from "react-icons/si";

interface Props {
  logo: string;
  name: string;
  description: string;
}

const Feature: React.FC<Props> = ({ logo, name, description }) => {
  function icon(): any {
    if (logo === "nextjs") return <TbBrandNextjs className="text-5xl" />;
    if (logo === "react") return <FaReact className="text-5xl" />;
    if (logo === "database") return <FaDatabase className="text-5xl" />;
    if (logo === "tailwindcss") return <SiTailwindcss className="text-5xl" />;
    if (logo === "authentication")
      return <BsShieldLockFill className="text-5xl" />;
    return <SiStripe className="text-5xl" />;
  }

  return (
    <div className="border rounded-lg dark:border-secondary-light text-left p-5">
      {icon()}
      <div className="my-3 font-semibold">{name}</div>
      <div className="text-secondary-light">{description}</div>
    </div>
  );
};

export default Feature;
