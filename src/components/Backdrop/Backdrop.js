import { useState, useEffect } from 'react'

export const BackDrop = (props) => {
  const [displayBackdrop, setDisplayBackdrop] = useState('hidden')

  useEffect(() => {
    setRightSidebarClass(props.isShowBackdrop)
  }, [props.isShowBackdrop])

  const onClickBackdrop = () => {
    props.onClickBackdrop()
    setRightSidebarClass(false)
  }

  const setRightSidebarClass = (isShow) => {
    if (isShow) {
      setDisplayBackdrop('block')
    } else {
      setDisplayBackdrop('hidden')
    }
  }

  return (
    <div className={`fixed bg-black opacity-30 z-10 w-[100vw] h-[100vh] ${displayBackdrop}`} onClick={onClickBackdrop} />
  )
}
