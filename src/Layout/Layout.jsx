import { Link, Outlet, useLocation } from "react-router-dom";
import logo from '../images/shengen.jpg';
import { useEffect, useState } from "react";
import '../Layout/Layout.css';
import eu from '../images/euflag.png';
import us from '../images/usflag.jpg';
import jp from '../images/jflag.png';
import can from '../images/canflag.png';
import ch from '../images/chflag.png';
import { useTranslation } from "react-i18next";
import i18n from '../i18next';

const Layout = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const { t } = useTranslation();
    const [languages, setLanguages] = useState(localStorage.getItem("i18nextLng") || "uz");

    useEffect(() => {
        const currentLang = localStorage.getItem("i18nextLng") || "uz";
        setLanguages(currentLang);
    }, []);

    const handleChange = (e) => {
        const selectedLang = e.target.value;
        i18n.changeLanguage(selectedLang);
        localStorage.setItem("i18nextLng", selectedLang);
        setLanguages(selectedLang);
    };

    return (
        <div>
            <header className="w-[100vw] fixed z-30 top-0">
                <nav className="navbar bg-white flex flex-row justify-between items-center p-0 shadow-xl">
                    <a href="/">
                        <img className="w-20 h-[70px] max-md:w-16 max-md:h-16 ml-2 2xl:w-24 2xl:h-24" src={logo} alt="logo of company" />
                    </a>
                    <a className="telephone text-black no-underline font-normal text-base absolute right-16 sm:hidden" href="tel:+998955153030">+998 95 515 30 30</a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="menu-btn w-11 h-11 mr-4 sm:hidden">
                        <i className="bars fa-solid fa-bars text-2xl text-[#264796]"></i>
                    </button>
                    <section className="hidden sm:flex items-center justify-center sm:flex-row gap-2 mr-8">
                        <li className="w-20 h-7 bg-[#264796] rounded-[10px] sm:flex hidden items-center justify-center lg:w-32 lg:h-11 ">
                            <Link className="text-white no-underline text-sm lg:text-xl " to="/" onClick={() => setIsOpen(false)}>{t('Shengen')}</Link>
                        </li>
                        <li className="w-20 h-7 bg-[#264796] rounded-[10px] sm:flex items-center justify-center lg:w-32 lg:h-11 ">
                            <Link className="text-white no-underline text-sm lg:text-xl " to="/aqsh" onClick={() => setIsOpen(false)}>{t('AQSH')}</Link>
                        </li>
                        <li className="w-20 h-7 bg-[#264796] rounded-[10px] sm:flex items-center justify-center lg:w-32 lg:h-11 ">
                            <Link className="text-white no-underline text-sm lg:text-xl " to="/xitoy" onClick={() => setIsOpen(false)}>{t('Xitoy')}</Link>
                        </li>
                        <li className="w-20 h-7 bg-[#264796] rounded-[10px] sm:flex items-center justify-center lg:w-32 lg:h-11 ">
                            <Link className="text-white no-underline text-sm lg:text-xl " to="/yaponiya" onClick={() => setIsOpen(false)}>{t('Yaponiya')}</Link>
                        </li>
                        <li className="w-20 h-7 bg-[#264796] rounded-[10px] sm:flex items-center justify-center lg:w-32 lg:h-11 ">
                            <Link className="text-white no-underline text-sm lg:text-xl " to="/kanada" onClick={() => setIsOpen(false)}>{t('Kanada')}</Link>
                        </li>
                        <select value={languages} onChange={handleChange} className="w-12 h-7 bg-[#264796] text-white text-sm lg:text-xl outline-none border-none rounded-[10px] flex text-center lg:w-20 lg:h-11" name="Lng">
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </section>
                    <section className={`menu fixed top-0 right-0 h-full w-[50%] md:w-[40%] xl:w-[30%] bg-white shadow-lg transform sm:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} z-20 transition-transform duration-500 ease-in-out`}>
                        <div className="w-auto h-auto flex flex-row justify-between items-center p-3">
                            <button onClick={() => setIsOpen(false)} className="fa-solid fa-x text-2xl max-sm:text-lg"></button>
                            <select value={languages} onChange={handleChange} className="w-12 h-7 bg-[#264796] text-white text-sm outline-none border-none rounded-[10px] flex text-center" name="Lng">
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                        </div>
                        <ul className="ul flex flex-col gap-4 text-2xl mt-10 max-sm:text-lg text-start sm:hidden">
                            <li className={`relative flex flex-row gap-2 items-center sm:gap-3`}>
                                <img className="w-12 h-8 rounded-xl" src={eu} alt="european flag" />
                                <Link className="text-[#264796] no-underline" to="/" onClick={() => setIsOpen(false)}>{t('Shengen')}</Link>
                                {pathname === '/' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[200px]' : 'w-0'} h-[2px] bg-[#264796] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <img className="w-12 h-8 rounded-xl" src={us} alt="us flag" />
                                <Link className="text-[#264796] no-underline" to="/aqsh" onClick={() => setIsOpen(false)}>{t('AQSH')}</Link>
                                {pathname === '/aqsh' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[200px]' : 'w-0'} h-[2px] bg-[#264796] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <img className="w-12 h-8 rounded-xl" src={ch} alt="uk flag" />
                                <Link className="text-[#264796] no-underline" to="/xitoy" onClick={() => setIsOpen(false)}>{t('Xitoy')}</Link>
                                {pathname === '/xitoy' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[230px]' : 'w-0'} h-[2px] bg-[#264796] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <img className="w-12 h-8 rounded-xl" src={jp} alt="japanese flag" />
                                <Link className="text-[#264796] no-underline" to="/yaponiya" onClick={() => setIsOpen(false)}>{t('Yaponiya')}</Link>
                                {pathname === '/yaponiya' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[200px]' : 'w-0'} h-[2px] bg-[#264796] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                            <li className={`relative flex flex-row gap-2 items-center`}>
                                <img className="w-12 h-8 rounded-xl" src={can} alt="avstralian flag" />
                                <Link className="text-[#264796] no-underline" to="/kanada" onClick={() => setIsOpen(false)}>{t('Kanada')}</Link>
                                {pathname === '/kanada' && (
                                    <div className={`underline absolute left-3 bottom-[-6px] max-sm:left-0 ${isOpen ? 'w-[200px]' : 'w-0'} h-[2px] bg-[#264796] transition-all duration-[1000ms] ease-in-out`}></div>
                                )}
                            </li>
                        </ul>
                    </section>
                    {isOpen && (
                        <div
                            className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10"
                            onClick={() => setIsOpen(false)}
                        ></div>
                    )}
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="max-sm:px-6">
                <div className="footer container flex flex-col gap-4 justify-center items-center md:flex-wrap lg:justify-between bg-[#020C26] rounded-3xl m-auto my-5 h-auto text-white px-4 py-5 lg:flex-row lg:gap-2 ">
                    <div className="flex md:flex-row gap-3 max-md:flex-col">
                        <section className="contacts w-[250px] h-auto flex flex-col sm:flex-row justify-around max-sm:gap-5">
                            <div className="max-w-[225px] w-full flex flex-col gap-3 max-sm:m-auto">
                                <h1 className="text-lg font-medium uppercase sm:text-xl">{t('kontakt')} :</h1>
                                <div className="flex flex-row items-center gap-3">
                                    <p className="text-lg font-extralight text-white sm:text-xl">Tel:</p>
                                    <div className="flex flex-col gap-1 p-0 w-auto">
                                        <a target="_blank
                                " className="text-lg font-extralight text-white no-underline sm:text-xl" href="tel:+998958233030">+998 95 823 30 30</a>
                                        <a target="_blank" className="text-lg font-extralight text-white no-underline sm:text-xl" href="tel:+998955153030">+998 95 515 30 30</a>
                                    </div>
                                </div>
                                <h1 className="text-lg font-medium uppercase sm:text-xl">{t('ijtimoiy tarmoqlar')} :</h1>
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
                                    {t("Amir Temur shox ko'chasi, Cho'pon ota")} 5A.
                                </a>
                            </div>
                        </section>
                        <section className="form max-w-[250px] w-full h-auto flex flex-col gap-2">
                            <h1 className="text-lg font-medium uppercase sm:text-xl">{t('Ariza qoldirish')}</h1>
                            <form id="myForm" className="w-[250px] h-auto flex flex-col gap-3 ">
                                <input required minLength={3} type="text" placeholder={t("Ismingiz")} className="w-[250px] p-1 outline-none text-black" />
                                <input required minLength={3} type="text" placeholder={t("Familiyangiz")} className="w-[250px] p-1 outline-none text-black" />
                                <input required minLength={9} type="number" placeholder={t("Telefon raqamingiz")} className="w-[250px] p-1 outline-none text-black" />
                                <textarea required minLength={3} className="w-[250px] h-[150px] text-black bg-white py-[10px] pl-[5px] outline-none" placeholder={t("Fikringiz")}></textarea>
                                <button type="submit" className="w-[250px] h-8 bg-[#6687d4] text-black rounded-lg ">
                                    {t('Yuborish')}
                                </button>
                            </form>
                        </section>
                    </div>
                    <div className="p-0 m-auto max-w-[300px] w-full flex justify-center items-center">
                        <iframe
                            src="https://maps.google.com/maps?q=41.349947,69.288288&ll=41.349947,69.288288&z=16&output=embed"
                            className="location max-w-[300px] w-full h-[350px] m-auto border-0 rounded-2xl max-md:h-[150px] max-sm:max-w-[250px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;