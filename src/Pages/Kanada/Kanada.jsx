import canbg from '../../images/canbg.jpg'
import canvid from '../../videos/canvid.mp4'

const Kanada = () => {
    return (
        <>
            <div className='main w-full h-[80vh] flex justify-center items-center mt-14'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${canbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className="main-text max-w-[500px] text-3xl text-center text-white bg-black uppercase bg-opacity-50 font-semibold leading-[1.2] px-4 py-3 rounded-2xl max-md:max-w-[350px] max-md:text-xl ">
                    Kanada Visasi haqida ma`lumotlar
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-4 max-sm:px-1 mt-5 items-center">
                <video controls className="sec-video h-[90vh] rounded-3xl" src={canvid}></video>
                <div className="flex flex-col min-h-[650px] my-3 justify-evenly">
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                    <h2 className="sec-text text-lg font-medium sm:text-xl ">
                        <p>Kanada davlati butun dunyo bo‘ylab juda ko‘plab talabalarning yashash va ta’lim olish uchun ideal mamlakatlardan biri hisoblanadi.</p>
                        <p>Buni chuqur anglagan Kanada davlati hukumati ham xalqaro talabalar uchun Kanada davlatida ta’lim olishlari uchun juda ko‘plab imkoniyatlarni taqdim etib kelmoqda.</p>
                        <p> Albatta, bunday imkoniyatlardan to‘liq foydalana olish uchun talabalar avvalo Kanada davlatiga talaba sifatida kirib olishlari kerak.</p>
                        <p>Bu esa Kanada talabalik vizasini qo‘lga kiritish orqali amalga oshiriladi.</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
            <section className="sec2 container m-auto max-md:px-1 flex flex-col md:flex-row gap-4 max-sm:px-1 items-center">
                <div className="flex flex-col min-h-[350px] justify-evenly px-2">
                    <h2 className="sec2-text text-lg font-medium sm:text-xl px-2 mt-5">
                        <p className='text-center font-semibold text-[#264796] text-2xl sm:text-4xl'>KANADA turistlik vizasini ishchi vizaga alishtirsa bo’ladimi?</p>
                        <p>• Kanada hukumatining 2020-2024 avgustdagi qaroriga muvofiq Kanadadagi sayohatchilar Kanadada turgan holatda ishlashga ruhsatnomaga topshirishlari mumkin. Buni birinchi talabi, sizga ish beruvchi ishga taklifnoma berishi kerak.</p>
                        <p>• Undan tashqari albatta sizga ingliz tili yo fransuz tili kerak bo’ladi. Siz buni 100 foiz bilishingiz shart emas. Sizda 4 ielts bo’lishi kerak.</p>
                        <p>• Bu qaror kanadaga tashrif buyurgan mehmonlarni qonuni buzmasdan turib qonuniy tarzda kanada ishlashga imkoniyat yaratdi.</p>
                        <p>Bemalol Kanadaga turist viza bilan borib qonuniy tarzda ishchi vizaga o’tkazish mumkin.</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
        </>
    )
}

export default Kanada