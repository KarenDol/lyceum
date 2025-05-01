"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Calendar, Clock, Users, MapPin } from "lucide-react"

export default function TourPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tourType: "in-person",
    date: "",
    time: "",
    participants: "1",
    comments: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log(formData)
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Запись на экскурсию</h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          {!submitted && (
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              Запишитесь на экскурсию по Лицею "Ақбөбек", чтобы увидеть наш кампус, познакомиться с преподавателями и
              узнать больше о нашей образовательной программе.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {submitted ? (
            <div className="md:col-span-2 bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-500 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-green-800 mb-2">Запись на экскурсию успешно оформлена!</h2>
              <p className="text-green-700 mb-6">
                Спасибо за интерес к Лицею "Ақбөбек". Мы свяжемся с вами в ближайшее время для подтверждения даты и
                времени экскурсии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-white border border-green-500 text-green-600 px-6 py-3 rounded-md font-medium transition-colors hover:bg-green-50"
                >
                  Вернуться на главную
                </Link>
                <Link
                  href="/apply"
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-green-700"
                >
                  Подать заявку на поступление
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="aspect-video relative">
                    <Image src="/images/tour.jpg" alt="Экскурсия по лицею" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">О наших экскурсиях</h2>
                    <p className="text-gray-700 mb-4">Во время экскурсии вы сможете:</p>
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
                        <span>Посетить учебные классы и лаборатории</span>
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
                        <span>Увидеть условия проживания в общежитии</span>
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
                        <span>Познакомиться с преподавателями</span>
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
                        <span>Задать вопросы об образовательной программе</span>
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
                        <span>Получить информацию о процессе поступления</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Информация о экскурсиях</h2>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Дни проведения</h3>
                          <p className="text-gray-700">Вторник, четверг, суббота</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Время</h3>
                          <p className="text-gray-700">10:00, 14:00, 16:00</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Количество участников</h3>
                          <p className="text-gray-700">До 10 человек в группе</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Место встречи</h3>
                          <p className="text-gray-700">Главный вход Лицея "Ақбөбек"</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-md">
                      <p className="text-blue-800 text-sm">
                        <strong>Примечание:</strong> Также доступны онлайн-консультации через Zoom для тех, кто не может
                        посетить лицей лично.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-blue-600 p-4 text-white">
                    <h2 className="text-xl font-semibold">Запись на экскурсию</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        ФИО <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Введите ваше ФИО"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Телефон <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="ваш@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-1">
                        Тип экскурсии <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="tourType"
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="in-person">Очная экскурсия</option>
                        <option value="online">Онлайн-консультация</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          Предпочтительная дата <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          Предпочтительное время <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Выберите время</option>
                          <option value="10:00">10:00</option>
                          <option value="14:00">14:00</option>
                          <option value="16:00">16:00</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
                        Количество участников <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="participants"
                        name="participants"
                        value={formData.participants}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="1">1 человек</option>
                        <option value="2">2 человека</option>
                        <option value="3">3 человека</option>
                        <option value="4">4 человека</option>
                        <option value="5+">5 и более человек</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                        Дополнительные комментарии
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Укажите дополнительную информацию или вопросы"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Записаться на экскурсию
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
