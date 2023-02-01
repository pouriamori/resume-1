import { BsChevronLeft } from "react-icons/bs";
import Corner from './Corner'


const MovieLand = () => {
  return (
    <>
      <section>
        <div className="container pb-5">
          <div className="row bg-transparent-1 rounded-4 p-3 corner-mother">
            <Corner text={'Mid'} color={'#4D7C0F'} />
            <div className="col-md-3 ps-4">
              <p className="h4 text-center">
                دریافت فیلم از OMDB
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
                    Fetch API
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
                    با قابلیت سرچ و گرفتن اطلاعات مرتبط
                  </p>
                  <p>
                    تمام اطلاعات داینامیک از API سایت OMDB
                  </p>
                </li>

                <li className="text-center pt-5 pb-md-0 pb-3">
                  <a href="https://astonishing-yeot-585df0.netlify.app" target="_blank"
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
                <img src="/movie-land/1.png" alt="" className="rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MovieLand