import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: [] };

onSearchSubmit = async (term) => {
    const response = await axios
    .get('https://api.unsplash.com/search/photos', {
        params: {
            client_id: 'vuWSwCbuUkfJ2c3rxKk3LKHwXXjIqViwgCjBUD8Tduw',
            query: term
        }
    });
    this.setState({ images: response.data.results });
    
}
    render(){
        return ( <div className='ui container' style = {{ marginTop: '10px' }}>
        <SearchBar onSearchBarSubmit = {this.onSearchSubmit} />
        
        <ImageList images={this.state.images}/>
    </div>);       
    }
}

export default App;


