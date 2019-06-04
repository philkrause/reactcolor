import React, { useState } from 'react'
import Header from './Header'

export default function ColorContainer() {

  const random = () => Math.floor(Math.random() * 100)
  const randomH = () => Math.floor(Math.random() * 360)

  const [hue, setHue] = useState(randomH)
  const [sat, setSat] = useState(random)
  const [lit, setLit] = useState(random)

  const buttonFire = () => {
    setHue(randomH)
    setSat(random)
    setLit(random)

  }

  console.log({ randomH })


  const colorChange = {
    color: `hsl(${hue},${sat}%,${lit}%)`
  }
  const buttonStyle = {
    padding: '2rem',
    fontSize: '2rem',
    fontFamily: 'Maiden Orange, cursive',
    borderRadius: '4px',
    backgroundColor: `hsl(${hue},${sat}%,${lit}%)`
  }

  return (
    <>
      <Header
        hue={hue}
        sat={sat}
        lit={lit}
      />
      <section className="color-container">
        <p>
          <input
            onChange={e => setHue(e.target.value)}
            type="range"
            id="hue"
            name="hue"
            min="0"
            max="360"
            value={hue}
          />
          <label style={colorChange} for="hue">
            Hue:<spam style={{ fontFamily: 'verdana' }}>{` ${hue}`}</spam>
          </label>
        </p>
        <p>
          <input
            onChange={e => setSat(e.target.value)}
            type="range"
            id="sat"
            name="sat"
            min="0"
            max="100"
            value={sat}
          />
          <label style={colorChange} for="sat">
            Sat<spam style={{ fontFamily: 'verdana' }}>{` ${sat}`}</spam>
          </label>
        </p>
        <p>
          <input
            onChange={e => setLit(e.target.value)}
            type="range"
            id="lit"
            name="lit"
            min="0"
            max="100"
            value={lit}
          />
          <label style={colorChange} for="lit">
            Lit<spam style={{ fontFamily: 'verdana' }}>{` ${lit}`}</spam>
          </label>
        </p>

      </section>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem'
      }}>
        <button onClick={buttonFire} style={buttonStyle}>
          Get Random Color
        </button>
      </div>
    </>
  )
}


