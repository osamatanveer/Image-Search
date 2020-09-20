import React from 'react';
import SearchBar from './lib-components/SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './lib-components/ImageList';

class App extends React.Component {
  state = {
    images: [],
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: term },
      }
    );
    this.setState({ images: response.data.results });
  };
}

export default App;
