import { getIcon } from "@/utils/utils";

export default function ContactUs() {
  return (
    <>
      <div className="py-[60px] px-[15px] flex justify-center">
        <div className="w-full max-w-[726px] md:px-[15px]">
          <div className="mb-[50px]">
            <h3 className="text-black_10 font-bold tracking-[.02em] text-2xl">
              Contact us
            </h3>
            <div className="divider !mt-[30px]"></div>
            <p className="text-gray_10 mt-2.5 text-[18px] font-light leading-[1.6]">
              You can contact us any way that is convenient for you. We are
              available 24/7 via fax or email. You can also use a quick contact
              form below or visit our office personally.
            </p>
            <form className="mt-5 md:flex flex-wrap justify-between">
              <div className="mb-5 w-full md:max-w-[333px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  First name
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full md:max-w-[333px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Lastname
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full md:max-w-[333px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  E-mail
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full md:max-w-[333px]">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Phone
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <input
                    className="w-full bg-transparent text-black_10"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-5 w-full">
                <span className="pl-[21px] mb-[3px] text-[12px] text-xs leading-6 font-light tracking-[.02em] text-gray_10">
                  Message
                </span>
                <div className="rounded-[35px] bg-gray_5 py-[18px] px-[25px]">
                  <textarea className="w-full bg-transparent text-black_10 !h-[107px]" />
                </div>
              </div>
            </form>
            <button
              className="my-[20px] rounded-[35px] uppercase py-[9px] px-[23px] w-full 
          transition-all duration-[.25s] ease-linear btn-gradient text-white border-2 border-transparent 
          cursor-pointer text-[15px] font-medium tracking-[0.12em] max-w-[210px] text-sm h-[46px] md:h-[56px]"
            >
              send message
            </button>
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="w-full mb-[30px] max-w-[333px]">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                Address
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "location")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  2130 Fulton Street, Chicago, IL 94117-1080 USA 94117-1080 USA
                </span>
              </div>
            </div>
            <div className="w-full mb-[30px] max-w-[333px]">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                Phones
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "phone")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  1-800-6543-765, 1-800-3434-876
                </span>
              </div>
            </div>
            <div className="w-full mb-[30px] max-w-[333px] md:mb-0">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                E-mail
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "mailOpenFont")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  mail@demolink.org
                </span>
              </div>
            </div>
            <div className="w-full mb-[30px] max-w-[333px] md:mb-0">
              <h6 className="text-black_10 font-bold tracking-[.02em] text-[17px] leading-[1.5] md:text-[19px]">
                Opening hours
              </h6>
              <hr className="mt-[13px]" />
              <div className="mt-[15px] flex">
                <span className="px-[6px] bg-linear">
                  {getIcon(20, "#0796c6", "calendarClock")}
                </span>
                <span className="text-gray_10 px-[6px] text-[15px] leading-[1.6] font-light">
                  Mon–Fri: 9:00 am–6:00 pm <br />
                  Sat–Sun: 11:00 am–4:00 pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
