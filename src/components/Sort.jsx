/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Sort({ onSort }) { 
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Top destination')

  const options = [
    'Price (low to high)',
    'Price (high to low)'
  ]

  const handleSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSort(option)
  }

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-lightGrey rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentPink"
      >
        <span className="block truncate">Sort by: {selectedOption}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 text-darkGrey" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-hoverColorLightPink ${
                  option === selectedOption ? 'bg-accentPink text-black' : 'text-black'
                }`} // Korrigerad här
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default Sort;