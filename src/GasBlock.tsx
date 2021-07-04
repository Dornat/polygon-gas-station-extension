import TypeParser from './TypeParser'
import {GasStationObject} from './App'

type GasBlockProps = {
  type: keyof GasStationObject
  value: number
}

const GasBlock = (props: GasBlockProps) => {
  const {type, value} = props

  return <>
    <div className="gas-block">
      <TypeParser type={type}/>
      <div className="gas-block__price">{value.toFixed(2)}</div>
    </div>
  </>
}

export default GasBlock