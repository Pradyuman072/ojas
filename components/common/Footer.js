import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-3'>
            <div className='logo'>
              <TitleLogo title='OJAS' className='logobg' />
            </div>
            {/* <ul>
              <h3>CLUB</h3>
              <li>
                <Link className="link-footer" href='/'>HOME</Link>
              </li>
              <li>
                <Link href='/'>TEAM</Link>
              </li>
              <li>
                <Link href='/'>EVENTS</Link>
              </li>
              <li>
                <Link href='/'>PROJECTS</Link>
              </li>
              <li>
                <Link href='/'>ABOUT US</Link>
              </li>
            </ul> */}
            <ul className="flex1" >
              <h3>DOMAINS</h3>
              <div className="flex2" >
              <li>
                Hardware
              </li>
              <li>
                AI/ML
              </li>
              <li>
                Graphic Designing 
              </li>
              <li>
                Web Development
              </li>
              </div>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='social-handle'>
                <li>
                  <Link href='https://m.facebook.com/profile.php?id=100076137815057&name=xhp_nt_fbaction_open_user'target="_blank">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/team_ojas_nith?igsh=bDN3Z2diZXR2aHNu'target="_blank">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/ojasnith/' target="_blank" >
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>Made with love by Team Ojas</span>
            </div>
            <div className='connect'>
              {/* <span>ANURAG VARSHNEY</span> */}
              {/* <span> &nbsp; | &nbsp; </span> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
