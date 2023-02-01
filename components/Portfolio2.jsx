import { BsChevronLeft } from "react-icons/bs";
import Corner from './Corner'


const Portfolio2 = () => {
  return (
    <>
      <section>
        <div className="container pb-5">
          <div className="row bg-transparent-1 rounded-4 p-3 corner-mother">
            <Corner text={'Basic'} color={'#1D4ED8'} />
            <div className="col-md-3 ps-4">
              <p className="h4 text-center">
                سایت پورتفولیو 2
              </p>
              <hr />
              <ul className="lh-lg pe-4 small">
                <li>
                  تکنولوژی های مورد استفاده:
                </li>
                <li className="text-secondary text-start pb-4">
                  <p>
                    Html - Css - Bootstrap
                  </p>
                  <p>
                    Bootstrap icons
                  </p>
                  <p>
                    Css Transitions
                  </p>
                </li>


                <li>
                  ویژگی ها:
                </li>
                <li className="text-light lh-lg">
                  <p>
                    فول ریسپانسیو
                  </p>
                  <p>
                    تک صفحه ای استاتیک
                  </p>
                  <p>
                    طراحی شده صرفا با بوتسرتپ بدون استفاده از جاوا اسکریپت
                  </p>
                  <p>
                    امکان استفاده از React و ...
                  </p>
                  <p>
                    دارای سکشن های مختلف و متعدد
                  </p>
                </li>

                <li className="text-center pt-5 pb-md-0 pb-3">
                  <a href="https://radiant-taffy-ec934f.netlify.app" target="_blank"
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
                <img src="/portfolio-2/1.png" alt="" className="rounded-3" />
              </div>

              <div className="col-md-4 p-2">
                <img src="/portfolio-2/2.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2">
                <img src="/portfolio-2/3.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2">
                <img src="/portfolio-2/4.png" alt="" className="rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio2