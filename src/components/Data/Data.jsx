import insta from "../../assets/Icons/insta.svg";
import mail from "../../assets/Icons/mail.svg";
import reward from "../../assets/Icons/reward.svg";
import reward2 from "../../assets/Icons/reward2.svg";
import hoopRoutine from "../../assets/Images/Hoop.jpg";

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
        <img src={insta} alt="insta" />
      </>
    ),
    href: "https://www.instagram.com/maya_gymnastic_?igsh=ZjlwZWhsc29wMDhp&utm_source=qr",
  },
  {
    id: 2,
    mobile: (
      <>
        <img src={mail} alt="mail" />
      </>
    ),
    href: "mailto:Adel.Elomarabi@gmail.com",
  },
];

export const routineData = [
  { id: 1, bgColor: "bg-purpleSix", name: "HOOP", src: hoopRoutine },
  { id: 2, bgColor: "bg-sevenyellow", name: "BALL", src: hoopRoutine },
  { id: 3, bgColor: "bg-eightBlue", name: "RIBBON", src: hoopRoutine },
];

export const achievementsData = [
  {
    id: 1,
    src: reward2,
    year: "2024",
    description: (
      <span>
        <span className="font-bold text-[#5D3FD3]">3rd place</span> in solo
        routine at an international competition in{" "}
        <span className="font-bold">Georgia</span>.
      </span>
    ),
  },
  {
    id: 2,
    src: reward,
    year: "2024",
    description: (
      <span>
        <span className="font-bold text-[#5D3FD3]">1st place</span> in group
        routine at an international competition in{" "}
        <span className="font-bold">Georgia</span>.
      </span>
    ),
  },
];

// Chargement dynamique des images
const imageModules = import.meta.glob("../../assets/Photos/*.{jpg,jpeg,png}");
const imageEntries = Object.entries(imageModules).sort((a, b) =>
  a[0].localeCompare(b[0])
);

export const loadImageByIndex = async (index) => {
  if (index < imageEntries.length) {
    const [path, importFn] = imageEntries[index];
    const img = await importFn();
    return {
      type: "image",
      src: img.default,
    };
  }
  return null;
};

export const totalImages = imageEntries.length;

// Chargement dynamique des vidéos (.mp4)
const videoModules = import.meta.glob("../../assets/Video/*.mp4");
const videoEntries = Object.entries(videoModules).sort((a, b) =>
  a[0].localeCompare(b[0])
);

// Chargement dynamique des miniatures (.jpg avec même nom)
const thumbnailModules = import.meta.glob("../../assets/Video/*.jpg", {
  eager: true,
  import: "default",
});

export const loadVideoByIndex = async (index) => {
  if (index < videoEntries.length) {
    const [path, importFn] = videoEntries[index];
    const video = await importFn();

    // le chemin de la miniature correspondante
    const baseName = path.split("/").pop().replace(".mp4", ""); 

    const thumbnailKey = Object.keys(thumbnailModules).find((key) =>
      key.includes(`${baseName}.jpg`)
    );

    const thumbnail = thumbnailKey ? thumbnailModules[thumbnailKey] : null;

    return {
      type: "video",
      src: video.default,
      poster: thumbnail, 
    };
  }
  return null;
};

export const totalVideos = videoEntries.length;

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
