import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'
import './index.scss'
import {useState, useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters/index'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['P','a','u','l','o']
    const jobArray = ['S', 'o', 'f','t', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={nameArray} 
                        idx={15} 
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Software Engineer / ASP.NET / JAVA / REACT</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home