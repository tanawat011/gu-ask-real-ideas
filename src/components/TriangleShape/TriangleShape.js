const triangleShape = 'border-solid border-b-8 border-x-transparent border-x-8 border-t-0'

export const TriangleShape = (props) => {
  const {
    additionalClass = '',
    topPx = '',
    leftPx = '',
  } = props

  return (
    <div className={`absolute ${topPx} ${leftPx} border-b-card_bg ${triangleShape} ${additionalClass}`} />
  )
}
