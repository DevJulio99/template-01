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
    star: FaRegStar
}

export const getIcon = (size: number, color: string, icon: string) => {
    let Icon = icons[icon as keyof typeof icons];
    return Icon ? <Icon size={size} color={color} /> : ''
}