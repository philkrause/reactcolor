import React, { useState } from 'react'

export default function Header(props) {

  const colorHeader = {
    backgroundColor: `hsl(${props.hue},${props.sat}%,${props.lit}%)`
  }

  return (
    <>
      <section style={colorHeader} className="head">
        <h1>
          <i className="fas fa-random" />
          Color Tracker
          </h1>
      </section>
    </>
  )
}
