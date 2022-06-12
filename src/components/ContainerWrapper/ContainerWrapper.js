import clsx from 'clsx'

const twContainerWrapper = clsx(
  'flex',
  '-m-4',
)

export const ContainerWrapper = ({ children, className = '' }) => {
  return (
    <>
      <div className={twContainerWrapper}>
        {children}
      </div>
    </>
  )
}
