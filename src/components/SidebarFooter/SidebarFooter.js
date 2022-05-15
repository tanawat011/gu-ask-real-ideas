import Package from '@root/package.json'

export const SidebarFooter = () => {
  return (
    <>
      <div className='flex justify-center items-center w-sidebar h-footer bg-charcoal border-solid border-t-[1px] border-anchor shadow-t text-xs select-none'>
        version {Package.version}
      </div>
    </>
  )
}
