import { ContainerWrapper } from '@component/ContainerWrapper/ContainerWrapper'
import { Card, CardBody, CardHeader } from '@component/Card/Card'
import { Table } from '@component/Table/Table'
import { romanCharacter, romanTableHeaders } from '@data/romanCharacter'

import { ArabicToRoman } from './ArabicToRoman'
import { RomanToArabic } from './RomanToArabic'

const setRomanChars = item => {
  let label = item.display || item.label

  if (item.isAdvance) label = `${label} (Incoming)`

  return {
    label,
    value: item.value,
  }
}

export const ArabicAndRoman = () => {
  const data = romanCharacter.map(setRomanChars)

  return (
    <ContainerWrapper>
      <div>
        <Card className='w-72'>
          <CardHeader>ROMAN CHARACTER</CardHeader>
          <CardBody>
            <Table headers={romanTableHeaders} data={data} />
          </CardBody>
        </Card>
      </div>

      <div className='flex w-full'>
        <ArabicToRoman />

        <RomanToArabic />
      </div>
    </ContainerWrapper>
  )
}
