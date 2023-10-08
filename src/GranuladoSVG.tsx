

function GranuladoSVG() {
  return (
    <svg style={{ display: 'none' }}>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='0.7'
          stitchTiles='stitch'
          result="turbulence"/>
        <feColorMatrix
          in="turbulence"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.3 0"/>
      </filter>
    </svg>
  );
}

export default GranuladoSVG;