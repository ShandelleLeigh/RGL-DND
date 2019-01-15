import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class RGLMainPage extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 7,
    cols: 12,
    rowHeight: 30,
    onLayoutChange: function() {},
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateItems() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i} style={styles.items}>
          <span className="text" >{i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      const horizontal = (Math.ceil(Math.random() * 12) + 1) % 12;
      const width = (Math.ceil(Math.random() * 4) + 1);
      console.log(i, 'horizontal: ', horizontal,  Math.ceil(Math.random() * 12) + 1 );
      // width: 78px, + 2px
      // height: 30px + 2px
      // translate: (10px, 10px) min
      // translate: x coord = row * x + 10  , 12 columns

      return {
        // x: (i * 2) % 12,
        x: horizontal % 12,
        y: Math.floor(i / 6) * y,
        // y: 3,
        // w: 2,
        w: 'auto',
        // w: 1,
        h: 'auto',
        // h: 1,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateItems()}
      </ReactGridLayout>
    );
  }
}

export default RGLMainPage;

const styles = {
  items : {
    border: '1px solid black',
  },
};