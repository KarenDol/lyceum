"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    grade: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    previousSchool: "",
    interests: [],
    additionalInfo: "",
    howHeard: "",
    agreed: false,
  })

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    if (name === "agreed") {
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      // Handle interests checkboxes
      const updatedInterests = [...formData.interests]
      if (checked) {
        updatedInterests.push(name)
      } else {
        const index = updatedInterests.indexOf(name)
        if (index > -1) {
          updatedInterests.splice(index, 1)
        }
      }
      setFormData((prev) => ({ ...prev, interests: updatedInterests }))
    }
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
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
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <ChevronLeft className="mr-1 h-5 w-5" />
            Вернуться на главную
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Заявка на поступление</h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          {!submitted && (
            <p className="mt-4 text-gray-700">
              Заполните форму ниже, чтобы подать заявку на поступление в Лицей "Ақбөбек".
            </p>
          )}
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
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
            <h2 className="text-2xl font-bold text-green-800 mb-2">Заявка успешно отправлена!</h2>
            <p className="text-green-700 mb-6">
              Спасибо за интерес к Лицею "Ақбөбек". Мы свяжемся с вами в ближайшее время для подтверждения заявки и
              предоставления дополнительной информации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white border border-green-500 text-green-600 px-6 py-3 rounded-md font-medium transition-colors hover:bg-green-50"
              >
                Вернуться на главную
              </Link>
              <Link
                href="/tour"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-green-700"
              >
                Записаться на экскурсию
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-4">
              <div className="flex justify-between items-center">
                <div className={`flex items-center ${step >= 1 ? "text-white" : "text-blue-200"}`}>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? "bg-white text-blue-600" : "bg-blue-400 text-blue-100"}`}
                  >
                    1
                  </div>
                  <span className="font-medium">Информация об ученике</span>
                </div>
                <div className="h-px w-12 bg-blue-400"></div>
                <div className={`flex items-center ${step >= 2 ? "text-white" : "text-blue-200"}`}>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? "bg-white text-blue-600" : "bg-blue-400 text-blue-100"}`}
                  >
                    2
                  </div>
                  <span className="font-medium">Контактная информация</span>
                </div>
                <div className="h-px w-12 bg-blue-400"></div>
                <div className={`flex items-center ${step >= 3 ? "text-white" : "text-blue-200"}`}>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? "bg-white text-blue-600" : "bg-blue-400 text-blue-100"}`}
                  >
                    3
                  </div>
                  <span className="font-medium">Дополнительно</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Информация об ученике</h2>

                  <div>
                    <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                      ФИО ученика <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Введите ФИО ученика"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="studentAge" className="block text-sm font-medium text-gray-700 mb-1">
                        Возраст <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="studentAge"
                        name="studentAge"
                        value={formData.studentAge}
                        onChange={handleChange}
                        required
                        min="10"
                        max="18"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Возраст"
                      />
                    </div>

                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                        Класс поступления <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Выберите класс</option>
                        <option value="7">7 класс</option>
                        <option value="8">8 класс</option>
                        <option value="9">9 класс</option>
                        <option value="10">10 класс</option>
                        <option value="11">11 класс</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-1">
                      Предыдущее место учебы <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="previousSchool"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Название школы, город"
                    />
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Интересы ученика (выберите один или несколько)
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="math"
                          name="math"
                          checked={formData.interests.includes("math")}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="math" className="text-gray-700">
                          Математика
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="english"
                          name="english"
                          checked={formData.interests.includes("english")}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="english" className="text-gray-700">
                          Английский язык
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="informatics"
                          name="informatics"
                          checked={formData.interests.includes("informatics")}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="informatics" className="text-gray-700">
                          Информатика
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="robotics"
                          name="robotics"
                          checked={formData.interests.includes("robotics")}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="robotics" className="text-gray-700">
                          Робототехника
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="olympiads"
                          name="olympiads"
                          checked={formData.interests.includes("olympiads")}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="olympiads" className="text-gray-700">
                          Олимпиады
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="debates"
                          name="debates"
                          checked={formData.interests.includes("debates")}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-2"
                        />
                        <label htmlFor="debates" className="text-gray-700">
                          Дебаты
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Контактная информация</h2>

                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                      ФИО родителя/законного представителя <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Введите ФИО родителя"
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
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Адрес проживания <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Город, улица, дом, квартира"
                    />
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-1">Требуется ли проживание в общежитии?</p>
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <input type="radio" id="dormitory-yes" name="dormitory" value="yes" className="mr-2" />
                        <label htmlFor="dormitory-yes" className="text-gray-700">
                          Да
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="dormitory-no" name="dormitory" value="no" className="mr-2" />
                        <label htmlFor="dormitory-no" className="text-gray-700">
                          Нет
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Дополнительная информация</h2>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Дополнительная информация
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Укажите дополнительную информацию, которая может быть важна (достижения, особенности ученика и т.д.)"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-1">
                      Откуда вы узнали о Лицее "Ақбөбек"?
                    </label>
                    <select
                      id="howHeard"
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Выберите вариант</option>
                      <option value="internet">Интернет</option>
                      <option value="social">Социальные сети</option>
                      <option value="friends">От знакомых</option>
                      <option value="advertisement">Реклама</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreed"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleCheckboxChange}
                        required
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="agreed" className="text-gray-700 text-sm">
                        Я согласен на обработку персональных данных и принимаю{" "}
                        <Link href="#" className="text-blue-600 hover:underline">
                          условия использования
                        </Link>{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Назад
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Далее
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    disabled={!formData.agreed}
                  >
                    Отправить заявку
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
