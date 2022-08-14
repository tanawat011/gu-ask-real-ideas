import { Card, CardBody, CardHeader } from './Card'
import { DisplayBlock } from '@component/DisplayBlock/DisplayBlock'
import { DisplayCodeBlock } from '@component/DisplayCodeBlock/DisplayCodeBlock'
import { TextInput } from '@component/InputTextInput/TextInput'
import { ListDiscStep } from '@component/ListDiscStep/ListDiscStep'

export const CardExample = ({
  header,
  number = false,
  value,
  onChange = () => { },
  result,
  duration,
  step,
  code,
}) => (
  <Card autoWidth className='flex-grow'>
    <CardHeader>{header}</CardHeader>
    <CardBody>
      <TextInput number={number} value={value} onChange={onChange} />

      <br />

      <span className=''>
        Result : {result && <DisplayBlock text={result} />}
      </span>

      <span className='mt-2'>Duration : <DisplayBlock text={`${duration}s`} /></span>

      <br />

      <span>Step : </span>
      <ListDiscStep list={step} />

      <ul className='list-disc ml-5'>
        <li className='mt-2 text-xs'>
          <span>ex : </span>
          <DisplayCodeBlock code={code} />
        </li>
      </ul>
    </CardBody>
  </Card>
)
