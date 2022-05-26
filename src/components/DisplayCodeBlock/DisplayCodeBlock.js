import PropTypes from 'prop-types'

export const DisplayCodeBlock = ({ code }) => (
  <pre className='bg-slate rounded '>
    <code lang='javascript'>
      {code}
    </code>
  </pre>
)

DisplayCodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
}
