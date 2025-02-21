import shvideo1 from "../../videos/shvideo1.mp4"
import shvideo2 from '../../videos/shvideo2.mp4'
import '../../fonts/Fonts.css'
import Accordion from "./Savollar"
import shbg from '../../images/shengenbg.jpg'
import '../Shengen/Shengen.css'

const Shengen = () => {
    return (
        <>
            <div
                className='main w-full h-[80vh] flex justify-center items-center mt-14'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${shbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className="main-text max-w-[500px] text-3xl text-center text-white bg-black uppercase bg-opacity-50 font-semibold leading-[1.2] px-4 py-3 rounded-2xl max-md:max-w-[350px] max-md:text-xl ">
                    Shengen Visa haqida ma'lumotlar
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-4 max-sm:px-1 mt-5 items-center">
                <video controls className="sec-video h-[90vh] rounded-3xl" src={shvideo1}></video>
                <div className="flex flex-col min-h-[650px] my-3 justify-evenly">
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                    <h2 className="sec-text text-lg font-medium sm:text-xl ">
                        EU Shengen hududi o‘zi nima va u nega kerak?
                        <br />
                        Shengen hududini tuzish 1985-yil 14-iyunda Yevropa Ittifoqining beshta davlati - Fransiya, Germaniya, Belgiya, Niderlandiya va Lyuksemburg o‘rtasida hukumatlararo loyiha sifatida boshlangan va asta-sekin dunyoning erkin sayohat hududiga aylangan. Shengen - Lyuksemburgdagi Germaniya va Fransiya bilan chegaradosh kichik qishloq nomi, u yerda 1985−1990 yillarda Shengen shartnomasi va konvensiyasi imzolangan.
                        <br />
                        Bu viza turi Shengen davlatlariga erkin kirish, bir mamlakatdan boshqasiga sayohatni chegara nazoratisiz amalga oshirish huquqini beradi.
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
            <div className="container m-auto mt-5">
                <h1 className="text-center font-semibold text-[#264796] py-3 text-2xl sm:text-4xl">
                    Nima uchun Viza rad etilishi mumkin?
                </h1>
                <Accordion />
                <h1 className="text-center text-[#264796] font-semibold mt-2 py-3 text-2xl sm:text-4xl">
                    Shengen Visalari necha foizi maqullangan?
                </h1>
                <h2 className="sec-text text-lg font-medium sm:text-xl max-sm:mx-6 ">
                    Yevrokomissiya 2023-yil uchun Shengen vizalarini berish natijalarini sarhisob qildi:
                    <br />
                    Shengen viza bo‘yicha murojaatlarning umumiy soni 37 foizga oshib, 10,3 million arizaga yetgan. So‘rovlar soni bo‘yicha birinchi 5 davlat:
                    <br />
                    Xitoy (1,1 million kishi)
                    <br />
                    Turkiya (1,05 million kishi)
                    <br />
                    Hindiston (966 ming kishi)
                    <br />
                    Marokash (591 ming kishi)
                    <br />
                    Rossiya (520 ming kishi).
                    <br />
                    Roʻyxatdan oʻtishdagi qiyinchiliklar, mamlakatlar boʻyicha yangi cheklovlar (Finlyandiyadan berishni toʻliq taqiqlash, Germaniya vizalarini olishning murakkabligi) tufayli murojaat etuvchilar soni deyarli 25% ga kamygani kuzatildi.
                </h2>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-4 max-sm:px-1 mt-5 items-center">
                <video controls className="sec-video h-[90vh] rounded-3xl" src={shvideo2}></video>
                <div className="flex flex-col min-h-[650px] my-3 justify-evenly">
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                    <h2 className="sec-text text-lg font-medium sm:text-xl ">
                        Shengen vizasi safar maqsadiga ko’ra 2 kotegoriyada – А va С – beriladi (A va C kategoriyalarda beriladi)
                        <br />
                        • A kotegoriyasidagi viza Shengen davlati aeropoti xalqaro tranzit hududidan o’tishga mo’ljallangan bo’lib, u Shengen kelishuvi a’zo davlatlarining to’g’ridan to’g’ri hududlariga kirish huquqini bermaydi.
                        <br />
                        • C kotegoriyasidagi viza Shengen kelishuvi a’zo davlatlari bo’lgan 1 yoki undan ko’p mamlakatlarida bo’lish hohishini bildirgan yoki tranzit orqali bir davlatdan ikkinchi davlatga o’tish istagi bor fuqarolar uchun beriladi.
                        <br />
                        Uzoq muddatli viza – kategoriya D
                        <br />
                        Latviyada yarim yil mobaynida 90 kundan ortiq turish zarur bo’lgan chet el fuqarosi uzoq muddatli viza (yoki вид на жительство) rasmiylashtirishi lozim.
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
        </>
    )
}

export default Shengen