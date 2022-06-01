import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";

export type MediaCarouselProps = {
  images: Array<string>;
};

const MediaCarousel = (props: MediaCarouselProps) => {
  const { images } = props;

  const swiperSlides = images.map((image, index) => (
    <SwiperSlide key={index}>
      <Image
        blurDataURL={image}
        layout="fill"
        objectFit="contain"
        placeholder="blur"
        quality={100}
        src={image}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      centeredSlides={true}
      className="mySwiper"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 1,
      }}
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      modules={[EffectCoverflow, Pagination]}
      navigation={true}
      pagination={true}
      slidesPerView={"auto"}
    >
      {swiperSlides}
    </Swiper>
  );
};

export default MediaCarousel;
