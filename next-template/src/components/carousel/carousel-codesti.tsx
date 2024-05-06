import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

interface Props {
	children: JSX.Element | JSX.Element[] | string;
}

export default function CarouselCodesti({children}: Props) {
    return (
        <OwlCarousel className='owl-theme' loop margin={10}  responsive={
            {
              0:{
                items:1,
                nav: false
             },
             1024: {
              items: 2
             },
             1200: {
              items: 3
             }
            }
          }>
            {children}
      </OwlCarousel>
    )
}