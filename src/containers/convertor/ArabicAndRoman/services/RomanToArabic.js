import { romanCharacter } from '@data/romanCharacter'

export const RomanToArabic = (roman = '') => {
  const romanChars = [...romanCharacter].filter(r => !r.isAdvance)
  let result = 0

  roman.split('').forEach((s, i) => {
    romanChars.forEach((rChar, j) => {
      if (s === rChar.label) {
        const isNotFirst = i > 0
        const prevVal = +romanChars.find(r => r.label === roman[i - 1])?.value || 0
        const currVal = +rChar.value
        const isCurrOTPrev = isNotFirst && currVal > prevVal

        if (isCurrOTPrev) {
          const val = currVal - prevVal

          if (val >= result) result = val
          else result = result - prevVal + val

          return
        }

        result += currVal
      }
    })
  })

  return `${result}`
}

export const RomanToArabicStep = []

export const RomanToArabicCode = ''
