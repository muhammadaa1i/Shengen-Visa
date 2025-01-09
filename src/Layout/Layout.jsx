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
                        <img className="w-16 h-16 ml-2" src={logo} alt="logo of company" />
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

            <footer>
                <div className="footer container flex flex-col justify-center lg:justify-between bg-[#020C26] rounded-3xl m-auto my-5 h-auto text-white px-4 py-5 lg:flex-row ">
                    <section className="max-lg:max-w-[270px] max-lg:m-auto max-lg:mb-5 flex flex-col gap-4 mt-10 ml-4">
                        <h1 className="text-lg font-medium uppercase sm:text-xl">Ariza qoldirish</h1>
                        <form id="myForm" className="w-[300px] border-2 flex flex-col gap-2 ">
                            <h1 className="text-lg font-normal text-white sm:text-xl">Ism:</h1>
                            <input type="text" placeholder="Ismingiz" className="max-w-[200px] w-full p-1 outline-none text-black" />
                            <h1 className="text-lg font-normal text-white sm:text-xl">Familiya:</h1>
                            <input type="text" placeholder="Familiyangiz" className="max-w-[200px] w-full p-1 outline-none text-black" />
                            <h1 className="text-lg font-normal text-white sm:text-xl">Telefon:</h1>
                            <input type="number" placeholder="Telefon raqamingiz" className="max-w-[200px] w-full p-1 outline-none text-black" />
                            <h1 className="text-lg font-normal text-white sm:text-xl">Komentriya:</h1>
                            <input type="text" placeholder="Fikringiz" className="flex items-start max-w-[200px] w-full h-44 p-1 outline-none text-black" />
                        </form>
                    </section>
                    <section className="max-w-[700px] w-full h-auto flex flex-col sm:flex-row justify-around max-sm:gap-5">
                        <div className="max-w-[225px] w-full flex flex-col gap-3 max-sm:m-auto">

                        </div>
                        <div className="max-w-[225px] w-full flex flex-col gap-3 max-sm:m-auto">
                            <h1 className="text-lg font-medium uppercase sm:text-xl">kontakt</h1>
                            <div className="flex flex-row items-center gap-3">
                                <p className="text-lg font-extralight text-white sm:text-xl">Tel:</p>
                                <div className="flex flex-col gap-1 p-0 w-auto">
                                    <a target="_blank
                                " className="text-lg font-extralight text-white no-underline sm:text-xl" href="tel:+998958233030">+998 95 823 30 30</a>
                                    <a target="_blank" className="text-lg font-extralight text-white no-underline sm:text-xl" href="tel:+998955153030">+998 95 515 30 30</a>
                                </div>
                            </div>
                            <a target="_blank" href="https://t.me/shengenvisa_uz" className="text-lg font-extralight text-white sm:text-xl no-underline flex flex-row gap-3">
                                <i className="fa-brands fa-telegram text-3xl"></i>
                                shengenvisa_uz
                            </a>
                            <a target="_blank" href="https://www.instagram.com/shengen_viza_centr?igsh=eWFwYWN1MG10OXB1" className="text-lg font-extralight text-white sm:text-xl no-underline flex flex-row gap-3">
                                <i className="fa-brands fa-instagram text-3xl"></i>
                                shengen_viza_centr
                            </a>
                            <a target="_blank" href="https://www.google.com/maps?q=41.349947,69.288288&ll=41.349947,69.288288&z=16" className="text-lg font-extralight text-white sm:text-xl no-underline flex flex-row gap-3">
                                <i className="fa-solid fa-location-dot text-3xl"></i>
                                Amir Temur shox ko'chasi, Cho'pon ota 5A.
                            </a>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Layout