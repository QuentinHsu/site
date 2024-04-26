import { signature as SVGSignaturePath } from '../../constants/svg.ts'
import './index.scss'

function SVGSignature() {
  const strokeColor = 'var(--gray-0)'
  return (
    <div className="signature">
      <svg viewBox="0 0 550 110" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <path
          d={SVGSignaturePath}
          stroke={strokeColor}
          strokeWidth="2"
          fill="transparent"
          id="signature-path"
        />
      </svg>
    </div>
  )
}

export default SVGSignature
