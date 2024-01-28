export default function App() {
  return (
    <>
      <div className="container my-16">
        <h1 className="text-slate-700 text-4xl font-bold text-center mt-20 mb-8">
          Caculator App
        </h1>

        <div className="flex flex-col gap-y-3 border shadow-sm p-4 rounded-lg">
          <div className="bg-slate-800 w-full p-10 rounded-lg text-slate-100 text-end text-[1.3rem] font-semibold">
            <span>0</span>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary">7</button>
            <button className="btn-primary">8</button>
            <button className="btn-primary">9</button>
            <button className="btn-primary negative">+/-</button>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary">4</button>
            <button className="btn-primary">6</button>
            <button className="btn-primary">7</button>
            <button className="btn-primary operator">-</button>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary">1</button>
            <button className="btn-primary">2</button>
            <button className="btn-primary">3</button>
            <button className="btn-primary operator">+</button>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary">AC</button>
            <button className="btn-primary basis-[50%]">0</button>
            <button className="btn-primary operator">=</button>
          </div>
        </div>
      </div>
    </>
  );
}
