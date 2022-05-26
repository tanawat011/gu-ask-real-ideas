import clsx from 'clsx'
import { useState } from 'react'

import { ContainerWrapper } from '@component/ContainerWrapper/ContainerWrapper'
import { Card, CardBody, CardHeader } from '@component/Card/Card'
import { DisplayBlock } from '@component/DisplayBlock/DisplayBlock'
import { DisplayCodeBlock } from '@component/DisplayCodeBlock/DisplayCodeBlock'
import { TextInput } from '@component/InputTextInput/TextInput'
import { Table } from '@component/Table/Table'
import { ListDiscStep } from '@component/ListDiscStep/ListDiscStep'
import { romanCharacter, romanTableHeaders } from '@data/romanCharacter'
import utils from '@utils'

const twWrapContainer = clsx(
  ''
)

export const ArabicAndRoman = () => {
  const [arabic, setArabic] = useState()
  const [arabicFromRoman, setArabicFromRoman] = useState('')
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

  const handleArabicToRoman = (_arabic = 0) => {
    const start = performance.now()
    const result = utils.ArabicToRoman(_arabic)
    const duration = (performance.now() - start) / 1000

    setRomanFromArabic(result !== '0' && result)
    setRomanFromArabicDuration(duration.toFixed(5))
  }

  const handleRomanToArabic = () => { }

  return (
    <ContainerWrapper>
      <Card className='w-52'>
        <CardHeader>ROMAN CHARACTER</CardHeader>
        <CardBody>
          <Table headers={romanTableHeaders} data={romanCharacter} />
        </CardBody>
      </Card>

      <Card autoWidth className='flex-grow'>
        <CardHeader>ARABIC TO ROMAN</CardHeader>
        <CardBody>
          <TextInput number value={arabic} onChange={onChangeInputArabic} />
          <br />
          <span className=''>
            Result : {romanFromArabic && <DisplayBlock text={romanFromArabic} />}
          </span>
          <span className='mt-2'>Duration : <DisplayBlock text={`${romanFromArabicDuration}s`} /></span>

          <br />

          <span>Step : </span>
          <ListDiscStep list={utils.ArabicToRomanStep} />

          <ul className='list-disc ml-5'>
            <li className='mt-2 text-xs'>
              <span>ex : </span>
              <DisplayCodeBlock code={utils.ArabicToRomanString} />
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
