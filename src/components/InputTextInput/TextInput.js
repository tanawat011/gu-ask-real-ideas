import clsx from 'clsx'

const twTextInput = (additional) => clsx(
  'bg-coin',
  'rounded-md',
  'border',
  'border-solid',
  'border-smoke/25',
  'text-sm',
  'px-3',
  'py-2',
  'outline-0',
  additional,
)

export const TextInput = ({
  className = '',
  placeholder = 'input here',
  value = '',
  onChange = () => { },
}) => {
  return (
    <input
      className={twTextInput(className)}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
