import PropTypes from 'prop-types'

export const ListDiscStep = ({ list }) => {
  return (
    <ul className='list-disc ml-5'>
      {list.map((text) => {
        if (typeof text === 'string') {
          text = text.replaceAll('<code>', '<code class=\'bg-slate rounded p-1\'>')

          return (
            <li key={text} className='mt-2 text-xs' dangerouslySetInnerHTML={{ __html: text }} />
          )
        }

        const textArr = text

        return (
          <ul key={text} className='list-disc ml-5'>
            {textArr.map((t) => {
              t = t.replaceAll('<code>', '<code class=\'bg-slate rounded p-1\'>')

              return (
                <li key={t} className='mt-2 text-xs' dangerouslySetInnerHTML={{ __html: t }} />
              )
            })}
          </ul>
        )
      })}
    </ul>
  )
}

ListDiscStep.propTypes = {
  list: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}
