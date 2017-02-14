import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        console.log(this.textInput.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={element => {
                    this.textInput = element;
                }} />
                <button type="button" onClick={this.onButtonClick}>
                    Search
                </button>
            </div>
        )
    }
}
