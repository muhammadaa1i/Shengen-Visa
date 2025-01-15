import usbg from '../../images/usbg.png'

const AQSH = () => {
    return (
        <>
            <div className='main w-full h-[80vh] flex justify-center items-center mt-14'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${usbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "center"
                }}>
                <h1 className="main-text max-w-[500px] text-3xl text-center text-white bg-black uppercase bg-opacity-50 font-semibold leading-[1.2] px-4 py-3 rounded-2xl max-md:max-w-[350px] max-md:text-xl ">
                    AQSH Visasi haqida ma'lumotlar
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-2 mt-5 max-sm:px-1 items-center">
                <div className="flex flex-col min-h-[650px] h-full gap-4 ">
                    <h1 className="text-center font-semibold text-[#264796] text-4xl">
                        AQSHga borish uchun vizalar 2 xil asosiy toifaga bo'linadi:
                    </h1>
                    <div className="sec-text text-lg font-medium sm:text-xl ">
                        <p>
                            1. Immigrant (muhojir) vizalar. Bu xuddi Germaniyaga olinadigan D toifadagi milliy vizalarga o'xshash. Ya'ni agar siz AQSHga doimiy yashash uchun bormoqchi bo'lsangiz, u holda shu toifadagi vizalarni olishingiz kerak. Immigrant vizalarga quyidagilarni misol qilib keltirish mumkin:
                        </p>
                        <p>
                            1.1 AQSH fuqarosi bilan oila birlashtirish vizasi (turmush o'rtoqlar va 21 yoshga to'lmagan farzandlar uchun)
                        </p>
                        <p>
                            1.2. Ish bilan bog'liq vizalar (yuqori iste'dod egalariga, professorlarga, managerlarga, diniy ishchilarga, investorlarga beriladigan vizalar)
                        </p>
                        <p>
                            1.3. Diversity Visa (hammamiz viladigan green card).
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AQSH