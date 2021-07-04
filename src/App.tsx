import React, {useEffect, useState} from 'react';
import './App.css';
import GasBlock from './GasBlock'

export type GasStationObject = {
  safeLow: number
  standard: number
  fast: number
  fastest: number
}

const App = () => {
  const [gasStationObject, setGasStationObject] = useState<GasStationObject | null>(null)

  useEffect(() => {
    handleReload()
    const interval = setInterval(() => {
      handleReload()
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const handleReload = () => {
    fetch('https://gasstation-mainnet.matic.network')
      .then(response => response.json())
      .then(data => setGasStationObject({
        safeLow: data.safeLow,
        standard: data.standard,
        fast: data.fast,
        fastest: data.fastest
      }))
  }

  return (
    <div className="App">
      <div className="gas-board">
        {gasStationObject && Object.keys(gasStationObject).map((k: string, index) => (
          // @ts-ignore
          <GasBlock key={index} type={k} value={gasStationObject[k]}/>
        ))}
      </div>
    </div>
  )
}

export default App;
