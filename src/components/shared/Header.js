import { Fragment } from "react"

const Header = () => (
    <section>
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">        
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://alysarnau.com">
                        <img src="https://i.imgur.com/dLuQzrY.png" max-width="112px" max-height="140px" />
                    </a>
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-main">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
                    </div>
                    <div class="navbar-end" id="navbar-main">
                        <a class="navbar-item">
                            Home
                        </a>
                        <a class="navbar-item" href="#about-me">
                            About Me
                        </a>
                        <div class="navbar-item is-hoverable has-dropdown" href="#projects">
                            <a class="navbar-link">
                                Projects
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item" href="https://my-junimo-helper.herokuapp.com/">
                                    MyJunimoHelper
                                </a>
                                <a class="navbar-item" href="https://scrumptious-freelancr-app.herokuapp.com/">
                                    Freelancr
                                </a>
                                <a class="navbar-item" href="https://practice-helper.herokuapp.com/users/home">
                                    Practice Helper
                                </a>
                                <a class="navbar-item" href="https://alysvolatile.github.io/counting-sheep/">
                                    Counting Sheep
                                </a>
                            </div>
                        </div>
                        <a class="navbar-item" href="#contact_me">
                            Contact Me
                        </a>
                        {/* <a class="navbar-item">
                            Time Machine (coming soon!)
                        </a> */}
                    </div>
                </div>
            </nav>
        </div>
    </section>
)

export default Header