import logo from './logo.webp';
import X from "./components/icons/X";
import Telegram from "./components/icons/Telegram";
import Instagram from "./components/icons/Instagram";
import TikTok from "./components/icons/TikTok";
import WorriedGuy from "./components/icons/WorriedGuy";
import DexScreener from "./components/icons/DexScreener";
import Radyum from "./components/icons/Radyum";

function App() {
  return (
    <div>
      <header className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-gluten">
         <div className="flex-1" />
         <ul className="font-bold text-xl flex p-0 space-x-2 rtl:space-x-reverse mt-0">
           <li>
             <a href="https://t.co/iphzwaYmqv" target="_blank" rel="noreferrer" className="block py-2 px-3 text-black rounded hover:bg-amber-100">
               <Telegram />
             </a>
           </li>
            <li>
             <a href="https://x.com/WorriedGuyCTO1" target="_blank" rel="noreferrer" className="block py-2 px-3 text-black rounded hover:bg-amber-100">
               <X />
             </a>
           </li>
           <li>
             <a href="https://www.instagram.com/worriedguy.meme?igsh=MWg2YWRtcXUxaTRnYw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="block py-2 px-3 text-black rounded hover:bg-amber-100">
               <Instagram />
             </a>
           </li>
           <li>
            <a href="https://www.tiktok.com/@worriedguy100?_t=8ra3lXhS0wb&_r=1" target="_blank" rel="noreferrer" className="block py-2 px-3 text-black rounded hover:bg-amber-100">
              <TikTok />
            </a>
          </li>
          <li>
            <a href="https://dexscreener.com/solana/9mylvrcbxzgmfjgab4t7b7pg3jxbyd6j9utadwgxqhfj" target="_blank" rel="noreferrer" className="block py-2 px-3 text-black rounded hover:bg-amber-100">
              <DexScreener />
            </a>
          </li>
          <li>
            <a href="https://raydium.io/swap/?inputMint=sol&outputMint=DT3zuw4qzDw2Fp6Uh5W1aMZBK2wfGWZWjJUfJY9Qpump" target="_blank" rel="noreferrer" className="block py-2 px-3 text-black rounded hover:bg-amber-100">
              <Radyum />
            </a>
          </li>
         </ul>
      </header>
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
