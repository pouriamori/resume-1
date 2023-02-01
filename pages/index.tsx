import AdminPanel1 from '../components/AdminPanel1'
import AdminPanel2 from '../components/AdminPanel2'
import SkinCare from '../components/SkinCare'
import MovieLand from '../components/MovieLand'
import Telegram from '../components/Telegram'
import Portfolio1 from '../components/Portfolio1'
import Portfolio2 from '../components/Portfolio2'
import Ending from '../components/Ending'
import Contact from '../components/Contact'
import MySkills from '../components/MySkills'



const Home = () => {

  return (
    <>
      <section>
        <div className="container">
          <div className="row py-4 lh-lg align-items-center">
            <div className="col-md-3 p-md-3 p-5">
              <img src="/1.png" alt="" className="rounded-circle trans-all scale-up" />
            </div>
            <div className="col-md-9 p-3">
              <p className="h3 pb-2 text-center text-md-end">
                سلام <span className="text-primary">پوریا مروتی</span> هستم
              </p>
              <hr className="w-75" />
              <ul className="pe-4 list-resume ">
                <li>
                  طراح و توسعه دهنده ی  React - Frontend (Midlevel)
                </li>
                <li>
                  متولد 1378 در هشترود
                </li>
                <li>
                  کارشناسی عمران دانشگاه صنعتی سهند و کامپیوتر پیام نور
                </li>
                <li>
                  سابقه ی فعالیت در حوزه وب , سئو و تولید محتوا از سال 95 (سایت های وردپرسی همکاری در فروش با دیجیکالا)
                </li>
                <li>
                  سابقه برنامه نویسی زبان های C++ , Python در حوزه ی الگوریتم تریدینگ از سال 97
                </li>
                <li>
                  سابقه ی برنامه نویسی تحت وب HTML , CSS , React , Next از سال 99
                </li>
                <li>
                  علاقه مند به حوزه ی برنامه نویسی وب ، موبایل و الگوریتم تریدینگ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12">
              <p className="h4 text-center">
                لیست تعدادی از نمونه کارهای من
              </p>
            </div>
          </div>
        </div>
      </section>
      <AdminPanel1 />
      <AdminPanel2 />
      <SkinCare />

      <section className="py-4">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12">
              <p className="h4 text-center">
                تعدادی دیگر از نمونه کارهای <span className="text-primary">قدیمی</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <MovieLand />
      <Telegram />
      <Portfolio1 />
      <Portfolio2 />


      <MySkills />
      <Ending />
      <Contact />

    </>
  )
}

export default Home;
