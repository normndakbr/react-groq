import { useState } from "react";
import { requestToGroqAI } from "./utils/groq";
import { Light as SyntaxHighlight } from 'react-syntax-highlighter'
import './App.css';

function App() {
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value)
    setData(ai);
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

      <SyntaxHighlight language="swift" >
        {data}
      </SyntaxHighlight>

    </main>
  );
}

export default App
