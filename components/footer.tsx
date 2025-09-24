import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3">
                <Image src="Logo_Lyc.png" alt="Aqbobek Lyceum Logo" fill className="object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl text-white">Ақбөбек</span>
                <span className="block text-xs text-gray-400">Лицей</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Лицей "Ақбөбек" — современное образовательное учреждение с углубленным изучением математики, английского
              языка и информатики.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/77474662973" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path 
                    fillRule="evenodd"
                    d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/>
                </svg>
              </a>
              <a href="https://instagram.com/aqbobek_lyceum/" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  О Лицее
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-gray-400 hover:text-white transition-colors">
                  Білім Беру
                </Link>
              </li>
              <li>
                <Link href="#teachers" className="text-gray-400 hover:text-white transition-colors">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link href="#admission" className="text-gray-400 hover:text-white transition-colors">
                  Поступление
                </Link>
              </li>
              <li>
                <Link href="#campus" className="text-gray-400 hover:text-white transition-colors">
                  Кампус
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Программы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Математика
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Английский язык
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Информатика
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Робототехника
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Олимпиадная подготовка
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Дебаты
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Проектное обучение
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Байланыс түрлері</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+7 (747) 466-29-73</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@akbobek.kz</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Ақтөбе қ. Ораз Тәтеұлы 13Б</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Дс-Жм: 8:00-18:00          
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Лицей "Ақбөбек". Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
