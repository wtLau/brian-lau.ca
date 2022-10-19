// Validation
const validate = (value: string, rules: any) => {
  let isValid = true

  for (const rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(value)
        break
      case 'isRequired':
        isValid = isValid && requiredValidator(value)
        break
      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule])
        break
      default:
        isValid = true
    }
  }
  return isValid
}

const emailValidator = (value: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

const requiredValidator = (value: string) => {
  return value.trim() !== ''
}

const minLengthValidator = (value: string, wordLength: number) => {
  return value.trim().length >= wordLength
}

export default validate
