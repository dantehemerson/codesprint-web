import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    const isDark = localStorage.getItem('dark') === 'true'

    return (
      <div
        style={{
          display        : 'flex',
          justifyContent : 'center',
          alignItems     : 'center',
          position       : 'absolute',
          backgroundColor: isDark ? 'black' : undefined,
          right          : 0,
          left           : 0,
          top            : 0,
          bottom         : 0
        }}>
        Cargando...
      </div>
    )
  }
}
