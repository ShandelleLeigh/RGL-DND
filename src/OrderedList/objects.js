export const itemTypes = {
  PAGE: 'page',
  LIST: 'list',
  LISTITEM: 'listItem',
};

export const pageAccepts = [
  itemTypes.LIST,
];

export const pageListensTo = [
  itemTypes.LIST,
  itemTypes.LISTITEM,
];



const colors = {
  red: 'rgba(244,12,68,0.5)',
  redB: 'rgb(244,12,68)',
  orange: 'rgba(255,167,84,0.5)',
  orangeB: 'rgb(255,167,84)',
  yellow: 'rgba(246,238,98,0.5)',
  yellowB: 'rgb(246,238,98)',
  green: 'rgba(181,255,90,0.5)',
  greenB: 'rgb(181,255,90)',
  mint: 'rgba(138,230,141,0.5)',
  mintB: 'rgb(138,230,141)',
  blue: 'rgba(80,188,228,0.5)',
  blueB: 'rgb(80,188,228)',
  fuchia: 'rgba(226,46,181,0.5)',
  fuchiaB: 'rgb(226,46,181)',
  plumb: 'rgba(183,7,102,0.5)',
  plumbB: 'rgb(183,7,102)',
}

export const itemsObject = [
  {
    name: 'List 1',
    type: 'List',
    id: 'l1',
    style: {
      backgroundColor: colors.red,
      border: `2px solid ${colors.redB}`,
    },
    left: 0,
    top: 0,
    children: [
      {
        name: 'Item A',
        type: 'Item',
        id: 'iA',
        style: {
          backgroundColor: colors.mint,
          border: `2px solid ${colors.mintB}`,
        },

      },
      {
        name: 'Item B',
        type: 'Item',
        id: 'iB',
        style: {
          backgroundColor: colors.plum,
          border: `2px solid ${colors.plumB}`,
        },

      },
      {
        name: 'Item C',
        type: 'Item',
        id: 'iC',
        style: {
          backgroundColor: colors.orange,
          border: `2px solid ${colors.orangeB}`,
        },

      },
    ]
  },
  {
    name: 'List 2',
    type: 'List',
    id: 'l2',
    style: {
      backgroundColor: colors.fuchia,
      border: `2px solid ${colors.fuchiaB}`,
    },
    left: 0,
    top: 0,
    children: [
      {
        name: 'Item 1',
        type: 'Item',
        id: 'i1',
        style: {
          backgroundColor: colors.yellow,
          border: `2px solid ${colors.yellowB}`,
        },

      },
      {
        name: 'Item 2',
        type: 'Item',
        id: 'i2',
        style: {
          backgroundColor: colors.green,
          border: `2px solid ${colors.greenB}`,
        },

      },
      {
        name: 'Item 3',
        type: 'Item',
        id: 'i3',
        style: {
          backgroundColor: colors.blue,
          border: `2px solid ${colors.blueB}`,
        },

      },
    ]
  },
];

export const styles = {
  page: {
    // height: '100vh',
    // width: '100vh',

  },
  canvas: {
    // margin: '10px',
    border: '1px solid black',
  },
  list: {
    // width: '50%',
    // height: '100%',
    margin: '4px',
  },
};



// Lists = (items) => {
//   return (
//     this.state.items.map (lists  => {
//       const style = {
//         width: '48%',
//         height: '100%',
//         margin: '4px',
//         backgroundColor: lists.style.backgroundColor,
//         border: lists.style.border,
//         display: 'block',
//         float: 'left',
//       };
//       return (
//         <div key={lists.id} style={style}>
//           {lists.name}

//         </div>
//       )}
//     )
//   )
// };
