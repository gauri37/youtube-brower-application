import React from 'react';

class SearchBar extends React.Component{
    state={term:''};

    onFormSubmit=(event)=>
    {
        event.preventDefault();
        //we call parent components prop so parat component nows what is the value of search term is

        this.props.onFormSubmit(this.state.term);
    }

    onInputChange=(event)=>
    {
        this.setState({term:event.target.value});

    
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Videos</label>
                        <div className="ui category search">
                            <div className="ui icon input">
                                    <input type="text" 
                                        value={this.state.term} 
                                        onChange={this.onInputChange}/>
                                    <i className="search icon"></i>
                             </div>
                        </div>    
                    </div>
                   
                </form>
            </div>

        );
    }
}
export default SearchBar;