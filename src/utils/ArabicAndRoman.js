import { romanCharacter } from '@data/romanCharacter'

export const ArabicToRoman = (_arabic) => {
  const romanChars = [...romanCharacter].reverse()

  const numbArr = `${_arabic}`
    .split('')
    .reverse()
    .map((char, index) => {
      const withZero = (n) => +(n + '0'.repeat(index))
      if (char === '4') return [withZero('1'), withZero('5')]
      if (char === '9') return [withZero('1'), withZero('10')]

      return withZero(char)
    })
    .reverse()

  numbArr.forEach((numb, i) => {
    const numbs = typeof numb === 'number' ? [numb] : numb
    let tempResult = ''

    numbs.forEach(n => {
      let tempNumb = n

      if (tempNumb) {
        romanChars.forEach(rChar => {
          const numbR = +rChar.value
          const mathF = Math.floor(tempNumb / numbR)

          if (mathF > 0) {
            tempResult += rChar.label.repeat(mathF)
            tempNumb -= numbR * mathF
          }
        })
      }
    })

    numbArr[i] = tempResult
  })

  return numbArr.join('')
}
