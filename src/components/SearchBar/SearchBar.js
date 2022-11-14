import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        }
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    getSortByClass(sortByOption) {
        if (this.sortBy === sortByOption) {
            return 'active'
        }  
        return ''
        
    };

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    };

    renderSortByOptions() {
        return Object.keys(sortByOptions).map((sortByOptions)=>{
            let sortByOptionValue = sortByOptions[sortByOptions]
            return (<li 
                key={sortByOptionValue} 
                className = {this.getSortByClass(sortByOptionValue)} 
                onClick = {this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOptions}
            </li>)
        })
    }

    handleTermChange(e) {
        this.setState({term: e.target.value})
    }

    handleLocationChange(e) {
        this.setState({location: e.target.value})
    }

    handleSearch(e) {
        {this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)}
        e.preventDefault()
    }

    render() {
        return(
        <div className='SearchBar'>
            <div className='SearchBar-sort-options'>
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className='SearchBar-fields'>
                <input onChange = {this.handleTermChange} />
                <input onChange = {this.handleLocationChange} />
            </div>
            <div className='SearchBar-submit'>
                <a onClick = {this.handleSearch}>Let's Go</a>
            </div>
        </div>
        )
    }
}

export default SearchBar