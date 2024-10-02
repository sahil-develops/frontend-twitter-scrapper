import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'


export default function EssayWriter() {
  const [wordCount, setWordCount] = useState('500-1000 words')
  const [educationLevel, setEducationLevel] = useState('High school')
  const [essayType, setEssayType] = useState('Argumentative')
  const [essayStance, setEssayStance] = useState('Against')
  const [essayTopic, setEssayTopic] = useState('')

  return (
    <div className="min-h-screen bg-black text-white p-8">
    <div className=' py-5 max-w-4xl mx-auto'>
    <h1 className="text-4xl font-bold text-center mb-4">AI Essay Writer - Free Essay Generator</h1>
        <p className="text-center text-xl mb-8">
          Let's put an end to all your essay writing worries with our advanced essay writing tool.
        </p>


    </div>
          <div className="bg-gray-900 rounded-lg p-6 mb-8 lg:max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Advance features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Select Education Level:</label>
              <div className="relative">
                <select
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  className="w-full bg-black text-white py-2 px-3 rounded appearance-none"
                >
                  <option>High school</option>
                  <option>College</option>
                  <option>University</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block mb-2">Essay Type:</label>
              <div className="relative">
                <select
                  value={essayType}
                  onChange={(e) => setEssayType(e.target.value)}
                  className="w-full bg-black text-white py-2 px-3 rounded appearance-none"
                >
                  <option>Argumentative</option>
                  <option>Expository</option>
                  <option>Narrative</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block mb-2">Word Count:</label>
              <div className="relative">
                <select
                  value={wordCount}
                  onChange={(e) => setWordCount(e.target.value)}
                  className="w-full bg-black text-white py-2 px-3 rounded appearance-none"
                >
                  <option>500-1000 words</option>
                  <option>1000-1500 words</option>
                  <option>1500-2000 words</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block mb-2">Essay Stance:</label>
              <div className="relative">
                <select
                  value={essayStance}
                  onChange={(e) => setEssayStance(e.target.value)}
                  className="w-full bg-black text-white py-2 px-3 rounded appearance-none"
                >
                  <option>Against</option>
                  <option>For</option>
                  <option>Neutral</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">* Kindly furnish additional details in the designated text area.</p>
        </div>

        <div className="bg-gray-900 rounded-lg lg:max-w-4xl mx-auto p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Essay Writer</h2>
            <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm">2 credits left</span>
          </div>
          <textarea
            value={essayTopic}
            onChange={(e) => setEssayTopic(e.target.value)}
            placeholder="eg. Climate change and role of government"
            className="w-full h-40 bg-black text-white p-3 rounded resize-none mb-2"
          />
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">0/10000 Characters</span>
            <HelpCircle className="text-gray-400" size={18} />
          </div>
          <div className="flex justify-between items-center">
            <div className="relative">
              <select className="bg-black text-white py-2 px-3 rounded appearance-none">
                <option>Language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 pointer-events-none" />
            </div>
            <button className="bg-white text-black px-4 py-2 rounded font-semibold">
              Generate
            </button>
          </div>
        </div>


      <div className="max-w-4xl mx-auto">


        <p className="mb-8">
          The digital age has brought many advancements, and one of the most groundbreaking is the rise of AI-powered writing tools. Among these, the free AI essay writer stands out for its exceptional ability to help users create high-quality essays and articles.
        </p>

        <h2 className="text-2xl font-bold mb-4">What Is An AI Essay Writer?</h2>
        <p className="mb-8">
          This is an advanced tool that uses artificial intelligence to generate unique, high-quality content. It's a time-saving, cost-effective, and efficient process, unlike traditional writing methods.
        </p>

        <h2 className="text-2xl font-bold mb-4">How to use essay writer?</h2>
        <p className="mb-4">
          Step 1: Sign up for free on Merlin AI Begin by signing up and registering for a free Merlin AI account. This will provide you with access to all of Merlin's services.
        </p>
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Z3Wgzz5hRZDFSStIS3QSWiOS24LsX.png" 
          alt="Merlin AI login page" 
          width={800} 
          height={400} 
          className="mb-8 rounded-lg"
        />

        <p className="mb-8">
          Step 2: Access the Essay Writing tool
          Enter the subject of the essay you wish to create and click on the generate button.
        </p>

  
     
        <h2 className="text-2xl font-bold mb-4">Advanced Features of AI Essay Generator</h2>
        <p className="mb-4">Our tool stands out from other essay writing tools by offering advanced functionalities, you can choose:</p>
        <ul className="list-disc list-inside mb-8">
          <li>Academic Level: Whether you're a high school newbie or a university pro, tailor your essay to fit your academic level.</li>
          <li>Choose Your Tone: Got a specific type of essay to conquer? Be it persuasive, narrative, or any other, we've got your back.</li>
          <li>Word Count Control: Long or short, specify your word count and watch the magic happen.</li>
          <li>Choose your Stance: Set your stance and steer your essay in any direction you choose.</li>
          <li>Multi-Language Support: English, Español, Français, and more—speak your mind in the language of your choice!</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">How AI can help In Writing</h2>
        <p className="mb-8">
          This tool combines machine learning and natural language processing algorithms. It's trained on a vast and diverse database of exceptional essays and articles, which enables it to generate original content tailored to users' needs.
        </p>

        <blockquote className="border-l-4 border-white pl-4 mb-8 italic">
          "AI in writing is transforming the way we approach content creation. With AI, we can generate high-quality content faster and more efficiently than ever before."
        </blockquote>

        <h2 className="text-2xl font-bold mb-4">How to get the best essay from AI Writing tool</h2>
        <ol className="list-decimal list-inside mb-8">
          <li>Provide Detailed Instructions: When using an AI tool or requesting assistance, be as specific and detailed as possible in your instructions.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-8">
          <details className="bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Is the content generated by the AI Essay writer plagiarism-free?</summary>
            <p className="mt-2">Yes, the AI generates original content based on the input provided.</p>
          </details>
          <details className="bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Can I use this tool for professional writing?</summary>
            <p className="mt-2">While it can be a helpful starting point, it's recommended to review and edit the content for professional use.</p>
          </details>
          <details className="bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">Is the Merlin's AI Essay writer free?</summary>
            <p className="mt-2">Merlin offers both free and paid plans. Check their website for the most up-to-date information.</p>
          </details>
        </div>
      </div>
    </div>
  )
}