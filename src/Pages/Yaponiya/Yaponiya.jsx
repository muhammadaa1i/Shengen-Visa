import jbg from '../../images/jbg.webp'

const Yaponiya = () => {
    return (
        <>
            <div className='main w-full h-[80vh] flex justify-center items-center mt-14'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${jbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "center"
                }}>
                <h1 className="main-text max-w-[500px] text-3xl text-center text-white bg-black uppercase bg-opacity-50 font-semibold leading-[1.2] px-4 py-3 rounded-2xl max-md:max-w-[350px] max-md:text-xl ">
                    Yaponiya Visasi haqida ma'lumotlar
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-4 max-sm:px-1 items-center mt-5">
                <div className="flex flex-col min-h-[350px] justify-evenly">
                    <h2 className="sec-text text-lg font-medium sm:text-xl ">
                        <p>Dunyoda eng kuchli pasport qaysi davlatniki bilasizmi?</p>
                        <p>• Bu pasport bilan siz Dunyoning 193 ta davlatiga vizasiz tashrif buyurishungiz mumkin.</p>
                        <p>• Hattoki eng topda turadigan rivojlangan davlatlarga ham.
                            Albatta savol tug’ilida “Qanday qilib Yaponiya visasini olish mumkin?" </p>
                        <p>1. Yaponiya fuqarosi bilan turmush qurib.</p>
                        <p>2. Yaponiyada 5 yildan ortiq qonuniy yashab ,ishlab  va boshqa talablarni bajarib.</p>
                        <p>3. Biz orqali.</p>
                        <p>Biz bilan bog’laning, sizga yordam beramiz!</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
        </>
    )
}

export default Yaponiya