import clsx from 'clsx'
import { useState, useEffect } from 'react'

import { ContainerWrapper } from '@component/ContainerWrapper/ContainerWrapper'
import { Card, CardBody, CardHeader } from '@component/Card/Card'
import { TextInput } from '@component/InputTextInput/TextInput'
import { romanCharacter } from '@data/romanCharacter'
import utils from '@utils'

const twWrapContainer = clsx(
  ''
)

export const ArabicToRoman = () => {
  const [arabic, setArabic] = useState()
  const [arabicFromRoman, setArabicFromRoman] = useState('')
  const [roman, setRoman] = useState('')
  const [romanFromArabic, setRomanFromArabic] = useState('')

  const onChangeInputArabic = (value = 0) => {
    if (value) {
      setArabic(value)
      handleArabicToRoman(value)

      return
    }

    setArabic('')
    setRomanFromArabic('')
  }

  const handleArabicToRoman = (_arabic = 0) => {
    const result = utils.ArabicToRoman(_arabic)
    setRomanFromArabic(result !== '0' && result)
  }

  const handleRomanToArabic = () => { }

  return (
    <ContainerWrapper>
      <Card className='w-52'>
        <CardHeader>ROMAN CHARACTER</CardHeader>
        <CardBody>
          <table className='bg-slate rounded-md'>
            <colgroup>
              <col className='w-24' />
              <col className='w-24' />
            </colgroup>
            <thead>
              <tr className='border-b border-solid border-smoke/25'>
                <td className='p-4 select-none text-sm'>ROMAN</td>
                <td className='p-4 select-none text-sm'>ARABIC</td>
              </tr>
            </thead>
            <tbody>
              {romanCharacter.map((item, i) => {
                const rowClass = i !== romanCharacter.length - 1 ? 'border-b border-solid border-smoke/25' : ''

                return (
                  <tr key={item.label + i} className={rowClass}>
                    <td className='p-4 select-none text-sm'>{item.label}</td>
                    <td className='p-4 select-none text-sm'>{item.value}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Card autoWidth className='flex-grow'>
        <CardHeader>ARABIC TO ROMAN</CardHeader>
        <CardBody>
          <TextInput number value={arabic} onChange={onChangeInputArabic} />
          <br />
          <span className=''>
            Result : {romanFromArabic}
          </span>

          <br />

          <span>Step : </span>
          <ul className='list-disc ml-5'>
            <li className='mt-2 text-xs'>Split the arabic to array</li>
            <li className='mt-2 text-xs'>Loop the arabic and repeat {'\'0\''} follow the ((length of arabic - 1) - (index of array))</li>
            <ul className='list-disc ml-5'>
              <li className='mt-1 text-xs'>ex : <span>{'\'(num, index) => num + \'0\'.repeat((arabic.length - 1) - index)\''}</span></li>
              <li className='mt-2 text-xs'>Incase if first char of arabic is {'4'}, convert arabic to array of {'1'} and {'5'}</li>
              <li className='mt-1 text-xs'>ex : <span>{'[1, 5] or [10, 50]'}</span></li>
              <li className='mt-2 text-xs'>Incase if first char of arabic is {'9'}, convert arabic to array of {'1'} and {'10'}</li>
              <li className='mt-1 text-xs'>ex : <span>{'[1, 10] or [10, 100]'}</span></li>
            </ul>
            <li className='mt-2 text-xs'>Loop the array of number with zero number follow position in main loop</li>
            <li className='mt-2 text-xs'>Loop the array of roman character in main loop</li>
            <li className='mt-2 text-xs'>Math.floor and divide between number with zero number and value of roman character</li>
            <ul className='list-disc ml-5'>
              <li className='mt-1 text-xs'>ex : <span>{'Math.floor(100 / 100) // => 1'}</span></li>
              <li className='mt-1 text-xs'>ex : <span>{'Math.floor(900 / 500) // => 1'}</span></li>
              <li className='mt-1 text-xs'>ex : <span>{'Math.floor(400 / 100) // => 4'}</span></li>
              <li className='mt-1 text-xs'>ex : <span>{'Math.floor(10 / 1000) // => 0'}</span></li>
            </ul>
            <li className='mt-2 text-xs'>If result from math over than zero</li>
            <ul className='list-disc ml-5'>
              <li className='mt-1 text-xs'>Set the last response to roman character by repeat character follow result of the math</li>
              <li className='mt-1 text-xs'>Minus temp of number in the current loop by current of roman character value multiply with result of math</li>
            </ul>
            <li className='mt-2 text-xs'>
              <span>ex : </span>
              <pre className='bg-slate rounded'>
                {`  const romanChars = [...romanCharacter].reverse()
  const result = ''
  const strArabic = \`\$\{_arabic\}\`

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
    })`}
              </pre>
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card autoWidth className='flex-grow'>
        <CardHeader>ROMAN TO ARABIC</CardHeader>
        <CardBody>
          <TextInput number value={roman} onChange={setRoman} />
          <br />
          <span className=''>
            Result : {arabicFromRoman}
          </span>
        </CardBody>
      </Card>
    </ContainerWrapper>
  )
}
