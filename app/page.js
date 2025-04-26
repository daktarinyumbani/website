'use client'

import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from 'react'

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
  }

  const carouselImages = [
    // {
    //   src: '/images/homepage1.jpeg',
    //   alt: 'Doctor making a home visit',
    //   title: 'Professional Healthcare at Your Doorstep',
    //   description: 'Experienced doctors providing care in the comfort of your home'
    // },
    {
      src: '/images/homepage3.jpeg',
      alt: 'Pharmacy services',
      title: 'Comprehensive Pharmacy Services',
      description: 'Access to medications and pharmaceutical care'
    },
    {
      src: '/images/homepage1.jpeg',
      alt: 'Our medical team',
      title: 'Expert Healthcare Professionals',
      description: 'Qualified doctors, nurses, and specialists ready to serve you'
    },
    {
      src: '/images/homepage2.jpeg',
      alt: 'Ambulance service',
      title: '24/7 Emergency Services',
      description: 'Quick response emergency medical transportation'
    },

  ]

  // Animated words
  const words = [
    {
      headline: 'Your Family, Our Priority',
      description: 'Comprehensive care for you and your loved ones, anytime.'
    },
    {
      headline: 'Healthcare at Your Doorstep',
      description: 'Connect with qualified medical professionals and access quality healthcare services from the comfort of your home.'
    },
    {
      headline: 'Book Home Visits Instantly',
      description: 'Easily schedule a doctor, nurse, or specialist to visit your home.'
    },
 
  ]
  const [currentWord, setCurrentWord] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Split Hero Section */}
      <section className="relative bg-blue-600 text-white py-8 md:py-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-[500px] md:min-h-[600px] px-4 sm:px-6 lg:px-8">
          {/* Left: Animated Words */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 md:pr-12 animate-fade-in-left">
            <div className="transition-all duration-700" key={currentWord}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg animate-slide-in-down">
                {words[currentWord].headline}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
                {words[currentWord].description}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors shadow-lg animate-fade-in"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Right: Carousel */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 animate-fade-in-right">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Slider {...sliderSettings} className="h-[320px] md:h-[400px] lg:h-[500px] bg-white">
                {carouselImages.map((image, index) => (
                  <div key={index} className="relative h-[320px] md:h-[400px] lg:h-[500px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-60 p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                      <p className="text-white text-sm">{image.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Home Visits',
                description: 'Professional medical care delivered right to your doorstep',
                icon: '🏠'
              },
              {
                title: 'Hospital Appointments',
                description: 'Easy scheduling and coordination of hospital visits',
                icon: '🏥'
              },
              {
                title: 'Family Doctor & Abroad Hospitals',
                description: 'Access to family doctors and international healthcare facilities',
                icon: '👨‍⚕️'
              },
              {
                title: 'Ambulance Services',
                description: '24/7 emergency medical transportation',
                icon: '🚑'
              },
              {
                title: 'Pharmacy and Insurance',
                description: 'Comprehensive pharmacy services and insurance coordination',
                icon: '💊'
              },
              {
                title: 'Daktari T.V',
                description: 'Educational healthcare content and updates',
                icon: '📺'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-blue-900">
              We connect you with qualified healthcare professionals
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="prose prose-lg mx-auto text-blue-900 w-full">
              <p className="text-center">
                We have registered medical professionals and service providers including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Medical Doctors</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Nurses</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Physiotherapists</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Laboratories and Laboratory Technicians</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Scientist Pathologists</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Pharmacists</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Specialists in Medicine</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Radiologists</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Hospitals</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Pharmacies</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Ambulances</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Dispensaries</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Health Centers</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Polyclinics</li>
                <li className="before:content-['•'] before:text-orange-500 before:mr-2">Health Educators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Animations
// Add these to your globals.css:
// .animate-fade-in-left { animation: fadeInLeft 1s; }
// .animate-fade-in-right { animation: fadeInRight 1s; }
// .animate-slide-in-down { animation: slideInDown 1s; }
// .animate-fade-in { animation: fadeIn 1.2s; }
// @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: none; } }
// @keyframes fadeInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: none; } }
// @keyframes slideInDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: none; } }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
