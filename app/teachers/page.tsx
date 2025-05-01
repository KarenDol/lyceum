import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TeachersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <ChevronLeft className="mr-1 h-5 w-5" />
            Вернуться на главную
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Наши Преподаватели и Кураторы</h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Познакомьтесь с нашей командой опытных педагогов, которые помогают ученикам раскрыть свой потенциал и
            достичь успеха.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {/* Teacher 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/teacher1.jpg" alt="Преподаватель математики" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Алексей Иванов</h3>
              <p className="text-blue-600 mb-4">Преподаватель математики</p>
              <p className="text-gray-700 mb-4">
                Кандидат физико-математических наук, победитель международных олимпиад. Более 15 лет опыта преподавания
                математики.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>МГУ им. М.В. Ломоносова, математический факультет</li>
                  <li>Кандидат физико-математических наук</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teacher 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/teacher2.jpg" alt="Преподаватель английского языка" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Елена Смирнова</h3>
              <p className="text-blue-600 mb-4">Преподаватель английского языка</p>
              <p className="text-gray-700 mb-4">
                Магистр лингвистики, 10 лет опыта преподавания, сертификат CELTA. Специализируется на подготовке к
                международным экзаменам.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Казахский университет международных отношений и мировых языков</li>
                  <li>Сертификат CELTA (Cambridge)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teacher 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/teacher3.jpg" alt="Преподаватель информатики" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Марат Ахметов</h3>
              <p className="text-blue-600 mb-4">Преподаватель информатики</p>
              <p className="text-gray-700 mb-4">
                Разработчик ПО с 15-летним стажем, автор учебных пособий по программированию. Руководитель команды,
                победившей в международных соревнованиях по программированию.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Казахский национальный технический университет</li>
                  <li>Сертифицированный специалист Microsoft и Oracle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teacher 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/teacher4.jpg" alt="Преподаватель физики" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Сергей Петров</h3>
              <p className="text-blue-600 mb-4">Преподаватель физики</p>
              <p className="text-gray-700 mb-4">
                Доктор физико-математических наук, автор научных публикаций в международных журналах. Специалист по
                подготовке к олимпиадам по физике.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Московский физико-технический институт</li>
                  <li>Доктор физико-математических наук</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teacher 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/teacher5.jpg" alt="Преподаватель химии" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Айгуль Нурланова</h3>
              <p className="text-blue-600 mb-4">Преподаватель химии</p>
              <p className="text-gray-700 mb-4">
                Магистр химических наук, участник международных конференций. Специализируется на практическом применении
                химии в повседневной жизни.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Казахский национальный университет им. аль-Фараби</li>
                  <li>Магистр химических наук</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Curator 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/curator.jpg" alt="Куратор" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Айгуль Нурланова</h3>
              <p className="text-blue-600 mb-4">Куратор</p>
              <p className="text-gray-700 mb-4">
                Психолог-педагог, сопровождает учеников в учебе и внеурочной деятельности. Помогает адаптироваться к
                учебному процессу и решать возникающие проблемы.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Казахский национальный педагогический университет</li>
                  <li>Магистр психологии</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Curator 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/curator2.jpg" alt="Куратор" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Дмитрий Ким</h3>
              <p className="text-blue-600 mb-4">Куратор</p>
              <p className="text-gray-700 mb-4">
                Педагог с 8-летним опытом работы с подростками. Организует внеклассные мероприятия и помогает ученикам в
                решении учебных и личных вопросов.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Евразийский национальный университет</li>
                  <li>Бакалавр педагогики</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Curator 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/curator3.jpg" alt="Куратор" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Анна Сергеева</h3>
              <p className="text-blue-600 mb-4">Куратор</p>
              <p className="text-gray-700 mb-4">
                Специалист по работе с одаренными детьми. Помогает ученикам развивать таланты и участвовать в конкурсах
                и олимпиадах различного уровня.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Московский государственный университет</li>
                  <li>Магистр педагогики</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Director */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="aspect-square relative">
              <Image src="/images/director.jpg" alt="Директор" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Болат Нурмагамбетов</h3>
              <p className="text-blue-600 mb-4">Директор лицея</p>
              <p className="text-gray-700 mb-4">
                Основатель и директор лицея "Ақбөбек". Доктор педагогических наук, автор инновационных методик обучения,
                имеет 20-летний опыт работы в сфере образования.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium mb-2">Образование:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Казахский национальный университет</li>
                  <li>Доктор педагогических наук</li>
                  <li>Стажировка в Гарвардском университете</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
