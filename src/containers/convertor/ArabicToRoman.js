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
  const [romanFromArabic, setRomanFromArabic] = useState('-')

  const onChangeInputArabic = (value = 0) => {
    if (value) {
      setArabic(value)
      handleArabicToRoman(value)

      return
    }

    setArabic('')
    setRomanFromArabic('-')
  }

  const handleArabicToRoman = (_arabic = 0) => {
    const result = utils.ArabicToRoman(_arabic)
    setRomanFromArabic(result !== '0' && result)
  }

  const handleRomanToArabic = () => { }

  return (
    <ContainerWrapper>
      <Card className='w-56'>
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
