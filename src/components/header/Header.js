import Telegram from "../icons/Telegram";
import X from "../icons/X";
import Instagram from "../icons/Instagram";
import TikTok from "../icons/TikTok";
import DexScreener from "../icons/DexScreener";
import Radyum from "../icons/Radyum";
import IconButton from "../buttons/IconButton";
function Header() {
    return (
        <header className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-gluten">
                 <div className="flex-1" />
                 <ul className="font-bold text-xl flex p-0 space-x-2 rtl:space-x-reverse mt-0">
                   <li>
                     <IconButton href="https://t.co/iphzwaYmqv" target="_blank" rel="noreferrer">
                       <Telegram />
                     </IconButton>
                   </li>
                    <li>
                     <IconButton href="https://x.com/WorriedGuyCTO1" target="_blank" rel="noreferrer">
                       <X />
                     </IconButton>
                   </li>
                   <li>
                     <IconButton href="https://www.instagram.com/worriedguy.meme?igsh=MWg2YWRtcXUxaTRnYw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                       <Instagram />
                     </IconButton>
                   </li>
                   <li>
                    <IconButton href="https://www.tiktok.com/@worriedguy100?_t=8ra3lXhS0wb&_r=1" target="_blank" rel="noreferrer">
                      <TikTok />
                    </IconButton>
                  </li>
                  <li>
                    <IconButton href="https://dexscreener.com/solana/9mylvrcbxzgmfjgab4t7b7pg3jxbyd6j9utadwgxqhfj" target="_blank" rel="noreferrer">
                      <DexScreener />
                    </IconButton>
                  </li>
                  <li>
                    <IconButton href="https://raydium.io/swap/?inputMint=sol&outputMint=DT3zuw4qzDw2Fp6Uh5W1aMZBK2wfGWZWjJUfJY9Qpump" target="_blank" rel="noreferrer">
                      <Radyum />
                    </IconButton>
                  </li>
                 </ul>
              </header>
    )
}

export default Header;