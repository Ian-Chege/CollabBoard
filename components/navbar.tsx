import Link from "next/link"
import { ArrowRight } from "lucide-react"

import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import MobileNav from "./mobile-nav"

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <span className="flex z-40 font-semibold">Collab Board</span>
          <MobileNav />

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              {/* Pricing */}
              {/* <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link> */}
              <Link href="">
                <div
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in
                </div>
              </Link>

              <div
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </div>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
