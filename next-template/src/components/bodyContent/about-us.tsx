import { getIcon } from "@/utils/utils";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function AboutUs() {
  const aboutServices = [
    {
      id: 1,
      title: "SEO",
      description: `Search engine optimization (SEO) is the process of affecting the
            visibility of a website or a web page in a web search engine's
            unpaid results — often referred to as "natural".`,
      icon: 'search'
    },
    {
      id: 2,
      title: "SMM",
      description: `
            Social media management solutions can help you manage outbound and incoming
            online interactions — along with other small business marketing activities — in an efficient manner.
          `,
    icon: 'lineUser'
    },
    {
      id: 3,
      title: "Email Marketing",
      description: `
            Email marketing provides an effective connection with your targeted audience
            and gives you the best return on investment, including reaching out to your customers.
          `,
          icon: 'mailOutline'
    },
    {
      id: 4,
      title: "Brand Management",
      description: `
            Brand management refers to influencing and controlling an individual's or
            business's reputation. Originally a public relations term, today it’s an issue of search results.
          `,
          icon: 'star'
    },
    {
      id: 5,
      title: "Web Design",
      description: `
            Users enjoy visiting sites that are aesthetically appealing and easy to
            navigate. Let our team help your site make an outstanding first impression with speed and accessibility.
          `,
          icon: 'lineUser'
    },
    {
      id: 6,
      title: "Content Marketing",
      description: `
            Content strategy is becoming steadily more critical to successful marketing
            both online and offline and in order to help your growth you need to ensure you have something
            captivating.
          `,
          icon: 'lineUser'
    },
    {
      id: 7,
      title: "Online Advertising",
      description: `
      With the development of the Internet, advertising has moved to the Web and
      it's critical for the e-world. Our experts can help you manage your online advertising strategy.
    `,
    icon: 'lineUser'
    },
    {
      id: 8,
      title: "Local SEO",
      description: `
            Local SEO increases visibility of your business by driving your website to the
            top of local listings. If you have a local business, you need geographically relevant traffic to your
            site.
          `,
          icon: 'lineUser'
    },
  ];
  return (
    <>
      <div className="py-[60px] px-[15px] text-center">
        <div className="mb-[50px]">
          <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl">
            Welcome to SEOStudio
          </h3>
          <div className="divider !mt-[20px]"></div>
          <p className="font-light mt-2.5 text-black_10 tracking-[.02em] text-[19px] leading-[1.5]">
            We work in areas as diverse as search engine optimization, social
            media marketing, email marketing and digital marketing.
          </p>
          <p className="mt-[20px] tracking-[.02em] text-[15px] font-light text-gray_10">
            Our team of specialists consistently delivers outstanding results
            combining creative ideas with our vast experience. We can help you
            build a sustainable, meaningful relationship with your clients by
            engaging them with your brand using social media.
          </p>
          <button
            className="mt-[25px] rounded-[35px] uppercase py-[9px] px-[30px] w-full 
          transition-all duration-[.25s] ease-linear bg-white text-black_10 border-2 border-white_10 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] hover:bg-blue_10 max-w-[210px] hover:text-white"
          >
            GET STARTED
          </button>
        </div>
        <div>
          <Image src={"/ipad.png"} fill alt="img-ipad" className="!relative" />
        </div>
      </div>
      <div className="py-[60px] px-[15px] bg-gray_5">
        {
            aboutServices.map((x, index) => (<article key={index} className="mb-[50px]">
            <div className="flex">
              <span className="mb-5">
                {getIcon(40, '#50e590', x.icon)}
              </span>
              <h6 className="ml-5 mb-5 mt-[8px] text-black_10 font-bold tracking-[.02em]">
                {x.title}
              </h6>
            </div>
            <div className="mt-[2px] text-gray_10 font-light text-[15px] leading-[1.6]">
            {x.description}
            </div>
          </article>))
        }

      </div>
    </>
  );
}
