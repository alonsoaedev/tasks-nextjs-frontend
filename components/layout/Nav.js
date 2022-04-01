import Link from 'next/link';

const Nav = ({ children }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Internet Luis</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link href='/'>
                            <a className='nav-link'>Home</a>
                        </Link>
                    </li>
                    <li>
                    <Link href='/about'>
                            <a className='nav-link'>About</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;