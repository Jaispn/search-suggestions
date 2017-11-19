'use strict';
import React from 'react';
import SearchSuggestions from "./components/search-suggestions/search-suggestions";

class App extends React.Component {
    render() {
       return (
           <div>
                <SearchSuggestions/>
            </div>
       );
    }
}
export default App;