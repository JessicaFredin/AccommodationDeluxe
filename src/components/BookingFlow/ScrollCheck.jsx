'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function ScrollCheck() {
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['Your selection', 'Add to your stay', 'Your details', 'Payment details']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const progress = scrollPosition / (documentHeight - windowHeight)
      const newActiveStep = Math.floor(progress * steps.length)

      setActiveStep(Math.min(newActiveStep, steps.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [steps.length])

  return (
    <div className="top-0 left-0 right-0 bg-white shadow-sm p-4 z-50">
      <div className="relative max-w-4xl mx-auto flex items-center justify-between">
        
        {/* Linjen bakom cirklarna */}
        <div className="absolute top-1/3 left-[5%] right-[5%] h-0.5 bg-gray-300 z-0"></div>

        {steps.map((step, index) => (
          <div key={step} className="relative z-10 flex flex-col items-center">
            <div className="flex items-center">
              {/* Cirklar */}
              <div className={`relative w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white ${
                index <= activeStep ? 'border-green-500 text-green-500' : 'border-gray-300 text-gray-300'
              }`}>
                {index <= activeStep ? (
                  <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
            </div>
            {/* Text */}
            <div className="mt-2 text-xs font-medium text-center">{step}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollCheck;