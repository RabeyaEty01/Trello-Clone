import React from "react";
import { connect } from "react-redux";
import TrelloList from "./TrelloList";

function App({lists}) {

  return (
    <div className="App">
      <h2>Hello</h2>
      {
          lists.map(list=><TrelloList title={list.title} cards={list.cards} />)
      }
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
