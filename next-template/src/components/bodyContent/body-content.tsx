import Banner from "../banner/banner";
import AboutUs from "./about-us";
import Services from "./services";


export default function BodyContent() {
  return (
   <div className="pt-[56px]">
     <Banner />
     <AboutUs />
     <Services />
   </div>
  );
}
