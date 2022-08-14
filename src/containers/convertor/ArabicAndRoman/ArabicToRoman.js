import { useState } from 'react'

import { CardExample } from '@component/Card/CardExample'
import * as service from './services/ArabicToRoman'

export const ArabicToRoman = () => {
  const [arabic, setArabic] = useState()
  const [roman, setRoman] = useState('')
  const [duration, setDuration] = useState(0)

  const onChangeInput = (value = 0) => {
    if (value) {
      setArabic(value)

      // TODO: Now we not support more than 4000
      if (value >= 4000) {
        alert('Please enter a number less than 4000\nnow we not support more than 4000')
        setRoman('')
        setDuration(0)

        return
      }

      handleArabicToRoman(value)

      return
    }

    setArabic('')
    setRoman('')
    setDuration(0)
  }

  const handleArabicToRoman = (arabic = 0) => {
    const start = performance.now()
    const result = service.ArabicToRoman(arabic)
    const duration = (performance.now() - start) / 1000

    setRoman(result !== '0' && result)
    setDuration(duration.toFixed(5))
  }

  return (
    <CardExample
      header='ARABIC TO ROMAN'
      number
      value={arabic}
      onChange={onChangeInput}
      result={roman}
      duration={duration}
      step={service.ArabicToRomanStep}
      code={service.ArabicToRomanCode}
    />
  )
}
