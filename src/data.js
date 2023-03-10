// import icons
import { GrFacebookOption } from "react-icons/gr";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
} from "react-icons/io";

export const navData = {
  items: [
    { href: "/", name: "Home" },
    { href: "/", name: "About" },
    { href: "/", name: "Gallery" },
    { href: "/", name: "Projects" },
    { href: "/", name: "Contact" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption className="w-[25px] h-[25px]" /> },
  { href: "/", icon: <IoLogoInstagram className="w-[25px] h-[25px]" /> },
  { href: "/", icon: <IoLogoPinterest className="w-[25px] h-[25px]" /> },
  { href: "/", icon: <IoLogoTwitter className="w-[25px] h-[25px]" /> },
];

export const heroData = {
  subtitle: "Tampere Arena Libeskind",
  btnText: "View Project",
};
