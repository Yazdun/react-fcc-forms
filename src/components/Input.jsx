import cn from 'classnames'
import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion'
import { InputError } from './Error'

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'px-[1.563rem] font-medium autofill:bg-red-100 py-[1.25rem] rounded-md w-full border border-slate-200 dark:border-dark-700 dark:bg-dark-700 focus:outline-none placeholder:opacity-60'

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-bold">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={cn(
            input_tailwind,
            'min-h-[10rem] max-h-[20rem] resize-y',
            className,
          )}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={cn(input_tailwind, className)}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        />
      )}
    </div>
  )
}
