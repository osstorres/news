import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import Category from './Components/Category'
import News from "./Components/News";
import {addCategory, selectCategory} from './reducers/Categorias'
import {addNews} from './reducers/Noticias'
import {reset} from 'redux-form'

class App extends Component{
  render() {
      const { categories, addCategory, news, addNews, selectCategory, selected } = this.props
    return (

        <div className="App">
          <Category addCategory={addCategory}
                    selectCategory={selectCategory}
                    categories={categories}/>
          <News addNews={addNews} selectedCategory={selected} news={news}/>
        </div>
    );
  }
}

const mapStateToProps = state =>{
    const {Categorias: {data:categories, selected}} = state
    const {Noticias: {data:news}} = state
    console.log(state)
    return {
        categories,
        news: news.filter(record => record.categoryId === selected),
        selected,
    }
}

const mapDispatchToProps = dispatch =>({
    addCategory: payload => {
        dispatch(addCategory(payload))
        dispatch(reset('category'))
    },
    selectCategory: payload => dispatch(selectCategory(payload)),
    addNews: payload => {
        dispatch(addNews(payload))
        dispatch(reset('news'))
    },

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
