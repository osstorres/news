import React, { Component} from "react";

export default class NewsList extends Component{
    render() {
        const { news } = this.props
        return(
            <ul>
                {news.map(record => <li key={record.id}>{record.name}</li>)}
            </ul>
        )
    }
}