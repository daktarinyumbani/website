'use client'

import { useState } from 'react'

export default function Documents() {
  const [selectedPdf, setSelectedPdf] = useState(null)

  // This would typically come from your backend or CMS
  const documents = [
    {
      id: 1,
      title: 'Service Brochure',
      description: 'Comprehensive overview of our healthcare services',
      filename: 'service-brochure.pdf'
    },
    {
      id: 2,
      title: 'Healthcare Providers Guide',
      description: 'Information for healthcare providers joining our platform',
      filename: 'providers-guide.pdf'
    },
    {
      id: 3,
      title: 'Patient Information',
      description: 'Essential information for patients using our services',
      filename: 'patient-info.pdf'
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Documents & Resources
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Access important healthcare information and resources
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedPdf(doc)}
              >
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <button
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(`/pdfs/${doc.filename}`, '_blank')
                  }}
                >
                  View PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Viewer Modal */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">{selectedPdf.title}</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedPdf(null)}
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 p-4">
                <iframe
                  src={`/pdfs/${selectedPdf.filename}`}
                  className="w-full h-full"
                  title={selectedPdf.title}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 