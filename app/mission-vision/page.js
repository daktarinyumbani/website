export default function MissionVision() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Mission & Vision
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Building a healthier future through accessible healthcare
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">🎯</span>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                To revolutionize healthcare delivery by making quality medical services accessible to everyone through our innovative platform. We strive to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Connect patients with qualified healthcare professionals</li>
                <li>Provide convenient access to medical services</li>
                <li>Ensure quality healthcare delivery at affordable rates</li>
                <li>Support healthcare providers in reaching more patients</li>
                <li>Promote preventive healthcare through education</li>
              </ul>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">👁️</span>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                To be the leading healthcare platform in Africa, transforming how healthcare is delivered and accessed. We envision:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>A world where quality healthcare is accessible to all</li>
                <li>Seamless integration of technology and healthcare services</li>
                <li>Improved health outcomes through preventive care</li>
                <li>Strong partnerships between healthcare providers and patients</li>
                <li>Continuous innovation in healthcare delivery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We maintain the highest standards of honesty and ethical conduct in all our operations.'
              },
              {
                icon: '💝',
                title: 'Compassion',
                description: 'We care deeply about our patients and healthcare providers, ensuring their well-being is our priority.'
              },
              {
                icon: '🌟',
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from service delivery to patient care.'
              },
              {
                icon: '🔄',
                title: 'Innovation',
                description: 'We continuously seek new ways to improve healthcare delivery and patient experience.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 