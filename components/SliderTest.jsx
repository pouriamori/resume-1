import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



const SliderTest = () => {

  const images = [
    "/portfolio-1/1.png",
    "/portfolio-1/2.png",
    "/portfolio-1/3.png",
    "/portfolio-1/4.png"
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row py-5 text-dark">
            <div className="col-md-12">
              <div className="bg-white rounded-3 p-3">



                <div className="slide-wrapper">
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                  // navigation={true}
                  // modules={[Navigation, Thumbs]}
                  // grabCursor={true}

                  >

                    {images.map((item, index) => {
                      <SwiperSlide key={index}>
                        <img src={item} alt="" />
                      </SwiperSlide>
                    })}

                  </Swiper>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default SliderTest