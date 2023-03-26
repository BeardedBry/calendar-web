import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// https://www.npmjs.com/package/react-calendar

function App() {

  const [value, onChange] = useState(new Date());

  console.log(value)

  return (
    <div className="App h-screen w-full bg-slate-100 p-8">
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold text-center'>Calendar Sharing App</h1>
        <div className='my-10'>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  )
}

export default App
