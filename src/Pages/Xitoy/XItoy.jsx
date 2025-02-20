import chbg from '../../images/chbg.webp'
import xitoy from '../../videos/xitoy.mp4'

const Xitoy = () => {
    return (
        <>
            <div className='main w-full h-[80vh] flex justify-center items-center mt-14'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${chbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className="main-text max-w-[500px] text-3xl text-center text-white bg-black uppercase bg-opacity-50 font-semibold leading-[1.2] px-4 py-3 rounded-2xl max-md:max-w-[350px] max-md:text-xl ">
                    Xitoy Visasi haqida ma`lumotlar
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-4 max-sm:px-1 items-center">
                <video controls className="sec-video h-[90vh] rounded-3xl mt-5" src={xitoy}></video>
                <div className="flex flex-col min-h-[350px] justify-evenly">
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                    <h2 className="sec-text text-lg font-medium sm:text-xl ">
                        <p>Xitoy davlatiga istalgan turdagi Viza  xizmatlari  kerak bo`lsa hoziroq bizga murojat qiling!</p>
                        <p>• Birinchi marotaba borayotgan bo’lsanggiz 7-10 kun oralig’ida o’z vizanggizga ega bo’lasiz.</p>
                        <p>• Oldin Xitoy davlatiga borib kelgan bo’lsanggiz 3-5 kunda o’z vizanggizga ega bo’lasiz.</p>
                        <p>• Viza berish  ehtimoli 100%</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
            <section className="sec2 container m-auto max-md:px-1 flex flex-col md:flex-row gap-4 max-sm:px-1 items-center">
                <div className="flex flex-col min-h-[350px] justify-evenly px-2">
                    <h2 className="sec2-text text-lg font-medium sm:text-xl px-2">
                        <p>Agarda sizga ham Xitoy vizasi kerak bo`lsa hoziroq bizga murojat qiling!</p>
                        <p>• Viza tarixi talab qilmaydi.</p>
                        <p>• 7 kunda tasdiqlanadi</p>
                        <p>• 3 oy   muddatga beriladi, 30 kun yurish ruxsati bilan</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
        </>
    )
}

export default Xitoy