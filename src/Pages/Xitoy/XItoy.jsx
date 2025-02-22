import chbg from '../../images/chbg.webp'
import xitoy from '../../videos/xitoy.mp4'
import chvid from '../../videos/chvid.mp4'
import { useTranslation } from 'react-i18next'

const Xitoy = () => {

    const { t } = useTranslation()

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
                    {t("Xitoy Visasi haqida ma'lumotlar")}
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col lg:flex-row gap-4 max-sm:px-1 items-center">
                <video controls className="sec-video h-[90vh] rounded-3xl mt-5" src={xitoy}></video>
                <div className="flex flex-col min-h-[350px] justify-evenly">
                    <h2 className="sec-text text-lg font-medium sm:text-xl ">
                        <p className='text-center font-semibold text-[#264796] text-2xl sm:text-4xl'>{t("Xitoy davlatiga istalgan turdagi Viza  xizmatlari  kerak bo'lsa hoziroq bizga murojat qiling!")}</p>
                        <p>• {t("Birinchi marotaba borayotgan bo’lsanggiz 7-10 kun oralig’ida o’z vizanggizga ega bo’lasiz.")}</p>
                        <p>• {t('Oldin Xitoy davlatiga borib kelgan bo’lsanggiz 3-5 kunda o’z vizanggizga ega bo’lasiz.')}</p>
                        <p>• {t('Viza berish  ehtimoli 100%')}</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg"></div>
                </div>
            </section>
            <section className="sec2 container m-auto max-md:px-1 flex flex-col lg:flex-row gap-4 max-sm:px-1 items-center">
                <video controls className="sec-video h-[90vh] rounded-3xl md:ml-6 xl:ml-0 mt-4" src={chvid}></video>
                <div className="flex flex-col min-h-[350px] justify-evenly px-2">
                    <div className="sec2-text text-lg font-medium sm:text-xl px-2">
                        <p className='text-center font-semibold text-[#264796] text-2xl sm:text-4xl'>{t("Agarda sizga ham Xitoy vizasi kerak bo'lsa hoziroq bizga murojat qiling!")}</p>
                        <p>• {t('Viza tarixi talab qilmaydi.')}</p>
                        <p>• {t('7 kunda tasdiqlanadi')}</p>
                        <p>• {t('3 oy   muddatga beriladi, 30 kun yurish ruxsati bilan')}</p>
                    </div>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg" ></div>
                </div>
            </section>
        </>
    )
}

export default Xitoy