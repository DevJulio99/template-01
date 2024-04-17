import { FaBullhorn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
import { SiMicrostrategy } from "react-icons/si";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { BiSolidFileFind } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import { RiFileChartFill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniComputerDesktop } from "react-icons/hi2";

export const icons = {
    bullhorn: FaBullhorn,
    mapMarker: FaMapMarkerAlt,
    pen: FaPenAlt,
    backupRestore: MdOutlineSettingsBackupRestore,
    mailOpen: HiOutlineMailOpen,
    search: CiSearch,
    mail: MdEmail,
    desktop: FaDesktop,
    microStrategy: SiMicrostrategy,
    headsetMic: MdOutlineHeadsetMic,
    fileFind: BiSolidFileFind,
    diamondOutline: IoDiamondOutline,
    fileChart: RiFileChartFill,
    msgOutline: MdOutlineMessage,
    magnify: FaMagnifyingGlass,
    lineUser: AiOutlineUserSwitch,
    mailOutline: MdOutlineEmail,
    star: FaRegStar,
    quoteLeft: FaQuoteLeft,
    calendarDay: FaCalendarDay,
    location: FaLocationDot,
    phone: FaPhoneAlt,
    mailOpenFont: IoMdMailOpen,
    calendarClock: LuCalendarClock,
    facebook: FaFacebookF,
    twitter:  FaTwitter,
    instagram: TiSocialInstagram,
    gmail: SiGmail,
    linkedin: FaLinkedinIn,
    hamburger: GiHamburgerMenu,
    miniComputer: HiMiniComputerDesktop
}

export const getIcon = (size: number, color: string, icon: string) => {
    let Icon = icons[icon as keyof typeof icons];
    return Icon ? <Icon size={size} color={color} /> : ''
}