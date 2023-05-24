/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🦝 Todo: CREATE RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from 'classnames'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
      />
    </div>
  )
}

const InputError = () => {
  return <div>error</div>
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
