import './CompanyLogos.css'
import img1 from '../../assets/img/200X60/img1.png'
import img2 from '../../assets/img/200X60/img2.png'
import img3 from '../../assets/img/200X60/img3.png'
import img4 from '../../assets/img/200X60/img4.png'
import img5 from '../../assets/img/200X60/img5.png'

const CompanyLogos = () => {
  return (
    <div className='companyLogo'>
        <img src={img1} alt='logos' />
        <img src={img2} alt='logos' />
        <img src={img3} alt='logos' />
        <img src={img4} alt='logos' />
        <img src={img5} alt='logos' />

    </div>
  )
}

export default CompanyLogos