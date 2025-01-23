import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='container flex'>
        <div className='grid'>
          <div className='logo'>
            <TitleLogo title='OJAS' className='logobg' />
          </div>
          <ul className='domains'>
            <h3>DOMAINS</h3>
            <li>Hardware</li>
            <li>AI/ML</li>
            <li>Graphic Designing</li>
            <li>Web Development</li>
          </ul>
          <ul className='connect'>
            <h3>CONNECT</h3>
            <div className='social-icons'>
              <li>
                <Link href='https://m.facebook.com/profile.php?id=100076137815057&name=xhp_nt_fbaction_open_user' target="_blank">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/team_ojas_nith?igsh=bDN3Z2diZXR2aHNu' target="_blank">
                  <AiFillInstagram size={25} />
                </Link>
              </li>
              <li>
                <Link href='https://www.linkedin.com/company/ojasnith/' target="_blank">
                  <AiFillLinkedin size={25} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className='legal'>
          <span>Made with love by Team Ojas</span>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
 
  color: #ffffff;
  padding: 2rem 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: start;
  }

  .logo {
    text-align: center;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .domains {
    list-style: none;
    padding: 0;
    // background: linear-gradient(135deg, rgba(0, 128, 255, 0.1), rgba(255, 0, 128, 0.1));
    border-radius: 8px;
    padding: 1rem;
    transition: background 0.3s ease;
  }

  .domains li {
    margin: 0.5rem 0;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background 0.3s ease, color 0.3s ease;
  }


  .connect {
    list-style: none;
    padding: 0;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons li {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .social-icons li:hover {
    transform: scale(1.2);
  }

  .legal {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #ccc;
  }
`;

export default Footer;