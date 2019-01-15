import React, {Component} from 'react';
import styles from './styles';

/**
 * CSS Grid:
 *  numbers tell which column item starts inside of
 *  and which colum to stop before
 */
class CssGrids extends Component {

  render() {
    return (
			<div style={styles.Grid}>
				<div style={styles.a}>
					scroll a
				</div>
				<div style={styles.b}>
					hidden b
				</div>
				<div style={styles.c}>
					scroll c
				</div>
				<div style={styles.d}>
					auto d
				</div>
				<div style={styles.e}>
					unset e
				</div>
				<div style={styles.f}>
					overlay f
				</div>
				<div style={styles.g}>
					overlay g
				</div>
				<div style={styles.h}>
					auto h
				</div>
				<div style={styles.i}>
					auto i
				</div>
				<div style={styles.O}>
					auto O
				</div>
			</div>
    )
  }
}

export default CssGrids;



