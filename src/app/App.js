import React, { Component } from 'react';
import './App.css';
// import MainPage from '../cssGrid/cssGridDemo';
// import RGLMainPage from '../RGL';
// import RGL_DND from '../RGL_DND';
// import CssGrids from '../cssGrids/index';
import OLPage from '../OrderedList/index';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';




class App extends Component {
  render() {
    console.log('App Component');
    return (
      <div >
        {/* <MainPage/> */}
        {/* <RGLMainPage/> */}
        {/* <RGL_DND/> */}
        {/* <CssGrids/> */}

        {/*
            -Draggable Items
              Need
                - Question Items
                - Form Item(s)
            -Unordered List Drop Target
              Snappable Sections : Top/Bottom/Sides/Centers/Corners
        */}
        < OLPage />
      </div>
    );
  }
}

export default (DragDropContext(HTML5Backend))(App);
