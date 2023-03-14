import QuoteImg from "./assets/Testimonials/comma.png";

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
    { href: "/", name: "Projects" },
    { href: "/", name: "About" },
    { href: "/", name: "Team" },
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

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Incredible as always. This guys have excellent taste,modeling, texturing & rendering skills. The design fits in with what I would perceive as being Icelandic, the high wooden roof design and linear slatted interior elements and colours.",
    name: "- Mark Eganberg",
  },
  {
    quoteImg: QuoteImg,
    message:
      "Incredible as always. This guys have excellent taste,modeling, texturing & rendering skills. The design fits in with what I would perceive as being Icelandic, the high wooden roof design and linear slatted interior elements and colours.",
    name: "- Jenil Patel",
  },
  {
    quoteImg: QuoteImg,
    message:
      "Incredible as always. This guys have excellent taste,modeling, texturing & rendering skills. The design fits in with what I would perceive as being Icelandic, the high wooden roof design and linear slatted interior elements and colours.",
    name: "- Douglas Hane",
  },
];
