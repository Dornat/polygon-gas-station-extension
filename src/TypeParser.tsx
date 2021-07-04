import emoji from 'react-easy-emoji'
import {GasStationObject} from './App'

type TypeParserProps = {
  type: keyof GasStationObject
}

const TypeParser = (props: TypeParserProps) => {
  const {type} = props

  switch (type) {
    case 'safeLow':
      return <div className="gas-block__type">
        {emoji('🦺')}
        <div className="gas-block__title">Safe Low</div>
      </div>
    case 'standard':
      return <div className="gas-block__type">
        {emoji('🦥')}
        <div className="gas-block__title">Standard</div>
      </div>
    case 'fast':
      return <div className="gas-block__type">
        {emoji('✈')}
        <div className="gas-block__title">Fast</div>
      </div>
    case 'fastest':
      return <div className="gas-block__type">
        {emoji('🚀')}
        <div className="gas-block__title">Fastest</div>
      </div>
  }
}

export default TypeParser