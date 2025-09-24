"use client";

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export function BackgroundSlider() {
  const images = ["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"];
  return (
    <div className="absolute inset-0 z-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={src}
              alt={`Background ${idx}`}
              fill
              className="object-cover brightness-50"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <BackgroundSlider />
          {/* <Image src={images[currentIndex]} alt="Лицей Ақбөбек" fill className="object-cover brightness-50" priority /> */}
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Aqbobek Lyceum</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Батыс өңірінде теңдесі жоқ, дарынды балаларға арналған IT бағытындағы лицей-интернат
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#admission"
              className="bg-[#59007A] hover:bg-[#FF9C2E] text-white px-6 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center"
            >
              Лицейге қабылдау <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#about"
              className="bg-white hover:bg-gray-100 text-[#59007A] px-6 py-3 rounded-md font-medium text-lg transition-colors flex items-center justify-center"
            >
              Толық ақпарат
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Лицей туралы</h2>
            <div className="h-1 w-20 bg-[#59007A] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mission | Vision | Values</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><b>Mission:</b> Цифрлық дәуірде жаңалықтар ашуға шабыт береміз</li>
                <li><b>Vision:</b> Цифрлық технологиялар арқылы білім беретін “Үлкен әлеует” мектебі боламыз</li>
                <li><b>Values:</b> Сенім. Ұйымшылдық. Құрмет. Жауапкершілік. Адалдық. Табандылық. Ашықтық.</li>
              </ul>
              <br/><br/>
              <h3 className="text-2xl font-semibold mb-4">Не үшін «Ақбөбек» лицейі?</h3>
              <p className="text-gray-700 mb-4">
                «Ақбөбек» лицейі — заманауи білім беру талаптарына толықтай сай, оқушы 
                тұлғасының жан-жақты дамуына жағдай жасайтын білім ордасы. Біз сапалы 
                білім берумен қатар, әр баланың дарыны мен қабілетін ашуға бағытталған 
                жеке тәсілді ұстанамыз.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Жоғары білім сапасы: пәндерді тереңдетіп оқыту, тәжірибелі ұстаздар құрамы және үздік білім беру әдістемелері</li>
                <li>Цифрлық орта: заманауи технологиялар мен интерактивті платформаларды қолдану арқылы білім беру үрдісі тиімді және қызықты өтеді</li>
                <li>Дарынды балаларды қолдау: олимпиадаларға, ғылыми жобаларға қатысуға бағытталған арнайы бағдарламалар</li>
                <li>Қауіпсіз және қолайлы орта: оқушылардың денсаулығы мен қауіпсіздігі басты назарда</li>
                <li>Тәрбиелеу мен құндылықтар: білім мен тәрбиені ұштастыра отырып, ұлттық рухы биік, жан-жақты тұлға қалыптастыру</li>
              </ul>
              <p className="text-gray-700 mb-4">
              «Ақбөбек» лицейі — балаңыздың табысты болашағының кепілі! Бізбен бірге білім әлеміне сенімді қадам жасаңыз!
              </p>
            </div> 

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                <Image src="/final.jpg" alt="Директор лицея" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Директордың Үндеуі</h3>
              <p className="text-gray-700">Құрметті ата-аналар мен қымбатты оқушылар, «Aqbobek Lyceum» ресми сайтына қош келдіңіз!</p>
              <p className="text-gray-700">
                Біздің білім беру қауымдастығына қызығушылық танытқандарыңызға қуаныштымыз! 
                Біздің лицейде әр бала қолдауды сезінеді! Біз әр оқушы үшін сенімділікті арттырып, дамуға мүдделі орта қалыптастырудамыз. 
                Біздің лицейде математикаға, ағылшын тіліне және ақпараттық технологияларға ерекше назар аударылады, 
                өйткені біз білім мен болашақтың жоғары білім стандарттарының күшіне сенеміз! 
                Біз ұлағатты ұстаздарымызбен мақтанамыз!  Шәкірттерт тәрбиелеудегі, батыл және жауапты қадам жасай алатын, 
                білімді әрі белсенді көшбасшы буынды қалыптастырудағы ізгілікті істерімізді мақтан тұтамыз!
              </p>
              <p className="text-gray-700 mb-4">Ерекше зейіндеріңізге зор  рақмет! Жақын арада кездесетінімізге үмітіміз зор!</p>
              <p className="font-medium">Үлкен құрметпен, Боранғали Д. Қ.</p>
              <p className="font-medium">«Aqbobek Lyceum» директоры </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Білім Беру</h2>
            <div className="h-1 w-20 bg-[#59007A] mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              Наши образовательные программы разработаны для учеников 7-11 классов и направлены на углубленное изучение
              ключевых предметов с акцентом на практическое применение знаний.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-[#C574E4] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#59007A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Орта Мектеп (7-9 сынып)</h3>
              <p className="mt-4 mb-4 text-gray-700 max-w-3xl mx-auto">
                Орта буын оқушылары білім берудің мемлекеттік бағдарламасы бойынша оқиды. 
                Бұл бағдарлама оқушылардың жан-жақты дамуына және базалық білім алуға бағытталған. 
                Негізгі оқу бағдарламасына қоса, сабақ кестесіне төмендегі қосымша сағаттар енгізілген: 
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#59007A] mr-2">•</span>
                  <span>
                    <strong>Ағылшын тілі:</strong> аптасына 2 сағат
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#59007A] mr-2">•</span>
                  <span>
                    <strong>Математика:</strong> аптасына 2 сағат
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#59007A] mr-2">•</span>
                  <span>
                    <strong>Информатика:</strong> аптасына 1 сағат 
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
                Аталған пәндер арқылы оқушылар IT саласымен ерте танысып, логикалық ойлау және практикалық дағдыларды меңгереді. 
                Жобалық сабақтарда оқушылар командамен жұмыс істеуді, креативті ойлауды және өз идеяларын іске асыруды үйренеді. 
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-[#C574E4] rounded-full flex items-center justify-center mb-4">      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#59007A]"
                  fill="none"
                  viewBox="0 0 16 16"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.25 9.25V6L8 2.75L1.75 6L8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Жоғары Мектеп (10-11 сынып)</h3>
              <p className="mt-4 text-gray-700 max-w-3xl mb-4 mx-auto">
                Жоғары сынып оқушыларына арналған оқу бағдарламасы олардың кәсіби және академиялық бағдарын нақтылап, болашаққа мақсатты түрде дайындалуына мүмкіндік береді. 
                Бағдарлама мазмұны қазіргі заман талабына сай құрылып, оқушылардың жан-жақты дамуын көздейді. 
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#59007A] mr-2">•</span>
                  <span>
                    <strong>ҰБТ-ге жүйелі дайындық:</strong> Оқушылар өз таңдауы бойынша бейіндік пәндерді тереңдетіп оқиды. 
                    Апталық кестеге ҰБТ-ге бағытталған арнайы сабақтар енгізілген. 
                    Сабақтарда: Тест стратегияларын меңгеру, Уақытың тиімді басқару әдістері, Практикалық сынақ тесттер ұйымдастырылады.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#59007A] mr-2">•</span>
                  <span>
                    <strong>IELTS, SAT халықаралық емтихандарға дайындық:</strong> Мектеп бағдарламасы халықаралық стандарттарға бейімделген. 
                    Тілге қабілеті жоғары оқушылар үшін: IELTS, SAT секілді халықаралық емтихандарға бағытталған курстар өткізіледі, 
                    Академиялық ағылшын тілі тереңдетіліп оқытылады, Motivational letter жазуға назар аударылады.
                  </span>
                </li>
                {/* <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Психолог сағаты — аптасына 1 рет:</strong> Әр аптада оқушылар мектеп психологымен жеке және топтық жұмыс жүргізеді. 
                    Бұл сабақтардың мақсаты: Эмоционалды тұрақтылықты сақтау, Стресспен күрес тәсілдерін үйрету, Өзін-өзі тану мен сенімділікті арттыру,
                    Кәсіптік бағдар беру.
                  </span>
                </li> */}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-[#C574E4] rounded-full flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8"
                viewBox="0 0 24 24">
                <path  
                  fill="#59007A"   
                  fill-rule="evenodd" 
                  clip-rule="evenodd"
                  d="M12 3a2 2 0 0 0-1 3.732V8H8c-3.2 0-4 2.667-4 4v7c0 .667.4 2 2 2h1v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4h1c1.6 0 2-1.333 2-2v-7c0-3.2-2.667-4-4-4h-3V6.732A2 2 0 0 0 12 3m3 18v-3h-2v3zm-4 0v-3H9v3zm10-3v-5c.667 0 2 .4 2 2v1c0 .667-.4 2-2 2M3 13v5c-1.6 0-2-1.333-2-2v-1c0-1.6 1.333-2 2-2m6-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2zm5 1a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1"
                />
              </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Үйірмелер мен Бірлестіктер</h3>
              <p className="text-gray-700 mb-4">
                "Ақбөбек" лицейі оқушыларға заман талабына сай білім мен тәжірибе алуға ерекше жағдай жасайды. 
                Бүгінгі таңда лицейімізде IT бағытында келесі 3 тегін үйірмеге тіркелу мүмкіндігі бар: 
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Web-бағдарламалау</strong> – Оқушылар HTML, CSS және JavaScript негіздерін меңгеріп, өздерінің алғашқы веб-сайттарын жасайды.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Arduino</strong> – Робототехника және электроника саласына қызығатындар үшін таптырмас орта. Оқушылар датчиктер мен микроконтроллерлерді қолдана отырып, түрлі жобалар жасайды.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>3D-модельдеу</strong> – Заманауи графикамен жұмыс істеуді, үш өлшемді нысандарды жобалап, оларды 3D-принтерде басып шығаруды үйренеді.</span>
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Бұдан бөлек, лицейде шығармашылық пен әлеуметтік белсенділікке арналған 🎨Art Club және 🤝“Şyraq” волонтерлар қозғалысы жұмыс істейді.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Преподаватели и Кураторы</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              Наша команда состоит из опытных педагогов, увлеченных своим делом и готовых поделиться знаниями с
              учениками.
            </p>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {/* Teacher 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image src="/final.jpg" alt="Преподаватель математики" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Боранғали Даулет Қанатұлы</h3>
                <p className="text-blue-600 mb-2">Лицей директоры</p>
                <p className="text-gray-700 text-sm">
                  Байланыс түрлері: почта - borangali_daulet@akbobek.kz, телефон номері - 8-778-455-65-97
                </p>
              </div>
            </div>

            {/* Teacher 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image src="/images/teacher2.jpg" alt="Преподаватель английского языка" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Бозшин Бекболат Қанатұлы</h3>
                <p className="text-blue-600 mb-2">Лицей директорының оқу ісі жөніндегі орынбасары</p>
                <p className="text-gray-700 text-sm">
                  Байланыс түрлері: почта - bozshin_bekbolat@akbobek.kz, телефон номері - 8-702-940-48-71
                </p>
              </div>
            </div>

            {/* Teacher 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image src="/images/teacher3.jpg" alt="Преподаватель информатики" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Қайдасов Жасұлан Нұрланұлы</h3>
                <p className="text-blue-600 mb-2">Лицей директорының тәрбие ісі жөніндегі орынбасары</p>
                <p className="text-gray-700 text-sm">
                  Байланыс түрлері: почта - kaydasov_zhasulan@akbobek.kz, телефон номері - 8-707-681-88-61
                </p>
              </div>
            </div>

            {/* Teacher 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image src="/SP.jpg" alt="Куратор" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Ахметова Салтанат Паналиевна</h3>
                <p className="text-blue-600 mb-2">Лицей директорының ғылыми-әдістемелік жұмыстар жөніндегі орынбасары</p>
                <p className="text-gray-700 text-sm">
                  Байланыс түрлері: почта - akhmetova_s@akbobek.kz, телефон номері - 8-771-361-66-44
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/teachers" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Познакомиться со всеми преподавателями
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Поступить в Лицей</h2>
            <div className="h-1 w-20 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Условия поступления</h3>

              <div className="bg-blue-700 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-medium mb-4">Процесс поступления</h4>
                <ol className="space-y-3">
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold mr-3">
                      1
                    </span>
                    <span>Подача заявки через сайт или по телефону</span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold mr-3">
                      2
                    </span>
                    <span>Тестирование по математике и английскому языку</span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold mr-3">
                      3
                    </span>
                    <span>Собеседование с учеником и родителями</span>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold mr-3">
                      4
                    </span>
                    <span>Заключение договора и оплата обучения</span>
                  </li>
                </ol>
              </div>

              <div className="bg-blue-700 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Сроки приема</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Прием документов:</strong> с 1 марта по 15 августа
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Тестирование:</strong> каждую субботу с апреля по август
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Собеседования:</strong> по индивидуальному графику
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Стоимость обучения</h3>

              <div className="bg-blue-700 p-6 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-medium">Ежемесячная оплата</h4>
                  <span className="text-2xl font-bold">80 000 ₸</span>
                </div>
                <p className="mb-4">В стоимость входит:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Обучение по основной программе</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Дополнительные занятия (2 кружка на выбор)</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Учебные материалы</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Питание (обед)</span>
                  </li>
                </ul>

                <div className="mt-6 p-3 bg-blue-800 rounded-md">
                  <p className="font-medium text-center">Текущая акция: 50% скидка на первые 3 месяца обучения!</p>
                </div>
              </div>

              <div className="bg-blue-700 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Гранты и Скидки</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Академические гранты:</strong> до 100% для победителей олимпиад
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Социальные скидки:</strong> до 50% для многодетных семей
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>
                      <strong>Скидки за успеваемость:</strong> до 30% для отличников
                    </span>
                  </li>
                </ul>
                <p className="mt-4">В прошлом году 15 учеников получили гранты на обучение по результатам конкурса.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/apply"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors inline-flex items-center"
            >
              Подать заявку на поступление
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section id="campus" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Кампус и Условия Проживания</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              Наш современный кампус создает комфортные условия для обучения и проживания учеников.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image src="/images/campus1.jpg" alt="Учебный класс" fill className="object-cover" />
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image src="/images/campus2.jpg" alt="Лаборатория" fill className="object-cover" />
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image src="/images/campus3.jpg" alt="Общежитие" fill className="object-cover" />
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image src="/images/campus4.jpg" alt="Столовая" fill className="object-cover" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Наши Помещения</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Современные классы</strong> с интерактивными досками и проекторами
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Компьютерные лаборатории</strong> с современным оборудованием
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Общежитие на 100 мест</strong> с комфортными комнатами на 2-3 человека
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Столовая</strong> с качественным питанием
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Спортивный зал</strong> и открытая спортивная площадка
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong>Библиотека</strong> с учебной и художественной литературой
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Пример Расписания Дня</h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">07:30</span>
                    <span className="text-gray-700">Подъем (для проживающих в общежитии)</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">08:00 - 08:30</span>
                    <span className="text-gray-700">Завтрак</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">08:30 - 13:00</span>
                    <span className="text-gray-700">Основные занятия (4 урока по 45 минут)</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">13:00 - 14:00</span>
                    <span className="text-gray-700">Обед</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">14:00 - 16:00</span>
                    <span className="text-gray-700">Проектная работа / Дополнительные занятия</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">16:00 - 16:30</span>
                    <span className="text-gray-700">Полдник</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">16:30 - 18:00</span>
                    <span className="text-gray-700">Самоподготовка / Кружки / Спорт</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">18:00 - 19:00</span>
                    <span className="text-gray-700">Ужин</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">19:00 - 21:00</span>
                    <span className="text-gray-700">Свободное время / Мероприятия</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-600 font-medium w-24 flex-shrink-0">22:00</span>
                    <span className="text-gray-700">Отбой (для проживающих в общежитии)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Питание и Транспорт</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-medium mb-3">Питание</h4>
                <p className="text-gray-700 mb-4">
                  Лицей обеспечивает трехразовое питание для всех учеников. Меню разработано с учетом потребностей
                  растущего организма и включает разнообразные блюда.
                </p>

                <h4 className="text-xl font-medium mb-3">Транспорт</h4>
                <p className="text-gray-700 mb-4">
                  Для учеников, не проживающих в общежитии, организован школьный автобус, который курсирует по основным
                  районам города утром и вечером.
                </p>

                <div className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Расписание автобуса и маршруты можно уточнить в администрации лицея.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея и Жизнь в Лицее</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              Взгляните на повседневную жизнь наших учеников и важные моменты из жизни лицея.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery1.jpg"
                alt="Урок математики"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery2.jpg"
                alt="Лабораторная работа"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery3.jpg"
                alt="Спортивное мероприятие"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery4.jpg"
                alt="Проектная презентация"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery5.jpg"
                alt="Экскурсия"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery6.jpg"
                alt="Праздничное мероприятие"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery7.jpg"
                alt="Робототехника"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery8.jpg"
                alt="Выпускной"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <Link href="/gallery" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Смотреть больше фотографий
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          {/* Testimonials */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Отзывы учеников и родителей</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Testimonials */}
              <div>
                <h4 className="text-xl font-medium mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Отзывы учеников
                </h4>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      "Я учусь в лицее уже второй год, и мне очень нравится проектный подход к обучению. Здесь я не
                      просто получаю знания, но и учусь применять их на практике. Благодаря лицею я победил в
                      республиканской олимпиаде по информатике!"
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                        А
                      </div>
                      <div>
                        <p className="font-medium">Алишер, 9 класс</p>
                        <p className="text-sm text-gray-500">Ученик 2 года</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      "Мне нравится атмосфера в лицее. Здесь все увлечены учебой, и преподаватели всегда готовы помочь.
                      За год я значительно улучшила свой английский и теперь свободно общаюсь с иностранцами."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                        Д
                      </div>
                      <div>
                        <p className="font-medium">Динара, 8 класс</p>
                        <p className="text-sm text-gray-500">Ученица 1 год</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parent Testimonials */}
              <div>
                <h4 className="text-xl font-medium mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Отзывы родителей
                </h4>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      "Мы очень довольны выбором лицея для нашего сына. За год он стал более самостоятельным,
                      ответственным и увлеченным учебой. Особенно радует индивидуальный подход к каждому ученику и
                      постоянная связь с родителями."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                        Н
                      </div>
                      <div>
                        <p className="font-medium">Нурлан Ахметов</p>
                        <p className="text-sm text-gray-500">Родитель ученика 9 класса</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      "Лицей превзошел наши ожидания. Дочь живет в общежитии, и мы видим, как она развивается не только
                      в учебе, но и в социальном плане. Преподаватели действительно заинтересованы в успехе каждого
                      ученика."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                        С
                      </div>
                      <div>
                        <p className="font-medium">Сауле Бекенова</p>
                        <p className="text-sm text-gray-500">Родитель ученицы 8 класса</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты и Запись</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Свяжитесь с нами, чтобы получить дополнительную информацию или записаться на экскурсию.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Телефон</p>
                    <p className="text-gray-300">+7 (777) 123-45-67</p>
                    <p className="text-gray-300">+7 (727) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-gray-300">info@akbobek.kz</p>
                    <p className="text-gray-300">admission@akbobek.kz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Адрес</p>
                    <p className="text-gray-300">г. Алматы, ул. Примерная, 123</p>
                    <p className="text-gray-300">Индекс: 050000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Часы работы</p>
                    <p className="text-gray-300">Понедельник - Пятница: 8:00 - 18:00</p>
                    <p className="text-gray-300">Суббота: 9:00 - 14:00 (по предварительной записи)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-medium mb-4">Социальные сети</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="ваш@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Тема
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Выберите тему</option>
                    <option value="admission">Поступление</option>
                    <option value="tour">Запись на экскурсию</option>
                    <option value="consultation">Консультация</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>

              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <h4 className="text-xl font-medium mb-4">Запись на экскурсию</h4>
                <p className="text-gray-300 mb-4">
                  Хотите увидеть лицей своими глазами? Запишитесь на экскурсию или онлайн-консультацию!
                </p>
                <Link
                  href="/tour"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Записаться на экскурсию
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Как нас найти</h3>
            <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
              {/* Here you would typically embed a Google Map */}
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac879c4eeb2bf563f6894f1193df0e1d4c1f57f3b07f826e83bb8dd968fe93a1f&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
