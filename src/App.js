import './App.css';
import Testimonial from './Components/Testimonial';
import reviews from './data';

function App() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] bg-gray-200 justify-center items-center'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>Testimonial</h2>
        <div className='h-[4px] w-[1/5] bg-violet-200 mt-1'/>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
