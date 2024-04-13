import { getIcon } from "@/utils/utils";

export default function OurProjects() {
  const projects = [
    {
      description: "348% More Organic Traffic in 7 Days",
      img: "/images/gallery-01-project.jpg",
    },
    {
      description:
        "How Manual Tasks Sabotage the Potential of Natural Search Marketers",
      img: "/images/gallery-02-project.jpg",
    },
    {
      description: "A Search Engine Based on Expert Documents",
      img: "/images/gallery-03-project.jpg",
    },
    {
      description: "Enterprise SEO Tools: The Marketer’s Guide",
      img: "/images/gallery-04-project.jpg",
    },
    {
      description: "SEO for Small Medical Practices",
      img: "/images/gallery-05-project.jpg",
    },
    {
      description: "Information Retrieval Data Structures & Algorithms",
      img: "/images/gallery-06-project.jpg",
    },
  ];

  const news = [
    {
      date: "April 13, 2021 at 12:15 pm",
      title: "Google Rethinking Payday Loans & Doorway Pages?",
      img: "/images/home-1.jpg",
    },
    {
      date: "April 13, 2021 at 12:15 pm",
      title: "Benefits of Using Modern Promotion Technologies",
      img: "/images/home-2.jpg",
    },
    {
      date: "April 13, 2021 at 12:15 pm",
      title: "How Google Search Works in 2021",
      img: "/images/home-3.jpg",
    },
  ];
  return (
    <>
      <div className="py-[60px] px-[15px] text-center flex justify-center">
        <div className="w-full max-w-[726px] lg:max-w-[966px]">
          <div className="mb-[50px] md:mb-0">
            <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl">
              Our Projects and Cases
            </h3>
            <div className="divider !mt-[30px]"></div>
            <div className="w-full flex justify-center mt-[30px]">
              <div className="flex flex-wrap justify-between px-[15px]">
                {projects.map((x, index) => (
                  <div
                    key={index}
                    className="mb-[50px] md:max-w-[333px] lg:max-w-[292px]"
                  >
                    <img
                      className="md:h-[380px]"
                      src={x.img}
                      alt={`project-img-${index + 1}`}
                    />
                    <span className="block text-green_10 mb-2.5 mt-[15px] md:text-start">
                      {x.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="mt-[18px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[245px] md:max-w-[261px]  text-sm md:mt-0 h-[56px]"
          >
            Become Our Client
          </button>
        </div>
      </div>

      <div className="py-[60px] px-[15px] text-center container-testimonials">
        <h3 className="text-white font-bold tracking-[.02em] text-2xl">
          Testimonials
        </h3>
        <div className="divider !mt-[20px]"></div>
        <div className="mt-[40px] text-justify">
          {getIcon(40, "#1cd8c9", "quoteLeft")}
          <p className="mt-[25px] text-[18px] font-light">
            SEOStudio is the only agency that provides high quality online
            marketing and promotion services. The members of their team are real
            professionals in search engine optimization.
          </p>
        </div>
        <div className="flex mt-5">
          <img
            className="rounded-full"
            src="/images/quote-user-5.jpg"
            alt="user"
          />
          <div className="ml-5 text-start">
            <p className="text-blue_5 font-normal text-[15px]">Debra Ortega</p>
            <p className="font-normal text-gray_15 text-[15px]">
              Regular Customer
            </p>
          </div>
        </div>
      </div>

      <div className="py-[60px] px-[15px] text-center">
        <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl md:text-[28px]">
          Latest News
        </h3>
        <div className="divider !mt-[20px]"></div>
        <div className="w-full flex justify-center">
          <div className="mt-[30px] flex flex-wrap gap-[50px] max-w-[726px] lg:max-w-[966px] px-[15px] md:gap-0 justify-between md:gap-y-[50px]">
            {news.map((x, index) => (
              <div key={index} className="w-full md:max-w-[333px] lg:max-w-[453px]">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src={x.img}
                    alt={`img-home-${index + 1}`}
                  />
                  <div className="bg-transparent_black absolute top-0 w-full h-full flex items-center justify-center transition-all duration-[550ms] lg:opacity-0 hover:opacity-100">
                    <button
                      className="mt-[18px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
            transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
            cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[151px] text-sm"
                    >
                      book now
                    </button>
                  </div>
                </div>
                <div className="mt-[25px]">
                  <div className="flex">
                    {getIcon(24, "#0796c6", "calendarDay")}
                    <span className="text-gray_10 px-[6px] text-[15px] font-light leading-[1.6]">
                      {x.date}
                    </span>
                  </div>
                  <h5 className="text-start mt-[12px] text-green_10 text-[19px] font-normal tracking-[.02em]">
                    {x.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="mt-[20px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[257px] text-sm h-[46px] md:mt-[35px] md:h-[56px]
          md:max-w-[273px]"
        >
          view all blog posts
        </button>
      </div>

      <div className="py-[60px] px-[15px] text-center container-newsletter flex justify-center">
        <div className="w-full max-w-[726px] md:px-[15px] md:flex justify-between lg:max-w-[966px]">
          <div className="md:w-[272px] md:text-start lg:w-[291px]">
            <h3 className="text-white font-bold tracking-[.02em] text-2xl md:text-[28px]">
              Newsletter
            </h3>
            <div className="divider !mt-[20px]"></div>
            <p className="tracking-[0.02em] text-[15px] font-light mb-[30px]">
              Keep up with our always upcoming news, updates, and publications.
              Enter your e-mail and subscribe to our newsletter.
            </p>
          </div>

          <div className="mt-[10px] md:w-[333px]">
            <div className="bg-gray_5 py-[12px] pl-[25px] pr-[18px] rounded-[35px]">
              <input
                className="bg-transparent w-full focus:outline-0 text-black_10"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <button
              className="mt-[15px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[150px] text-sm h-[50px] md:max-w-[164px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}