import React, {Component} from 'react';
import styles from './styles';

/**
 * CSS Grid:
 *  numbers tell which column item starts inside of
 *  and which colum to stop before
 */
class MainPage extends Component {

  boxes = [
    { text: 'First', secondText: `Column: '1/4', Row: '1'`, style: styles.one, },
    { text: 'Second', secondText: `Column: '2/4', Row: '1'`, style: styles.two, },
    { text: 'Third', secondText: `Column: '1', Row: '2/5'`, style: styles.three, },
    { text: 'Forth', secondText: `Column: '3', Row: '3'`, style: styles.four, },
    { text: 'Fifth', secondText: `Column: '2', Row: '4'`, style: styles.five, },
  ];

  render() {
    return (
      <div style={styles.main}>
          { this.boxes.map (
            box => {
              const {text, secondText, style} = box;
              return (
                <div style={style}>
                  <p style={styles.number}>{text}</p>
                  <p style={styles.text}>{secondText}</p>
                </div>
              )
            }
          )}
      </div>
    )
  }
}

export default MainPage;