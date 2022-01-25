import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';
import bg from '/public/banner.jpg';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default function ClientReview() {
  return (
    <section
      className="py-20"
      style={{
        background: `linear-gradient(180deg,rgba(0,0,0,0.73) 0%,rgba(0,0,0,0.73) 100%), url(${bg.src}) center /cover no-repeat`,
      }}
    >
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-white capitalize font-bold text-4xl mb-8 font-amiko">
            Client Review
          </h2>
          <p className="text-white font-medium font-roboto">
            At Quality Homes Reimagined, LLC we do our best to provide excellent
            service every time, which is why we are proud to share our client
            reviews!
          </p>
        </div>
        <Slider {...settings} className="mt-20">
          <div>
            <div className="text-center p-4 text-white flex flex-col gap-y-5">
              <p className="text-white font-medium font-roboto">
                Quality Homes Reimagined LLC are great people to work with. They
                have an impressive team with great knowledge of their industry.
                They also have a very impressive network behind them that I have
                no doubt will allow them to be able to work though any situation
                thrown at them. I would recommend anyone considering using their
                services to give Carolina Allen and her team a call. Thanks
                again Quality Homes for all of your help
              </p>
              <div className="flex item-center justify-center text-yellow">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="text-center">
                <p className="font-bold font-roboto">Jhon Doe</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center p-4 text-white flex flex-col gap-y-5">
              <p className="text-white font-medium">
                Quality Homes Reimagined LLC are great people to work with. They
                have an impressive team with great knowledge of their industry.
                They also have a very impressive network behind them that I have
                no doubt will allow them to be able to work though any situation
                thrown at them. I would recommend anyone considering using their
                services to give Carolina Allen and her team a call. Thanks
                again Quality Homes for all of your help
              </p>
              <div className="flex item-center justify-center text-yellow">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="text-center">
                <p className="font-bold">Jhon Doe</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center p-4 text-white flex flex-col gap-y-5">
              <p className="text-white font-medium">
                Quality Homes Reimagined LLC are great people to work with. They
                have an impressive team with great knowledge of their industry.
                They also have a very impressive network behind them that I have
                no doubt will allow them to be able to work though any situation
                thrown at them. I would recommend anyone considering using their
                services to give Carolina Allen and her team a call. Thanks
                again Quality Homes for all of your help
              </p>
              <div className="flex item-center justify-center text-yellow">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="text-center">
                <p className="font-bold">Jhon Doe</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
