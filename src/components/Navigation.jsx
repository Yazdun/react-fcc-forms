/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold">React Forms</div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/Yazdun/react-fcc-forms" target="_blank">
            <BsGithub />
          </a>
          <a href="https://twitter.com/Yazdun" target="_blank">
            <BsTwitter />
          </a>
        </div>
      </nav>
    </div>
  )
}
