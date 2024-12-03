import logo from '../logo.webp';
import {Button} from "@/components/ui/button.tsx";

function NotFound() {

  return (
    <>
      <div className="h-[calc(100vh-4.25rem)] bg-[#8c8773]">
        <div className="container mx-auto flex flex-col items-center">
          <img src={logo} alt="Worried Guy selfie" className="w-[32rem] max-w-full" />
          <h1 className="uppercase text-4xl font-bold font-chelsea-market text-center">
            Page not found!
          </h1>
          <p className="text-xl font-chelsea-market text-center">
            Don't worry, it's probably our fault...
          </p>
          <Button variant="secondary" className="mt-4" asChild><a href="/">Back to home</a></Button>
        </div>
      </div>
    </>
  )
}

export default NotFound
