import DaysWrapper from "./components/DaysWrapper";

function App() {
  return (
    <div className="border-2 border-fuchsia-800 h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1>Hello JS fellows!</h1>
        <p>Below are the topics in JS that I've practiced!</p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="h-[10px] w-[10px] rounded bg-cyan-500"></div>
        <div className="h-[10px] w-[10px] rounded bg-orange-500"></div>
        <div className="h-[10px] w-[10px] rounded bg-lime-500"></div>
      </div>
      <div className="w-1/2 my-2">
        <DaysWrapper />
      </div>
    </div>
  );
}

export default App;
