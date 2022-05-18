import clsx from 'clsx'

const twTriangleShape = () => clsx(
  'border-solid',
  'border-b-8',
  'border-x-transparent',
  'border-x-8',
  'border-t-0',
)
const twTriangle = (additional) => clsx(
  'absolute',
  'border-b-card_bg',
  twTriangleShape(),
  additional,
)

export const TriangleShape = (props) => {
  const {
    additionalClass = '',
    topPx = '',
    leftPx = '',
  } = props

  const twtwTriangleClass = twTriangle([topPx, leftPx, additionalClass])

  return (
    <div className={twtwTriangleClass} />
  )
}
