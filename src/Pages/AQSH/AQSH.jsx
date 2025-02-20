import usbg from '../../images/usbg.png'
import aqsh1 from '../../images/aqsh1.jpg'

const AQSH = () => {
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
                    AQSH Visasi haqida ma'lumotlar
                </h1>
            </div>
            <section className="sec container m-auto max-md:px-1 flex flex-col md:flex-row gap-2 mt-5 max-sm:px-1 items-center">
                <div className="flex flex-col h-full gap-4 ">
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
            <section className="sec container m-auto max-md:px-1 flex flex-col gap-4 max-sm:px-1 mt-5 items-center">
                <div className="bg-[#264796] w-[100%] h-1 rounded-lg mb-3" ></div>
                <img className="sec-img h-[350px] w-[650px] rounded-3xl mb-3 max-sm:max-w-[450px] max-sm:max-h-[250px] max-sm:w-full max-sm:h-full" src={aqsh1}></img>
                <div className="flex flex-col">
                    <h2 className="sec-text text-lg font-medium sm:text-xl mb-2">
                        <p>Agar siz AQShda viza muddatidan ko’proq qolsangiz nima bo’ladi?</p>
                        <p>1. Agar viza muddati tugaganidan keyin 1 kundan ortiq qolsangiz, keyingi viza olishingizda katta tasir ko’rsatadi.</p>
                        <p>2. Agar viza muddati tugaganidan keyin 180 kundan ortiq qolsangiz, AQSH hududiga 3 yil mobaynida kiritilmasligingiz mumkin.</p>
                        <p>3. Agar viza muddati tugaganidan keyin 1 yildan ortiq qolsangiz, AQSH hududiga 10 yil mobaynida kiritilmasligingiz mumkin.</p>
                    </h2>
                    <div className="bg-[#264796] w-[100%] h-1 rounded-lg mb-4" ></div>
                </div>
            </section>
            <section className="sec container m-auto max-md:px-1 flex flex-col gap-4 max-sm:px-1 items-center">
                <div className="sec-text text-lg font-medium sm:text-xl mb-2">
                    <p>
                        Amerika elchixonasida vizaga murojaat qiluvchilarga beriladigan eng ko‘p uchraydigan savollar (90% li savollar to‘plami):
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>1. Maqsad:</span>
                        <span>• AQShga safaringizning maqsadi nima?</span>
                        <span>• Nega aynan hozir safar qilmoqchisiz?</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>2. Yo‘nalish va joylashuv (Destination details)</span>
                        <span>• AQShning qaysi shahriga bormoqchisiz?</span>
                        <span>• Qaerda bo‘lasiz? (Mehmonxona, qarindosh yoki do‘stning manzili)</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>3. Hamrohlar (Companions)</span>
                        <span>• Yolg‘iz ketyapsizmi yoki kimdir bilanmi?</span>
                        <span>• Agar biror kishi bilan bo‘lsa, u kim bo‘ladi? (Do‘st, qarindosh yoki hamkasb)</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>4. Moliyaviy holat (Financial details)</span>
                        <span>• Safaringiz uchun kim xarajat qiladi?</span>
                        <span>• O‘zingizning daromadingiz qancha?</span>
                        <span>• Ish joyingiz va lavozimingiz nima?</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>5. Oldingi safarlar (Previous travel history)</span>
                        <span>• Oldin boshqa davlatlarga sayohat qilganmisiz?</span>
                        <span>• Oldin AQShga borganmisiz? Agar bo‘lgan bo‘lsangiz, qachon va qanchalik vaqtga?</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>6. Ish joyi va faoliyat (Employment details)</span>
                        <span>• Qaerda ishlaysiz?</span>
                        <span>• Lavozimingiz nima?</span>
                        <span>• Ish beruvchingizning nomi va manzili?</span>
                        <span>• Qancha vaqtdan beri shu joyda ishlaysiz?</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>7. Oylik daromad (Monthly/annual income)</span>
                        <span>• Oylik yoki yillik daromadingiz qancha?</span>
                        <span>• Ish haqingizdan tashqari boshqa daromad manbalaringiz bormi?</span>
                    </p>
                    <p className='flex flex-col gap-2'>
                        <span>8. AQShdagi qarindoshlar yoki do‘stlar (Relatives/Friends in the US)</span>
                        <span>• AQShda qarindoshingiz bormi?</span>
                        <span>• Agar bo‘lsa, ular kim va qaerda yashaydi?</span>
                        <span>• AQShda sizni kim kutib oladi yoki kim bilan bo‘lasiz?</span>
                    </p>
                </div>
                <div className="bg-[#264796] w-[100%] h-1 rounded-lg mb-4" ></div>
            </section>
        </>
    )
}

export default AQSH