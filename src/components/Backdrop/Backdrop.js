import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { closeBackdrop } from '@redux/baseSlice'

export const BackDrop = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.base.isOpenBackdrop)

  const [displayBackdrop, setDisplayBackdrop] = useState('hidden')

  useEffect(() => {
    if (isOpen) {
      setDisplayBackdrop('block')
    } else {
      setDisplayBackdrop('hidden')
    }
  }, [isOpen])

  const handleClickBackdrop = () => {
    dispatch(closeBackdrop())
  }

  return (
    <div className={`fixed bg-black opacity-30 z-20 w-[100vw] h-[100vh] ${displayBackdrop}`} onClick={handleClickBackdrop} />
  )
}
