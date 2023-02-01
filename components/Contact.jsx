import { BsFillTelephoneFill, BsChatSquareTextFill } from 'react-icons/bs'


const Contact = () => {
  return (
    <>
      <div className='bg-primary text-dark rounded-5 contact-me p-3 m-3'>
        <ul>
          <li className='d-flex align-items-center'>
            <p className='ltr fw-bold'>0922 538 8329</p>
            <div className='pe-2 h5'>
              <BsFillTelephoneFill />
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact