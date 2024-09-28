import { color } from 'framer-motion'
import React, { useState } from 'react'
import Select from 'react-select'
const CategoryItem = ({ item }) => (
  <div className='flex flex-col justify-start items-start group gap-y-4 '>
    <div className='flex flex-col lg:flex-row border-b  group-hover:bg-gray-800 group-hover:rounded-md p-4  transition-all duration-100 delay-100 ease-in-out border-gray-800 pb-3 justify-between w-full items-start gap-5'>
      <div className='flex flex-col lg:flex-row gap-2 lg:gap-5 justify-start'>
        <div>
          <img width="48" height="48" src={item.icon} alt={item.iconAlt} />
        </div>
        <div className='flex flex-col justify-start items-start gap-y-2'>
          <p className='text-gray-500 lg:text-sm font-normal'>{item.mention}</p>
          <p className='text-white group-hover:scale-105 py-0.5 group-hover:delay-100  transition-all group-hover:duration-200 lg:text-lg font-medium'>{item.title}</p>
          <p className='lg:text-sm text-gray-600 font-normal'>{item.description}</p>
        </div>
      </div>
      <div>
        <img className='w-full lg:w-48 rounded' src={item.image} alt={item.imageAlt} />
      </div>
    </div>
  </div>
)
const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center items-center space-x-2 mt-8">
    {[...Array(totalPages).keys()].map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page + 1)}
        className={`px-3 py-1 rounded ${
          currentPage === page + 1
            ? 'bg-black text-white'
            : 'bg-gray-800 text-gray-700 hover:bg-gray-800'
        }`}
      >
        {page + 1}
      </button>
    ))}
  </div>
)
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'gray.900',
    color: 'white',
    borderColor: 'gray.500',
    '&:hover': {
      borderColor: '#9CA3AF',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'black' : 'white',
    color: state.isSelected ? 'white' : 'black',
    '&:hover': {
      backgroundColor: state.isSelected ? 'black' : '#F3F4F6',
    },
  }),
}

const keywordOptions = [
  { value: 'all', label: 'All Keywords' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
]

const languageOptions = [
  { value: 'all', label: 'All Languages' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
]

const platformOptions = [
  { value: 'all', label: 'All Platforms' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'linkedin', label: 'LinkedIn' },
]
const relevance = [
{value:"all", label:"Select Relevance"},
{value:"latest", label:"Latest"},
{value:"oldest", label:"Oldest"},
]

const CategorySelector = ({ data, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedKeyword, setSelectedKeyword] = useState(keywordOptions[0])
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0])
  const [selectedPlatform, setSelectedPlatform] = useState(platformOptions[0])
  const [selectedRelevance, setSelectedRelevance] = useState(relevance[0])

  const totalPages = Math.ceil(data?.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = data?.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className='max-w-7xl p-8 w-full mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-center w-full mb-6 space-y-4 md:space-y-0 md:space-x-0'>
       <div className='flex flex-row justify-start items-center gap-x-4'>

        <Select
          options={keywordOptions}
          value={selectedKeyword}
          onChange={setSelectedKeyword}
          styles={customStyles}
          className="w-full md:w-1/3"
        />
        <Select
          options={languageOptions}
          value={selectedLanguage}
          onChange={setSelectedLanguage}
          styles={customStyles}
          className="w-full md:w-1/3"
        />
        <Select
          options={platformOptions}
          value={selectedPlatform}
          onChange={setSelectedPlatform}
          styles={customStyles}
          className="w-full md:w-1/3"
        />
               </div>

<div className='flex'>
<Select
          options={relevance}
          value={selectedRelevance}
          onChange={setSelectedRelevance}
          styles={customStyles}
          className="w-full md:w-full"
        />
</div>
      </div>
      {currentItems?.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default CategorySelector