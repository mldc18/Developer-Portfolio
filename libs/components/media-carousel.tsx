import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";

export type MediaCarouselProps = {
  images: Array<string>;
};

const MediaCarousel = (props: MediaCarouselProps) => {
  const { images } = props;

  const swiperSlides = images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className="w-[300px] h-[200px] sm:w-[400px] sm:h-[350px] relative mt-10 sm:mt-0">
        <Image
          className="rounded-lg"
          blurDataURL={image}
          placeholder="blur"
          objectFit="cover"
          layout="fill"
          src={image}
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 15,
        stretch: 0,
        depth: 0,
        modifier: 3,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      navigation={true}
      pagination={true}
      className="mySwiper"
    >
      {swiperSlides}
    </Swiper>
  );
};

export default MediaCarousel;
