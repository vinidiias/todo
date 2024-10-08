import styles from './Footer.module.css'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaThreads } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";




function Footer() {
    return (
      <footer>
        <ul className={styles.social_list}>
          <li>
            <a href="https://www.linkedin.com/in/vinícius-dias-322070264/" target='_blank' rel="noopener noreferrer"  aria-label="LinkedIn Profile">
              <TiSocialLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/viniciusdiias_/" target='_blank' rel="noopener noreferrer" aria-label="Instagram Profile">
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.threads.net/@viniciusdiias_" target='_blank' rel="noopener noreferrer"  aria-label="Threads Profile">
              <FaThreads />
            </a>
          </li>
          <li>
            <a href="https://github.com/vinidiias" target='_blank' rel="noopener noreferrer"  aria-label="GitHub Profile">
              <FaGithubSquare />
            </a>
          </li>
        </ul>
        <p>
          Developed by <span>Vinícius Dias</span>
        </p>
      </footer>
    );
    
}

export default Footer