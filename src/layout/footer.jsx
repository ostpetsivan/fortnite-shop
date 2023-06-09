function Footer() {
    return (
        <footer className="page-footer purple darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    &nbsp;ostapec
                    <a className="grey-text text-lighten-2 right" href="https://github.com/ostpetsivan">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
