// Validation
const validate = (value, rules) => {
  let isValid = true

  for (let rule in rules) {
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

const emailValidator = value => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

const requiredValidator = value => {
  return value.trim() !== ''
}

const minLengthValidator = (value, wordLength) => {
  return value.trim().length >= wordLength
}

export default validate
