import logo from './logo.webp';
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto flex flex-col items-center">
        <img src={logo} alt="Worried Guy selfie" className="max-w-full w-[32rem]" />
        <h1 className="uppercase text-4xl font-bold font-chelsea-market text-center">
          Just a Worried Guy
        </h1>
        <p className="text-xl font-chelsea-market text-center">
          The only meme everyone relate to
        </p>
        <p className="text-xl font-chelsea-market text-center pt-2">
          Website under construction!
        </p>
      </main>
    </div>
  );
}

export default App;
