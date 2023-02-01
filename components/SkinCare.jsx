import { BsChevronLeft } from "react-icons/bs";
import Corner from './Corner'


const SkinCare = () => {
  return (
    <>
      <section>
        <div className="container pb-5">
          <div className="row bg-transparent-1 rounded-4 p-3 corner-mother">
            <Corner text={'Pro'} color={'#B91C1C'} />
            <div className="col-md-3 ps-4">
              <p className="h4 text-center">
                لندینگ سایت فروشگاهی
              </p>
              <hr />
              <ul className="lh-lg pe-4 small">
                <li>
                  تکنولوژی های مورد استفاده:
                </li>
                <li className="text-secondary text-start pb-4">
                  <p>
                    React js
                  </p>
                  <p>
                    Next js
                  </p>
                  <p>
                    Framer motion
                  </p>
                  <p>
                    Swiper js
                  </p>
                  <p>
                    Formkit js
                  </p>
                  <p>
                    Html - Css - Bootstrap
                  </p>
                  <p>
                    React icons
                  </p>
                  <p>
                    Next js Routing
                  </p>
                </li>


                <li>
                  ویژگی ها:
                </li>
                <li className="text-light lh-lg">
                  <p>
                    فول ریسپانسیو و انیمیتیو
                  </p>
                  <p>
                    تمام محصولات داینامیک
                  </p>
                  <p>
                    UI Design حرفه ای
                  </p>
                  <p>
                    دارای اسلایدر و فیلتر دسته بندی
                  </p>
                </li>

                <li className="text-center pt-5 pb-md-0 pb-3">
                  <a href="https://timely-fox-b39acb.netlify.app" target="_blank"
                    rel="noopener noreferrer">
                    <button className="btn btn-secondary w-100">
                      <span>مشاهده ی لایو </span>
                      <span className="small"><BsChevronLeft /></span>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 row">
              <div className="col-md-12 p-2">
                <img src="/skin-care/1.png" alt="" className="rounded-3" />
              </div>

              <div className="col-md-4 p-2">
                <img src="/skin-care/2.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2">
                <img src="/skin-care/3.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2">
                <img src="/skin-care/4.png" alt="" className="rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkinCare