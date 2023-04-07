import React from 'react'
import { BsGithub } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b-2">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold">React Forms</div>
        <a href="" target="_blank">
          <BsGithub />
        </a>
      </nav>
    </div>
  )
}
