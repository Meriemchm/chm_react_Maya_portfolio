import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../assets/profile.jpg";
import { HiOutlineMail } from "react-icons/hi";

export const Navlink = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "story",
  },
  {
    id: 7,
    link: "routine",
  },
  {
    id: 3,
    link: "achievements",
  },
  {
    id: 4,
    link: "team",
  },
  {
    id: 5,
    link: "gallery",
  },
  {
    id: 6,
    link: "contact",
  },
];

export const links = [
  {
    id: 1,
    mobile: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "",
  },
  {
    id: 2,
    mobile: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "",
  },
  {
    id: 3,
    mobile: (
      <>
        <HiOutlineMail size={30} />
      </>
    ),
    href: "",
  },
];

export const achievementsData = [
  {
    id: 1,
    src: "",
    title: "",
    style: "bg-four",
    textStyle: "text-second",
  },
  {
    id: 2,
    src: "",
    title: "",
    style: "bg-primary",
    textStyle: "text-second",
  },
  {
    id: 3,
    src: "",
    title: "",
    style: "bg-four",
    textStyle: "text-second",
  },
];

export const media = [
  { type: "image", src: profile },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: profile },
  { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
  { type: "image", src: profile },
];

export const formItem = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 4,
    name: "message",
    placeholder: "Message",
    categorie: "textarea",
  },
];

export const copyrightlink = [
  {
    id: 1,
    mobile: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/meriem-chami-361213283/",
  },
  {
    id: 2,
    mobile: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Meriemchm",
  },
];
