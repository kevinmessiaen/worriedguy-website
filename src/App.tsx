import logo from './logo.webp';
import acknowledgement from './philb_acknowledgement.jpg';
import Header from "@/components/header/header.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CopyButton} from "@/components/ui/copy-button.tsx";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card.tsx";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Header />
        <main>
          <div className="h-[calc(100vh-4.25rem)] bg-[#8c8773]">
            <div className="container mx-auto flex flex-col items-center">
              <img src={logo} alt="Worried Guy selfie" className="w-[32rem] max-w-full" />
              <h1 className="uppercase text-4xl font-bold font-chelsea-market text-center">
                Just a Worried Guy
              </h1>
              <p className="text-xl font-chelsea-market text-center">
                The only meme everyone relate to
              </p>
              <Button variant="secondary" className="mt-4" asChild><a href="#about">Discover</a></Button>
            </div>
          </div>
          <div className="container mx-auto p-4">
            <h2 id="about" className="text-3xl font-bold pt-[4.5rem] mt-[-4.5rem]">About WorriedGuy</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4 overflow-hidden">
              <div>
               <div className="flex items-center">
                 <div className="mr-4 text-ellipsis overflow-hidden whitespace-nowrap">CA: DT3zuw4qzDw2Fp6Uh5W1aMZBK2wfGWZWjJUfJY9Qpump</div>
                 <CopyButton textToCopy="DT3zuw4qzDw2Fp6Uh5W1aMZBK2wfGWZWjJUfJY9Qpump" />
               </div>
               <Card className="max-w-[500px] mt-4 mx-auto">
                 <CardHeader>
                   <CardTitle>Philb acknowledgement</CardTitle>
                   <CardDescription>The same artist as chillguy acknowledged this coin</CardDescription>
                 </CardHeader>
                 <CardContent>
                   <img alt="Philb acknowledgement" loading="lazy" decoding="async" data-nimg="1"  src={acknowledgement}/>
                 </CardContent>
                 <CardFooter className="flex flex-row-reverse">
                   <Button asChild><a href="https://bsky.app/profile/phillipbankss.bsky.social/post/3lbcs7agqqk2r" target="_blank" rel="noreferrer" aria-label="View Philb acknowledgement on bsky">View on bsky</a></Button>
                 </CardFooter>
               </Card>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Welcome to <span className="italic">Just a Worried Guy</span> – A Memecoin for the Anxious Inside All of Us</h3>
                <p className="mb-1">Let’s be honest. Everyone wants to look chill, but deep down, we all know that feeling of <span className="italic">worry</span>. Whether it’s about the market, life, or just that awkward thing you said in your last group chat — <span className="italic">Just a Worried Guy</span> gets it.</p>
                <p className="mb-1">Born from the same creator who brought you Chill Guy, Philb’s latest creation is here to make sure you know you're never alone in your anxious moments. Just a Worried Guy is a meme coin built for those who laugh about their worries, but still feel them deep down. It’s the perfect mix of humor, relatability, and a little bit of panic.</p>
                <h3 className="text-2xl font-bold mt-3 mb-1">Why "Worried Guy"?</h3>
                <p className="mb-1">Because let’s face it—we all have that inner "worried guy" we keep hidden behind a cool exterior. Whether you're nervous about the next market dip or just waiting for that next big thing to go wrong, we’ve all been there. Just a Worried Guy is for everyone who knows what it's like to be chill on the outside, but full of what-ifs on the inside.</p>
                <p className="mb-1">As part of a Community Take Over (CTO), Just a Worried Guy isn’t just another meme coin. It’s a movement—a community for those who embrace their worries, share their laughs, and support each other through the ups and downs. Because, at the end of the day, we might all be a little worried, but together we can face it head-on.</p>
                <h3 className="text-2xl font-bold mt-3 mb-1">Join the Community, Share the Worry</h3>
                <p className="mb-1">The beauty of Just a Worried Guy is that we’re all in this together. Whether you're a crypto expert or just here for the memes, the community is what makes this coin special. It’s a space where you can be part of something fun, connect with others who get what you’re going through, and embrace the chaotic, unpredictable world we live in—without taking it all too seriously.</p>
                <p className="mb-1">So if you've ever wondered, “Am I the only one freaking out right now?”—the answer is no. We’re all worried, and we’re all in this together. Come join the Worried Guy crew, and let’s make the most of this crazy ride.</p>
                <p className="mb-1">Take a breath. Embrace the worry. And get ready to be part of something bigger.</p>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t bg-[#8c8773] flex justify-center items-center">
          <span>Just a Worried Guy -</span>
          <Button asChild variant='link' className='text-black'>
            <a href="https://github.com/kevinmessiaen/worriedguy-website" target="_blank" rel="noreferrer" aria-label="Contribute to this website">Contribute</a>
          </Button>
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App
