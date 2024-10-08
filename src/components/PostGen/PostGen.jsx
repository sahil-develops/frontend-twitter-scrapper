import React, { useState, useRef } from 'react'
import { ChevronDown, Copy, Printer, Share2, HelpCircle, Upload, X  } from 'lucide-react'

export default function PostGen() {
  const [activeTab, setActiveTab] = useState('custom-topic')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [customTopic, setCustomTopic] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [generatedPost, setGeneratedPost] = useState('')
  const [uploadedImage, setUploadedImage] = useState(null)
  const fileInputRef = useRef(null)


  const handleFileUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setUploadedImage(e.target?.result ? e.target.result.toString() : null)
      reader.readAsDataURL(file)
    }
  }

  const handleDeleteImage = () => {
    setUploadedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
  const handleGeneratePost = () => {
    const topic = activeTab === 'topic-suggestion' ? selectedTopic : customTopic
    setGeneratedPost(`Generated post about: ${topic}`)
  }
  return (
    <div className="flex flex-col md:flex-row w-full lg:h-screen  h-full bg-gray-900 p-6">
    <div className='lg:max-w-7xl lg:max-h-[600px] flex flex-col gap-y-4 px-0 lg:px-8 h-full lg:flex-row mx-auto w-full'>

      <div className="w-full lg:w-1/2 bg-black lg:h-full rounded-lg shadow-md   p-6">
        <h2 className="text-xl font-semibold text-white mb-4">What would you like to post?</h2>
        <div className="flex mb-4 relative">
          <button
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-tl-lg rounded-bl-lg ${
              activeTab === 'topic-suggestion' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300'
            }`}
            onClick={() => setActiveTab('topic-suggestion')}
          >
            Topic Suggestion
          </button>
          <button
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-tr-lg rounded-br-lg ${
              activeTab === 'custom-topic' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300'
            }`}
            onClick={() => setActiveTab('custom-topic')}
          >
            Custom Topic
          </button>
        </div>
        {activeTab === 'topic-suggestion' ? (
          <div className="relative">
            <button
              className="w-full bg-gray-700 text-left text-white py-2 px-4 rounded flex justify-between items-center my-5"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {selectedTopic || 'Select a Topic'}
              <ChevronDown className="h-4 w-4" />
            </button>
            {showDropdown && (
              <div className="absolute w-full bg-gray-700 mt-1 rounded shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                  onClick={() => {
                    setSelectedTopic('Topic 1')
                    setShowDropdown(false)
                  }}
                >
                  Topic 1
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
                  onClick={() => {
                    setSelectedTopic('Topic 2')
                    setShowDropdown(false)
                  }}
                >
                  Topic 2
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">Topic from image</h3>
                {/* <HelpCircle className="h-4 w-4 text-gray-400" /> */}
              </div>
              <div 
                className="border-2 relative border-dashed border-gray-600 rounded-lg p-4 text-center cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {uploadedImage ? (
                    <>
                      <img src={uploadedImage} alt="Uploaded" className="max-w-16 h-auto mx-auto" />
                      <button
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteImage()
                        }}
                      >
                        <X className="h-2 w-2" />
                      </button>
                    </>
                  ) : (
                    <div className="text-gray-400">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p>Click or drag and drop to upload images</p>
                      <p className="text-blue-500">Browse files</p>
                    </div>
                  )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileUpload}
                accept="image/*"
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">Post Topic</h3>
                {/* <HelpCircle className="h-4 w-4 text-gray-400" /> */}
              </div>
              <textarea
                placeholder="Enter your topic here"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded resize-none h-32"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
              />
            </div>
          </>
        )}
        <button
          className="w-full mt-4 bg-blue-500  text-white font-bold py-2 px-4 rounded"
          onClick={handleGeneratePost}
        >
          Generate Post
        </button>
     
      </div>
      <div className="w-full  lg:w-1/2 bg-black mt-4 md:mt-0 lg:ml-4 rounded-lg shadow-md p-6">
        <div className='flex justify-between items-center mb-6'>
        <h2 className="text-xl font-semibold text-white ">Generated Post</h2>
   <div className="flex justify-end space-x-2 ">
          <button className="text-gray-400 hover:text-white">
            <Printer className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Copy className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        </div>
        <div className="bg-gray-700 text-white p-4 rounded h-4/5">
          {generatedPost || 'Your generated post will appear here.'}
        </div>
      </div>
      </div>
    </div>
  )
}