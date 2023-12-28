
function App() {

  return (
    <>
      <div className="grid grid-cols-3 gap-4 border border-green-500 "> 
        <div className="col-span-2">grid item test 1</div>
        <div> grid item test2</div>
      </div>
      <h1 className="text-center text-gray-500 text-5xl">Hello Green</h1>
      <div>
        <p className="text-red-500 text-3xl bg-opacity-20">
          text 1
        </p>
        <p className="text-right text-green-500 text-6xl">
        text 2
      </p>

      </div>
      <div className="flex">
        <div className="flex-1 border border-green-800 bg-black text-white">div 1</div>
        <div className="flex-2 border border-pink-700">div 2</div>
        <div className="flex-3 border border-pink-700">div 3</div>
      </div>
      <div className="bg-sky-300 min-w-50 min-h-60 dark:bg-slate-500 dark:text-white">div 1 another test for minimum height</div>
      <div className="bg-blue-200 px-10 py-10">div 2 this is for test</div>
      <div className="bg-gradient-to-r from-blue-300 via-purple-500 to-pink-300"> we are learning div 3 with gradient test</div>
      <div className="bg-black sm:bg-red-500 md:bg-green-300 lg:bg-yellow-300 lg:text-white ">
        we are testing responsivenes
      </div>
      <div className="bg-primary text-customcolor-500 font-custom">
         this is custom color in tailwind
      </div>
      <p className="mt-2 ml-1 tablet:flex">test custom spacing size</p>
    </>
  )
}

export default App
