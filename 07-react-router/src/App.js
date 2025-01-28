import Button from "./components/Button";

function App() {
  return <div>
    <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Button success  warning rounded outline>Click </Button>
      <Button danger outline>Buy now </Button>
      <Button warning>Deal </Button>
      <Button secondary outline>Hide </Button>
     
    </div>
  </div>;
}

export default App;
