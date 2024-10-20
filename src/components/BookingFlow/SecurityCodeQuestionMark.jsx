import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

function SecurityCodeQuestionMark() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative text-[20px]">
      <button
        onClick={() => setIsOpen(true)}
        className="text-black/50 hover:text-black/80 transition-colors"
        aria-label="Open help"
      >
        <FontAwesomeIcon icon={faQuestionCircle}  />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[306px] h-[299px] rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="p-6 bg-white rounded-[10px]">
              <h2 className="text-xl font-bold mb-4">Security code</h2>
              <p className="mb-4">Most cards have three numbers on the back</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="bg-gray-300 w-full h-8 mb-2 rounded"></div>
                <div className="bg-gray-200 w-12 h-8 rounded-full flex items-center justify-center font-bold">
                  123
                </div>
              </div>
              <p className="mb-4">Amex has 4 numbers on the front</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="bg-gray-300 w-full h-8 mb-2 rounded"></div>
                <div className="bg-gray-200 w-12 h-8 rounded-full flex items-center justify-center font-bold">
                  1234
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SecurityCodeQuestionMark;