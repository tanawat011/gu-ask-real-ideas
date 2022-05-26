import PropTypes from 'prop-types'

export const Table = ({ headers, data }) => {
  return (
    <table className='bg-slate rounded-md'>
      <colgroup>
        {headers.map((header) => (
          <col key={header.value + 'col'} className={header.className} />
        ))}
      </colgroup>
      <thead>
        <tr className='border-b border-solid border-smoke/25'>
          {headers.map((header) => (
            <td key={header.value + 'head'} className='p-4 select-none text-sm'>{header.label}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          const rowClass = i !== data.length - 1 ? 'border-b border-solid border-smoke/25' : ''

          return (
            <tr key={item.label + i} className={rowClass}>
              {headers.map((header) => (
                <td key={item.value + header.value} className='p-4 select-none text-sm'>{item[header.value]}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
}
