import usbg from '../../images/usbg.png'
import aqsh1 from '../../images/aqsh1.jpg'
import { useTranslation } from 'react-i18next'

const AQSH = () => {

    const { t } = useTranslation()

    return (
        <>
            <div className='main w-full h-[80vh] flex justify-center items-center mt-14'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${usbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <h1 className="main-text max-w-[500px] text-3xl text-center text-white bg-black uppercase bg-opacity-50 font-semibold leading-[1.2] px-4 py-3 rounded-2xl max-md:max-w-[350px] max-md:text-xl ">
                    {t("AQSH Visasi haqida ma'lumotlar")}
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-2 mt-5 max-sm:px-1 items-center">
                <div className="flex flex-col h-full gap-4 ">
                    <h1 className="text-center font-semibold text-[#264796] text-2xl sm:text-4xl">
                        {t("AQSHga borish uchun vizalar 2 xil asosiy toifaga bo'linadi")}:
                    </h1>
                    <div className="sec-text text-lg font-medium sm:text-xl ">
                        <p>
                            1. {t("Immigrant (muhojir) vizalar. Bu xuddi Germaniyaga olinadigan D toifadagi milliy vizalarga o'xshash. Ya'ni agar siz AQSHga doimiy yashash uchun bormoqchi bo'lsangiz, u holda shu toifadagi vizalarni olishingiz kerak. Immigrant vizalarga quyidagilarni misol qilib keltirish mumkin")}:
                        </p>
                        <p>
                            1.1 {t("AQSH fuqarosi bilan oila birlashtirish vizasi (turmush o'rtoqlar va 21 yoshga to'lmagan farzandlar uchun)")}
                        </p>
                        <p>
                            1.2. {t("Ish bilan bog'liq vizalar (yuqori iste'dod egalariga, professorlarga, managerlarga, diniy ishchilarga, investorlarga beriladigan vizalar)")}
                        </p>
                        <p>
                            1.3. {t("Diversity Visa (hammamiz viladigan green card).")}
                        </p>
                    </div>
                </div>
            </section>
            <section className="sec container m-auto max-md:px-1 flex flex-col gap-4 max-sm:px-1 mt-5 items-center">
                <div className="bg-[#264796] w-[100%] h-1 rounded-lg mb-3" ></div>
                <img className="sec-img h-[350px] w-[650px] rounded-3xl mb-3 max-sm:max-w-[450px] max-sm:max-h-[250px] max-sm:w-full max-sm:h-full" src={aqsh1}></img>
                <div className="flex flex-col">
                    <h2 className="sec-text text-lg font-medium sm:text-xl mb-2">
                        <p className='text-center font-semibold text-[#264796] text-2xl sm:text-4xl'>{t("Agar siz AQShda viza muddatidan ko’proq qolsangiz nima bo’ladi?")}</p>
                        <p>1. {t("Agar viza muddati tugaganidan keyin 1 kundan ortiq qolsangiz, keyingi viza olishingizda katta tasir ko’rsatadi.")}</p>
                        <p>2. {t("Agar viza muddati tugaganidan keyin 180 kundan ortiq qolsangiz, AQSH hududiga 3 yil mobaynida kiritilmasligingiz mumkin.")}</p>
                        <p>3. {t('Agar viza muddati tugaganidan keyin 1 yildan ortiq qolsangiz, AQSH hududiga 10 yil mobaynida kiritilmasligingiz mumkin.')}</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg mb-4" ></div>
                </div>
            </section>
            <section className="sec container m-auto max-md:px-1 flex flex-col gap-4 max-sm:px-1 items-center">
                <div className="sec-text text-lg font-medium sm:text-xl mb-2">
                    <p className='text-center font-semibold text-[#264796] text-2xl sm:text-4xl'>
                        {t("Amerika elchixonasida vizaga murojaat qiluvchilarga beriladigan eng ko‘p uchraydigan savollar (90% li savollar to‘plami)")}:
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>1. {t('Maqsad')}:</span>
                        <span>• {t('AQShga safaringizning maqsadi nima?')}</span>
                        <span>• {t('Nega aynan hozir safar qilmoqchisiz?')}</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>2. {t("Yo‘nalish va joylashuv")}</span>
                        <span>• {t("AQShning qaysi shahriga bormoqchisiz?")}</span>
                        <span>• {t("Qayerda bo‘lasiz? (Mehmonxona, qarindosh yoki do‘stning manzili)")}</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>3. {t('Hamrohlar')}</span>
                        <span>• {t("Yolg‘iz ketyapsizmi yoki kimdir bilanmi?")}</span>
                        <span>• {t("Agar biror kishi bilan bo‘lsa, u kim bo‘ladi? (Do‘st, qarindosh yoki hamkasb)")}</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>4. {t('Moliyaviy holat')}</span>
                        <span>• {t("Safaringiz uchun kim xarajat qiladi?")}</span>
                        <span>• {t("O‘zingizning daromadingiz qancha?")}</span>
                        <span>• {t("Ish joyingiz va lavozimingiz nima?")}</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>5. {t('Oldingi safarlar')}</span>
                        <span>• {t("Oldin boshqa davlatlarga sayohat qilganmisiz?")}</span>
                        <span>• {t("Oldin AQShga borganmisiz? Agar bo‘lgan bo‘lsangiz, qachon va qanchalik vaqtga?")}</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>6. {t('Ish joyi va faoliyat')}</span>
                        <span>• {t('Qayerda ishlaysiz?')}</span>
                        <span>• {t('Lavozimingiz nima?')}</span>
                        <span>• {t('Ish beruvchingizning nomi va manzili?')}</span>
                        <span>• {t('Qancha vaqtdan beri shu joyda ishlaysiz?')}</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>7. {t('Oylik daromad')}</span>
                        <span>• {t('Oylik yoki yillik daromadingiz qancha?')}</span>
                        <span>• {t('Ish haqingizdan tashqari boshqa daromad manbalaringiz bormi?')}</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>8. {t('AQShdagi qarindoshlar yoki do‘stlar')}</span>
                        <span>• {t('AQShda qarindoshingiz bormi?')}</span>
                        <span>• {t("Agar bo‘lsa, ular kim va qaerda yashaydi?")}</span>
                        <span>• {t("AQShda sizni kim kutib oladi yoki kim bilan bo‘lasiz?")}</span>
                    </p>
                </div>
                <div className="bg-[#264796] w-[100%] h-1 rounded-lg mb-4" ></div>
            </section>
        </>
    )
}

export default AQSH