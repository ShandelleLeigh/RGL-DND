const styles = {
  main : {
    backgroundColor: '#cbf1eb', // light blue
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: '10px',
    // gridAutoRows: `minmax(100px, auto)`,
    gridTemplateRows: `repeat(12, 8.33vh)`,
    gridColumn: '1/-1',
    gridRow: '1/-1',
    height: '100%',
  },
  toolbar: {
    backgroundColor: 'rgba(245,111,148,0.3)', // pink
    gridColumn: '1/3',
    gridRow: '1/-1',
    // height: '100vh',
    // display: 'grid',
    // gridTemplateColumns: 'repeat(12, 1fr)',
    // gridTemplateRows: 'repeat(12, .8fr)',
    // gridGap: '10px',
    height: '100%',
  },
  canvas: {
    // backgroundColor: 'rgba(181,255,90,0.3)', // green
    gridColumn: '3/-1',
    gridRow: '1/-1',
  },
  items: {
    border: '1px solid black',
  }
};

export default styles;