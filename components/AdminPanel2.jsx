import { BsChevronLeft } from "react-icons/bs";
import Corner from './Corner'


const AdminPanel2 = () => {
  return (
    <>
      <section>
        <div className="container pb-5">
          <div className="row bg-transparent-1 rounded-4 p-3 corner-mother">
            <Corner text={'Pro'} color={'#B91C1C'} />
            <div className="col-md-3 ps-4">
              <p className="h4 text-center">
                ادمین پنل شماره 2
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
                    React Chart js
                  </p>
                  <p>
                    Html - Css - Bootstrap
                  </p>
                  <p>
                    Unicons
                  </p>
                  <p>
                    Next js Routing
                  </p>
                  <p>
                    Circular Progress js
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
                    تمام اطلاعات داینامیک
                  </p>
                  <p>
                    UI Design حرفه ای
                  </p>
                </li>

                <li className="text-center pt-5 pb-md-0 pb-3">
                  <a href="https://frolicking-yeot-a5dc4d.netlify.app" target="_blank"
                    rel="noopener noreferrer">
                    <button className="btn btn-secondary w-100">
                      <span>مشاهده ی لایو </span>
                      <span className="small"><BsChevronLeft /></span>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 row align-items-center">
              <div className="col-md-12 p-2">
                <img src="/admin-panel-2/1.png" alt="" className="rounded-3" />
              </div>

              <div className="col-md-4 p-2 d-none d-md-block">
                <img src="/admin-panel-2/1.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2">
                <img src="/admin-panel-2/2.png" alt="" className="rounded-3" />
              </div>
              <div className="col-md-4 p-2 row">
                <div className="col-1" />
                <div className="col-5">
                  <img src="/admin-panel-2/5.png" alt="" className="rounded-3" />
                </div>
                <div className="col-1" />
                <div className="col-5">
                  <img src="/admin-panel-2/4.png" alt="" className="rounded-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminPanel2