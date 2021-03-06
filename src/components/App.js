import React from "react";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import TrelloList from "./TrelloList";

function App({ lists }) {
  return (
    <div className="App">
      <h2>Hello</h2>
      <div style={styles.listContainer}>
        {lists.map((list) => (
          <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
        ))}
        <TrelloActionButton list/>
      </div>
    </div>
  );
}

const styles={
  listContainer:{
    display:"flex",
    flexDirection:"row",
  
    
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});


export default connect(mapStateToProps)(App);
