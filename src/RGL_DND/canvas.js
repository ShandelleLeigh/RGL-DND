import React from "react";
import _ from 'lodash';

class RGLMainPage extends React.PureComponent {

  static defaultProps = {
    items: 7,
  }

  initialComponents (count) {
    let arr = new Array(count);
    console.log('arr: ', arr);


    return _.map(arr, (_, i) => {
      const y = Math.ceil(Math.random() * 12);
      const horizontal = Math.ceil(Math.random() * 12);
      const width = Math.ceil(Math.random() * 4) + 1;
      // console.log('horizontal: ', horizontal);
      return {
        x: horizontal,
        y: y,
        w: width,
        h: width,
        i: i,
      }
    })
  }


  state = {
    components: this.initialComponents(this.props.items),
  };


  getStyles = (item) => {
    const {w,x,y,h} = item;
    let xEnd = ((x+w)<12)?(x+w):(-1);
    let yEnd = ((y+h)<12)?(y+h):(-1);
    let xStart = !((x+w)>12)?(x):(12-w);
    let yStart = !((y+h)>12)?(y):(12-h);
    // let xStart =
    // console.log(`x: ${x}, width: ${w}, y: ${y}, height: ${h}`);
    console.log(`row: ${xStart}/${xEnd}, y: ${y}, column ${yStart}/${yEnd}`)
    return

  };

  getColumn = (item) => {
    const {y,h} = item;
    let yEnd = ((y+h)<12)?(y+h):(-1);
    let yStart = !((y+h)>12)?(y):(12-h);
    return `${yStart}/${yEnd}`;
  }
  getRow = (item) => {
    const {w,x} = item;
    let xEnd = ((x+w)<12)?(x+w):(-1);
    let xStart = !((x+w)>12)?(x):(12-w);
    return `${xStart}/${xEnd}`;
  }



  handleDragEnd = (e) => {
    // console.log(e.target.id);
    console.log(
      e.clientY,
      e.clientX,
      e.movementY,

    );

  }

  components = () => {
    const items = this.state.components;
    // console.log(items);

    return _.map(items, (item, i,) => {
      const style = {
        gridColumn: this.getColumn(item),
        gridRow: this.getRow(item),
        border: '1px solid black',
        backgroundColor: 'rgba(255,255,255,0.5)',

      };
      console.log('styles: ', style);

        return (
          <div
            key={i}
            style={style}
            draggable='true'
            onDragEnd={this.handleDragEnd}
            id={'item'+i}
          >
            <span>{i}</span>
          </div>
        )
      });
  }




  render() {
    console.log(this.state.components);

    return (
      <div style={styles.main}>
        {this.components()}
      </div>
    );
  }
}

export default RGLMainPage;

const styles = {
  main : {
    backgroundColor: 'rgba(255,255,255,0.7)', // white
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, .8fr)',
    gridGap: '10px',
    height: '600px',
    width: '600px',
  },
};