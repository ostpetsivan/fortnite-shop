function Header() {
    return (
        <nav className="purple">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="!#" className="brand-logo">
                        The Game Store
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="https://github.com/ostpetsivan">Repository</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export { Header };
