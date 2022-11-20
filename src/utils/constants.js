import { RiHome6Fill } from "react-icons/ri";
import { RiCodeBoxFill } from "react-icons/ri";
import { RiLiveFill } from "react-icons/ri";
import { SiApplemusic } from "react-icons/si";
import { SiApplepodcasts } from "react-icons/si";
import { SiBitcoinsv } from "react-icons/si";
import { IoSchool } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { MdSportsBaseball } from "react-icons/md";
import { MdTheaterComedy } from "react-icons/md";
import { TbHanger } from "react-icons/tb";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { BiDumbbell } from "react-icons/bi";

export const categories = [
  { name: "New", icon: <RiHome6Fill /> },
  { name: "Coding", icon: <RiCodeBoxFill /> },
  { name: "Music", icon: <SiApplemusic /> },
  { name: "Education", icon: <IoSchool /> },
  { name: "Podcast", icon: <SiApplepodcasts /> },
  { name: "Movie", icon: <MdLocalMovies /> },
  { name: "Gaming", icon: <IoGameController /> },
  { name: "Live", icon: <RiLiveFill /> },
  { name: "Sport", icon: <MdSportsBaseball /> },
  { name: "Fashion", icon: <TbHanger /> },
  { name: "Beauty", icon: <BsFillEmojiHeartEyesFill /> },
  { name: "Comedy", icon: <MdTheaterComedy /> },
  { name: "Gym", icon: <BiDumbbell /> },
  { name: "Crypto", icon: <SiBitcoinsv /> },
];
