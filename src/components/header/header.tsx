import {Button} from "@/components/ui/button.tsx";
import Telegram from "@/components/icons/Telegram.tsx";
import Instagram from "@/components/icons/Instagram.tsx";
import TikTok from "@/components/icons/TikTok.tsx";
import DexScreener from "@/components/icons/DexScreener.tsx";
import Radyum from "@/components/icons/Radyum.tsx";
import X from "@/components/icons/X.tsx";
import {Sheet,SheetContent,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet.tsx";
import {IconMenu2} from "@tabler/icons-react";

const Header =() => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Button asChild variant="ghost" className="font-bold font-chelsea-market">
          <a href="/">WorriedGuy</a>
        </Button>
        <div className="flex-1" />
        <ul className="hidden font-bold text-xl md:flex p-0 space-x-2 rtl:space-x-reverse mt-0n">
          <li>
            <Button asChild variant='ghost'>
              <a href="https://t.co/iphzwaYmqv" target="_blank" rel="noreferrer" aria-label="Join our Telegram community"><Telegram /></a>
            </Button>
          </li>
          <li>
            <Button asChild variant='ghost'>
              <a href="https://x.com/WorriedGuyX" target="_blank" rel="noreferrer" aria-label="Follow us on X"><X /></a>
            </Button>
          </li>
          <li>
            <Button asChild variant='ghost'>
              <a href="https://www.instagram.com/worriedguy.meme?igsh=MWg2YWRtcXUxaTRnYw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram"><Instagram /></a>
            </Button>
          </li>
          <li>
            <Button asChild variant='ghost'>
              <a href="https://www.tiktok.com/@worriedguy100?_t=8ra3lXhS0wb&_r=1" target="_blank" rel="noreferrer" aria-label="Follow us on TikTok"><TikTok /></a>
            </Button>
          </li>
          <li>
            <Button asChild variant='ghost'>
              <a href="https://dexscreener.com/solana/9mylvrcbxzgmfjgab4t7b7pg3jxbyd6j9utadwgxqhfj" target="_blank" rel="noreferrer" aria-label="Check the charts on DEX Screener"><DexScreener /></a>
            </Button>
          </li>
          <li>
            <Button asChild variant='ghost'>
              <a href="https://raydium.io/swap/?inputMint=sol&outputMint=DT3zuw4qzDw2Fp6Uh5W1aMZBK2wfGWZWjJUfJY9Qpump" target="_blank" rel="noreferrer" aria-label="Swap WorriedGuy token on Radyum"><Radyum /></a>
            </Button>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden"><IconMenu2 stroke={2} /></Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>WorriedGuy</SheetTitle>
            </SheetHeader>
            <ul className='flex flex-col gap-4 p-8'>
              <li>
                <Button asChild variant='ghost'>
                  <a href="https://t.co/iphzwaYmqv" target="_blank" rel="noreferrer" aria-label="Join our Telegram community"><Telegram />Telegram</a>
                </Button>
              </li>
              <li>
                <Button asChild variant='ghost'>
                  <a href="https://x.com/WorriedGuyCTO1" target="_blank" rel="noreferrer" aria-label="Follow us on X"><X />X</a>
                </Button>
              </li>
              <li>
                <Button asChild variant='ghost'>
                  <a href="https://www.instagram.com/worriedguy.meme?igsh=MWg2YWRtcXUxaTRnYw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram"><Instagram />Instagram</a>
                </Button>
              </li>
              <li>
                <Button asChild variant='ghost'>
                  <a href="https://www.tiktok.com/@worriedguy100?_t=8ra3lXhS0wb&_r=1" target="_blank" rel="noreferrer" aria-label="Follow us on TikTok"><TikTok />TikTok</a>
                </Button>
              </li>
              <li>
                <Button asChild variant='ghost'>
                  <a href="https://dexscreener.com/solana/9mylvrcbxzgmfjgab4t7b7pg3jxbyd6j9utadwgxqhfj" target="_blank" rel="noreferrer" aria-label="Check the charts on DEX Screener"><DexScreener />DEX Screener</a>
                </Button>
              </li>
              <li>
                <Button asChild variant='ghost'>
                  <a href="https://raydium.io/swap/?inputMint=sol&outputMint=DT3zuw4qzDw2Fp6Uh5W1aMZBK2wfGWZWjJUfJY9Qpump" target="_blank" rel="noreferrer" aria-label="Swap WorriedGuy token on Radyum"><Radyum />Radyum</a>
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
Header.displayName = "Header"

export default Header