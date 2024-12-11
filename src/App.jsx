import './App.css'

function App() {
  const handleSubmit = () => {
    console.log(content.value)
  }

  return (
    <main className='flex flex-col min-h-[80vh] justify-center items-center'>
      <h1 className='text-4xl text-indigo-500'>Hello World</h1>
      <form className='flex flex-col gap-4 py-4'>
        <input
          placeholder='ketik permintaan disini..'
          className='py-2 px-4 text-md rounded-md'
          id="content"
          type='text'
        />
        <button
          type='button'
          onClick={handleSubmit}
          className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md'>
          Kirim
        </button>
      </form>
    </main>
  );
}

export default App
