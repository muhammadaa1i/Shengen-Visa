import { Link, Outlet } from "react-router-dom"
import logo from '../images/shengen.jpg'
import bg from '../images/bgshengen.png'
import { useState } from "react"
import '../Layout/Layout.css'

const Layout = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <header>
                <nav className="navbar bg-white flex flex-row justify-between items-center p-0"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "30% 100%",
                        backgroundPositionX: "center"
                    }}>
                    <a href="/">
                        <img className="w-16 h-16 ml-2 " src={logo} alt="logo of company" />
                    </a>
                    <a className="telephone hidden text-black no-underline font-normal text-base absolute right-14" href="tel:+998955153030">+998 95 515 30 30</a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="menu-btn w-11 h-11 mr-2">
                        <i className="bars fa-solid fa-bars text-2xl text-[#264796]"></i>
                        <section className={`menu fixed top-0 right-0 h-full w-[40%] bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} z-20 transition-transform duration-500 ease-in-out`}>
                            <button onClick={() => setIsOpen(false)} className="fa-solid fa-x absolute left-4 top-4 text-2xl max-sm:text-lg"></button>
                            <ul>
                                <li>
                                    <Link to="/">Shengen</Link>
                                </li>
                                <li>
                                    <Link to="/aqsh">AQSH</Link>
                                </li>
                                <li>
                                    <Link to="/britaniya">Buyuk Britaniya</Link>
                                </li>
                                <li>
                                    <Link to="/yaponiya">Yaponiya</Link>
                                </li>
                                <li>
                                    <Link to="/avstraliya">Avstraliya</Link>
                                </li>
                                <li>
                                    <Link to="/hindiston">Hindiston</Link>
                                </li>
                                <li>
                                    <Link to="/koreya">Janubiy Koreya</Link>
                                </li>
                            </ul>
                        </section>
                        {isOpen && (
                            <div
                                className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"
                                onClick={() => setIsOpen(false)}
                            ></div>
                        )}
                    </button>
                </nav>
            </header>


            <main>
                <Outlet />
            </main>

            {/* <footer>
                <p>© 2025 Muhammadali-Dev</p>
                <a className="flex flex-row items-center gap-1" target="blank" href="https://www.instagram.com/xusanovv.m/?hl=en">
                    <i className="fa-brands fa-instagram"></i>
                    <h4>xusanovv.m</h4>
                </a>
            </footer> */}
        </div>
    )
}

export default Layout