import PropTypes from 'prop-types'

export const DisplayBlock = ({ text }) => (
  <code className='bg-slate rounded p-1'>
    {text}
  </code>
)

DisplayBlock.propTypes = {
  text: PropTypes.string.isRequired,
}
