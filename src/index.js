import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDtwLqktB9QyaYNUX_Cn1givU2AxpbDB50'



// create a component which produces html

// const App = function() {
// 	return <div> Hi </div>;
// }

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('matrin garrix')
	}

videoSearch(term) {
	YTSearch({key: API_KEY, term: term }, (videos) => {
		// this.setState = ({videos: videos });
		this.setState ({
			videos: videos,
			selectedVideo: videos[0]
		});
		// console.log(videos);
	});
}


	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
		return (
			<div>
				<SearchBar onSearchTermChange={ videoSearch } />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos= {this.state.videos}/>
			</div>
		);
	}
}

// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

// Take this component's generated html and put it on the page


ReactDOM.render(<App />, document.querySelector('.container'));
