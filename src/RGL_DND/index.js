import React, {Component} from 'react';
import RGL, {WidthProvider} from 'react-grid-layout';
import styles from './styles';
import _ from "lodash";
import Canvas from './canvas';

const ReactGridLayout = WidthProvider(RGL);

class RGL_DND extends Component {
  defalutProps = { };
  state = { };
  render () {
    return (
      <div style={styles.main} >
        <div style={styles.toolbar} >
          Toolbar
        </div>
        <div style={styles.canvas}>
          <Canvas />
        </div>
      </div>
    )
  }
}

export default RGL_DND;