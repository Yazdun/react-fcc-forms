import { Navigation, Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'

function App() {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <div>
      <Navigation />
      <FormProvider {...methods}>
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          className="container"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input {...name_validation} />
            <Input {...email_validation} />
            <Input {...num_validation} />
            <Input {...password_validation} />
            <Input {...desc_validation} className="col-span-2" />
          </div>
          <button
            onClick={onSubmit}
            className="p-5 mt-5 rounded-md bg-blue-600 font-semibold text-white"
          >
            Submit Form
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default App
