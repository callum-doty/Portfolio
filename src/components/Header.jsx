import '../styles/Header.css';


export default function Header() {
    return <nav className="head">
        <a href="/" className="site-title">Portfolio</a>
        <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            <li>
                <a href="/Experience">Experience</a>
            </li>
            <li>
                <a href="/Work">Work</a>
            </li>
        </ul>
    
    </nav>
}


