import { romanCharacter } from '@data/romanCharacter'

export const ArabicToRoman = (arabic = 0) => {
  const romanChars = [...romanCharacter].reverse()
  const result = ''
  const strArabic = `${arabic}`

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

export const ArabicToRomanStep = [
  'Split the arabic to array',
  'Loop the arabic and repeat <code>\'0\'</code> follow the ((length of arabic - 1) - (index of array))',
  [
    'ex : <code>(num, index) => num + \'0\'.repeat((arabic.length - 1) - index)</code>',
    'Incase if first char of arabic is <code>\'4\'</code>, convert arabic to array of <code>\'1\'</code> and <code>\'5\'</code>',
    'ex : <code>[1, 5]</code> or <code>[10, 50]</code>',
    'Incase if first char of arabic is <code>\'9\'</code>, convert arabic to array of <code>\'1\'</code> and <code>\'10\'</code>',
    'ex : <code>[1, 10]</code> or <code>[10, 100]</code>',
  ],
  'Loop the array of number with zero number follow position in main loop',
  'Loop the array of roman character in main loop',
  'Math.floor and divide between number with zero number and value of roman character',
  [
    'ex : <code>Math.floor(100 / 100) // => 1</code>',
    'ex : <code>Math.floor(900 / 500) // => 1</code>',
    'ex : <code>Math.floor(400 / 100) // => 4</code>',
    'ex : <code>Math.floor(10 / 1000) // => 0</code>',
  ],
  'If result from math over than zero',
  [
    'Set the last response to roman character by repeat character follow result of the math',
    'Minus temp of number in the current loop by current of roman character value multiply with result of math',
  ],
]

export const ArabicToRomanCode = `
  const romanChars = [...romanCharacter].reverse()
  const result = ''
  const strArabic = \`\$\{ arabic \}\`

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

`

export const RomanToArabic = (roman = '') => {
  const romanChars = [...romanCharacter]
  let result = 0

  roman.split('').forEach((s, i) => {
    romanChars.forEach((rChar, j) => {
      if (s === rChar.label) {
        const isNotFirst = i > 0
        const prevVal = +romanChars.find(r => r.label === roman[i - 1])?.value || 0
        const currVal = +rChar.value
        const isCurrOTPrev = isNotFirst && currVal > prevVal

        if (isCurrOTPrev) {
          console.log('xxx', currVal, prevVal, currVal - prevVal)
          const val = currVal - prevVal // 100 - 10

          console.log('ccc', result, val)

          // 10 = 90
          if (val >= result) result = val
          else result = result - val

          return
        }

        result += currVal//10
      }
    })
  })

  return `${result}`

  // strArabic
  //   .split('')
  //   .forEach((char, index) => {
  //     const withZero = (n) => +(n + '0'.repeat((strArabic.length - 1) - index))

  //     const numbArr = [withZero(char)]
  //     if (char === '4') numbArr = [withZero('1'), withZero('5')]
  //     if (char === '9') numbArr = [withZero('1'), withZero('10')]

  //     numbArr.forEach(n => {
  //       let tempNumb = n

  //       if (tempNumb) {
  //         romanChars.forEach(rChar => {
  //           const numbR = +rChar.value
  //           const mathF = Math.floor(tempNumb / numbR)

  //           if (mathF > 0) {
  //             result += rChar.label.repeat(mathF)
  //             tempNumb -= numbR * mathF
  //           }
  //         })
  //       }
  //     })
  //   })

  // return result
}

export const RomanToArabicStep = []

export const RomanToArabicCode = ''
