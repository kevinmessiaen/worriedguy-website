import Header from "@/components/header/header.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Outlet} from "react-router";

function Layout() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Header />
        <main>
          <Outlet />
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

export default Layout
