// import shvideo1 from "../../videos/shvideo1.mp4"
import '../../fonts/Fonts.css'
import Accordion from "./Savollar"
import shbg from '../../images/shbg1.jpg'

const Shengen = () => {
    return (
        <>
            <div
                className='w-full h-[80vh] flex justify-center items-center'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${shbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "center"
                }}>
                <h1 className="max-w-[500px] text-3xl text-center text-white bg-black uppercase bg-opacity-50 font-semibold leading-[1.2] px-4 py-3 rounded-2xl">
                    Shengen Visa haqida ma'lumotlar
                </h1>
                <section className="flex flex-row gap-4 max-sm:px-1">
                    {/* <video controls className="h-[60vh] sm:h-[70vh] rounded-2xl" src={shvideo1}></video> */}
                    {/* <h2 className="text-lg font-medium text-white">
                        EU Shengen hududi o‘zi nima va u nega kerak?
                        Shengen hududini tuzish 1985-yil 14-iyunda Yevropa Ittifoqining beshta davlati — Fransiya, Germaniya, Belgiya, Niderlandiya va Lyuksemburg o‘rtasida hukumatlararo loyiha sifatida boshlangan va asta-sekin dunyoning erkin sayohat hududiga aylangan. Shengen — bu Lyuksemburgdagi Germaniya va Fransiya bilan chegaradosh kichik qishloq nomi, u yerda 1985−1990 yillarda Shengen shartnomasi va konvensiyasi imzolangan.

                        Bu viza turi Shengen davlatlariga erkin kirish, bir mamlakatdan boshqasiga sayohatni chegara nazoratisiz amalga oshirish huquqini beradi.
                    </h2> */}
                </section>
            </div>
            <div className="container m-auto">
                <h1 className="text-center font-semibold text-[#264796] py-3 text-4xl">
                    Nima uchun Viza rad etilishi mumkin?
                </h1>
                <Accordion />
                <h1 className="text-center text-[#264796] py-3 text-4xl">
                    Shengen Visalari necha foizi maqullangan?
                </h1>
            </div>
        </>
    )
}

export default Shengen