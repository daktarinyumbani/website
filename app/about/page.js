export default function About() {
  return (
    <div className="min-h-screen py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 sm:text-5xl">
            About Daktari Nyumbani
          </h1>
          <p className="mt-4 text-xl text-blue-900">
            Bringing Quality Healthcare to Your Doorstep
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Our Story */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Story</h2>
            <p className="text-blue-900 mb-4">
              Daktari Nyumbani was founded with a simple yet powerful vision: to make quality healthcare accessible to everyone, right from the comfort of their homes. We understand that accessing healthcare services can be challenging, especially for those with mobility issues or busy schedules.
            </p>
            <p className="text-blue-900">
              Our platform connects patients with a network of qualified healthcare professionals, ensuring that medical care is just a click away. We've built a comprehensive ecosystem that includes doctors, nurses, specialists, and various healthcare facilities, all working together to provide seamless healthcare services.
            </p>
          </div>

          {/* Our Impact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Impact</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-3xl text-blue-600">🏥</span>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-600">Accessible Healthcare</h3>
                  <p className="mt-1 text-blue-900">Making quality healthcare services available to everyone, everywhere.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl text-orange-500">🤝</span>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-orange-500">Professional Network</h3>
                  <p className="mt-1 text-blue-900">Connecting patients with qualified healthcare professionals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-3xl text-blue-600">💡</span>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-blue-600">Innovation</h3>
                  <p className="mt-1 text-blue-900">Using technology to revolutionize healthcare delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Healthcare Network */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-600">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Our Healthcare Network</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Medical Doctors',
              'Nurses',
              'Physiotherapists',
              'Laboratories',
              'Laboratory Technicians',
              'Scientist Pathologists',
              'Pharmacists',
              'Specialists',
              'Radiologists',
              'Hospitals',
              'Pharmacies',
              'Ambulances',
              'Dispensaries',
              'Health Centers',
              'Polyclinics',
              'Health Educators'
            ].map((provider, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center shadow-sm border-l-4 border-orange-500 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 