import { useState } from 'react'

import { ContainerWrapper } from '@component/ContainerWrapper/ContainerWrapper'
import { Card, CardBody, CardHeader } from '@component/Card/Card'
import { CardExample } from '@component/Card/CardExample'
import { DisplayBlock } from '@component/DisplayBlock/DisplayBlock'
import { DisplayCodeBlock } from '@component/DisplayCodeBlock/DisplayCodeBlock'
import { TextInput } from '@component/InputTextInput/TextInput'
import { Table } from '@component/Table/Table'
import { ListDiscStep } from '@component/ListDiscStep/ListDiscStep'
import { romanCharacter, romanTableHeaders } from '@data/romanCharacter'
import utils from '@utils'

export const ArabicAndRoman = () => {
  const [arabic, setArabic] = useState()
  const [arabicFromRoman, setArabicFromRoman] = useState('')
  const [arabicFromRomanDuration, setArabicFromRomanDuration] = useState(0)
  const [roman, setRoman] = useState('')
  const [romanFromArabic, setRomanFromArabic] = useState('')
  const [romanFromArabicDuration, setRomanFromArabicDuration] = useState(0)

  const onChangeInputArabic = (value = 0) => {
    if (value) {
      setArabic(value)
      handleArabicToRoman(value)

      return
    }

    setArabic('')
    setRomanFromArabic('')
    setRomanFromArabicDuration(0)
  }

  const handleArabicToRoman = (arabic = 0) => {
    const start = performance.now()
    const result = utils.ArabicToRoman(arabic)
    const duration = (performance.now() - start) / 1000

    setRomanFromArabic(result !== '0' && result)
    setRomanFromArabicDuration(duration.toFixed(5))
  }

  const onChangeInputRoman = (value = '') => {
    if (!+value) {
      setRoman(value.toUpperCase())
      handleRomanToArabic(value.toUpperCase())

      return
    }

    setRoman('')
    setArabicFromRoman('')
    setArabicFromRomanDuration(0)
  }

  const handleRomanToArabic = (roman = '') => {
    const start = performance.now()
    const result = utils.RomanToArabic(roman)
    const duration = (performance.now() - start) / 1000

    setArabicFromRoman(result !== '0' && result)
    setArabicFromRomanDuration(duration.toFixed(5))
  }

  return (
    <ContainerWrapper>
      <div>
        <Card className='w-52'>
          <CardHeader>ROMAN CHARACTER</CardHeader>
          <CardBody>
            <Table headers={romanTableHeaders} data={romanCharacter} />
          </CardBody>
        </Card>
      </div>

      <div className='flex w-full'>
        <CardExample
          header='ARABIC TO ROMAN'
          number
          value={arabic}
          onChange={onChangeInputArabic}
          result={romanFromArabic}
          duration={romanFromArabicDuration}
          step={utils.ArabicToRomanStep}
          code={utils.ArabicToRomanCode}
        />

        <CardExample
          header='ROMAN TO ARABIC'
          value={roman}
          onChange={onChangeInputRoman}
          result={arabicFromRoman}
          duration={arabicFromRomanDuration}
          step={utils.RomanToArabicStep}
          code={utils.RomanToArabicCode}
        />
      </div>
    </ContainerWrapper>
  )
}
