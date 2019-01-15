const styles = {
  main : {
    backgroundColor: '#cbf1eb', // light blue
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    gridAutoRows: `minmax(100px, auto)`,
  },
  one : {
    backgroundColor: 'rgba(245,111,148,0.3)', // pink
    textAlign: 'center',
    verticalAlign: 'middle',
    gridColumn: '1/4',
    gridRow: '1',
  },
  two: {
    backgroundColor: 'rgba(255,167,84,0.3)', // orange
    textAlign: 'center',
    verticalAlign: 'middle',
    gridColumn: '2/4',
    gridRow: '1/3',
  },
  three: {
    backgroundColor: 'rgba(246,238,98,0.3)', // yellow
    textAlign: 'center',
    verticalAlign: 'middle',
    gridColumn: '1',
    gridRow: '2/5',
  },
  four: {
    backgroundColor: 'rgba(181,255,90,0.3)', // green
    textAlign: 'center',
    verticalAlign: 'middle',
    gridColumn: '3',
    gridRow: '3',
  },
  five: {
    backgroundColor: 'rgba(80,188,228,0.3)', // blue
    textAlign: 'center',
    verticalAlign: 'middle',
    gridColumn: '2',
    gridRow: '4',
  },
  text: {
    textAlign: 'center',
    verticalAlign: 'middle',
    margin: 'auto',
  },
  number: {
    textAlign: 'left',
    verticalAlign: 'left',
    marginLeft: '10px',
  },
};

export default styles;