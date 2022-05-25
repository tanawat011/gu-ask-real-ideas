import { romanCharacter } from '@data/romanCharacter'

export const ArabicToRoman = (_arabic = 0) => {
  const romanChars = [...romanCharacter].reverse()
  const result = ''
  const strArabic = `${_arabic}`

  strArabic
    .split('')
    .forEach((char, index) => {
      const withZero = (n) => +(n + '0'.repeat((strArabic.length - 1) - index))

      const numbArr = [withZero(char)]
      if (char === '4') numbArr = [withZero('1'), withZero('5')]
      if (char === '9') numbArr = [withZero('1'), withZero('10')]

      numbArr.forEach(n => {
        let tempNumb = n

        if (tempNumb) {
          romanChars.forEach(rChar => {
            const numbR = +rChar.value
            const mathF = Math.floor(tempNumb / numbR)

            if (mathF > 0) {
              result += rChar.label.repeat(mathF)
              tempNumb -= numbR * mathF
            }
          })
        }
      })
    })

  return result
}
