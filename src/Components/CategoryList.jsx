import React, { Component} from "react";

export default class CategoryList extends Component{
    handleClick = id => () => {
        const {selectCategory} = this.props
        selectCategory(id)
    }
    render() {
        const { categories } = this.props
        return(
            <ul>
                {categories.map(record => <li onClick={this.handleClick(record.id)} key={record.id}>{record.name}</li>)}
            </ul>
        )
    }
}