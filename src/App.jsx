import './App.css'

function App() {
  return (
    <div className="app">
     <div
        class="hero min-h-screen bg-img"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">COMING SOON</h1>
            <p class="mb-5">
             Hey, I am coding this website, and will publish it asap. Please spread the word and share this website with your friends.
            </p>
            
            <button onClick={() =>  navigator.clipboard.writeText('Hey, check out this awesome webiste - https://www.agamjot.dev/')} class="btn btn-primary">Spread</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
