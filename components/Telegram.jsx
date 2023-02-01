import { BsChevronLeft } from "react-icons/bs";
import Corner from './Corner'


const Telegram = () => {
  return (
    <>
      <section>
        <div className="container pb-5">
          <div className="row bg-transparent-1 rounded-4 p-3 corner-mother">
            <Corner text={'Mid'} color={'#4D7C0F'} />
            <div className="col-md-3 ps-4">
              <p className="h4 text-center">
                سایت فروش ممبر تلگرام
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
                    Vite js
                  </p>
                  <p>
                    Html - Css - Bootstrap
                  </p>
                  <p>
                    React icons
                  </p>
                </li>


                <li>
                  ویژگی ها:
                </li>
                <li className="text-light lh-lg">
                  <p>
                    فول ریسپانسیو دارای منو موبایل
                  </p>
                  <p>
                    تمام اطلاعات داینامیک
                  </p>
                  <p>
                    UI Design حرفه ای
                  </p>
                  <p>
                    قابلیت تعیین میزان ممبر و محاسبه ی قیمت
                  </p>
                </li>

                <li className="text-center pt-5 pb-md-0 pb-3">
                  <a href="https://jovial-monstera-335a4e.netlify.app" target="_blank"
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
                <img src="/telegram/1.png" alt="" className="rounded-3" />
              </div>

              <div className="col-md-4 p-2">
                <img src="/telegram/2.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2">
                <img src="/telegram/3.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2">
                <img src="/telegram/4.png" alt="" className="rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Telegram