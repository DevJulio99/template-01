import Banner from "../banner/banner";
import AboutUs from "./about-us";
import Services from "./services";
import './body-content.scss';
import OurProjects from "./our-projects";
import ContactUs from "./contact-us";
import OurTeam from "./our-team";


export default function BodyContent() {
  return (
   <div className="pt-[56px]">
     <Banner />
     <AboutUs />
     {/* <Services /> */}
     <OurTeam />
     <OurProjects />
     <ContactUs />
   </div>
  );
}
