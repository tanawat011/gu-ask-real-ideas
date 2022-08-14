import { useState } from 'react'

import { CardExample } from '@component/Card/CardExample'
import * as service from './services/RomanToArabic'

export const RomanToArabic = () => {
  const [roman, setRoman] = useState('')
  const [arabic, setArabic] = useState('')
  const [duration, setDuration] = useState(0)

  const onChangeInput = (value = '') => {
    if (value) {
      let valueUpper = value.toUpperCase()

      setRoman(valueUpper)
      handleRomanToArabic(valueUpper)

      return
    }

    setArabic('')
    setRoman('')
    setDuration(0)
  }

  const handleRomanToArabic = (roman = '') => {
    const start = performance.now()
    const result = service.RomanToArabic(roman)
    const duration = (performance.now() - start) / 1000

    // TODO: Now we not support more than 4000
    if (result >= 4000) {
      alert('Please enter a roman number less than 4000\nnow we not support more than 4000')
      setArabic('')
      setDuration(0)

      return
    }

    setArabic(result !== '0' && result)
    setDuration(duration.toFixed(5))
  }

  return (
    <CardExample
      header='ROMAN TO ARABIC'
      value={roman}
      onChange={onChangeInput}
      result={arabic}
      duration={duration}
      step={service.RomanToArabicStep}
      code={service.RomanToArabicCode}
    />
  )
}
