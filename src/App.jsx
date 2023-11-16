import ilus from './assets/ilus.png'
import './App.css'

function App() {
  return (
    <div className="flex items-center justify-between mx-72 my-60">
      <div className="flex-col">
      <p className='text-secondary text-Headline1 font-semibold'>Lessons and insights</p>
      <p className='text-primary text-Headline1 font-semibold'>from 8 years</p>
      <p className='mt-4'>Where to grow your business as a photographer: site or social media?</p>
      <button className='bg-primary hover:bg-shade1 py-3 px-5 rounded-lg text-white mt-8'>Register</button>
      </div>
      <img src={ilus} alt='ilustration' width={391} height={407}/>
    </div>
  );
}

export default App;
