const styles = {
  Grid: {
    position: 'relative',
    display: 'grid',
    width: '100vh',
    height: '100vh',
    gridTemplateColumns: '38% 50% 12%',
    gridTemplateRows: '28% 50% 22%',
    gridTemplateAreas:
      `"a b c"
      "d e f"
      "g h i"`,
  },
  a: {
    gridArea: 'a',
    border: '5px solid lightpink',
    backgroundColor: 'rgba(200, 100, 250, 0.3)',
    resize: 'both',
    overflow: 'scroll',
  },
  b: {
    gridArea: 'b',
    border: '5px solid lightblue',
    backgroundColor: 'rgba(50, 100, 250, 0.3)',
    resize: 'both',
    overflow: 'hidden',
  },
  c: {
    gridArea: 'c',
    border: '5px solid lightgreen',
    backgroundColor: 'rgba(5, 250, 50, 0.3)',
    resize: 'both',
    overflow: 'scroll',
  },
  d: {
    gridArea: 'd',
    border: '5px solid lightsteelblue',
    backgroundColor: 'rgba(50, 50, 100, 0.3)',
    resize: 'both',
    overflow: 'auto',
  },
  e: {
    gridArea: 'e',
    border: '5px solid violet',
    backgroundColor: 'rgba(250, 20, 250, 0.3)',
    resize: 'both',
    overflow: 'unset',
  },
  f: {
    gridArea: 'f',
    border: '5px solid magenta',
    backgroundColor: 'rgba(250, 20, 222, 0.3)',
    resize: 'both',
    overflow: 'overlay',
  },
  g: {
    gridArea: 'g',
    border: '5px solid cornflowerblue',
    backgroundColor: 'rgba(5, 150, 250, 0.3)',
    resize: 'both',
    overflow: 'overlay',
  },
  h: {
    gridArea: 'h',
    border: '5px solid lightpink',
    backgroundColor: 'rgba(250, 20, 50, 0.3)',
    resize: 'both',
    overflow: 'auto',
  },
  i: {
    gridArea: 'i',
    border: '5px solid aquamarine',
    backgroundColor: 'rgba(5, 250, 50, 0.3)',
    resize: 'both',
    overflow: 'auto',
  },
  j: {
    gridArea: 'j',
    border: '5px solid magenta',
    backgroundColor: 'rgba(5, 250, 50, 0.3)',
    resize: 'both',
    overflow: 'auto',
  },
  // overflow: visible, hidden, scroll, auto, unset, overlay, inherit
  O: {
    gridArea: 'e',
    backgroundColor: 'rgba(100, 100, 100, 0.8)',
    border: '5px solid black',
    resize: 'both',
    overflow: 'auto',
  },
};

export default styles;