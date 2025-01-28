import Button from './Button';
import {FcAddColumn} from 'react-icons/fc';


function App() {
  const clickH = ()=>{
    console.log('click');
  }
  return (
    <div>
      <h1 className='text-xl bg-slate-300 underline'>hellos  </h1>
      <div>
        <Button className="flex gap-4" primary rounded outline onClick={clickH}>
        <FcAddColumn />Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
