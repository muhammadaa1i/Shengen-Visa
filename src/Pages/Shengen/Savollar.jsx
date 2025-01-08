import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'

const Savollar = () => {
    return (
        <div>
            <Accordion className='border-2 border-gray-300 rounded-lg'>
                <Accordion.Item eventKey="0" className='border-b-2 border-gray-300'>
                    <Accordion.Header className='border-b-2 border-gray-300'>
                        <h6>
                            Hujjatlar yetarli emas.
                        </h6>
                    </Accordion.Header>
                    <Accordion.Body className='border-b-2 border-gray-300'>
                        <p className='font-medium'>
                            Eng keng tarqalgan sabab. Har bir viza uchun hujjatlar ro‘yxati har hil bo'ladi  – agar siz talab qilinayotgan barcha hujjatlarni to’liq va to’g’ri ravishda topshirmasangiz sizga viza berilmasligi mumkin.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='border-b-2 border-gray-300'>
                    <Accordion.Header className='border-b-2 border-gray-300'>
                        <h6>
                            Hujjatlar juda eski.
                        </h6>
                    </Accordion.Header>
                    <Accordion.Body className='border-b-2 border-gray-300'>
                        <p className='font-medium'>
                            Ba'zi mamlakatlarda maxsus talablar mavjud - masalan, hujjatlarni topshirishdan kamida 6 oy oldin su'ratga olish mumkin, bankdan ko'chirma esa ko'pi bilan 1 oy oldin olinishi mumkin.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='border-b-2 border-gray-300'>
                    <Accordion.Header className='border-b-2 border-gray-300'>
                        <h6>
                            Oldingi sayohatlar.
                        </h6>
                    </Accordion.Header>
                    <Accordion.Body className='border-b-2 border-gray-300'>
                        <p className='font-medium'>
                            Bu yerda vaziyat 2 hil. Agar sizda allaqachon ko'p vizalar bo'lsa, yangisini olish imkoniyati yuqoriroq, agar yo'q bo'lsa, pastroq.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='border-b-2 border-gray-300'>
                    <Accordion.Header className='border-b-2 border-gray-300'>
                        <h6>
                            Qonun bilan bog'liq muammolar.
                        </h6>
                    </Accordion.Header>
                    <Accordion.Body className='border-b-2 border-gray-300'>
                        <p className='font-medium'>
                            Mamlakatda jinoiy ish yuritish, migratsiya qoidalarini buzish va deportatsiya qilish, xorijda to‘lanmagan yo‘l jarimalari viza olishga to‘sqinlik qiladi. Migratsiya qoidalariga rioya qilish ayniqsa muhimdir.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Savollar