import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export class News extends Component {

  capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirst(this.props.category)} - NewsTrack`;
    }

      async componentDidMount(){
        this.NewsApi(this.state.page)
      }
       
      async  NewsApi(page){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3781e522cc9d4136aaf16b8572b323a2&pageSize=${this.props.pageSize}&page=${page}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults, source: parsedData.source, loading: false})
      }

      handePrevious =()=>{
        this.setState({
          page: this.state.page-1,
          loading: false,
        })
        this.NewsApi(this.state.page-1)
      }

      handelNext =()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          this.setState({
            page: this.state.page+1,
            loading: false,
          })
          this.NewsApi(this.state.page+1)
       }
      }

  render() {

    return (
      <div className='container my-3'>
        <h2 className = 'text-center my-3'> {this.capitalizeFirst(this.props.category)} - Top HeadLines</h2>
        <div className='text-center'>
         {this.state.loading && <Spinner/>}
        </div>
        <div className='row'>
            { !this.state.loading && this.state.articles.map((element)=>(
                <div className='col-md-4' key={element.url}>
                <NewsItem  source={element.source ? element.source.name : ''} title={element.title ? element.title : '' } description={element.description ? element.description : ' '} imageurl={element.urlToImage} newsUrl={element.url}/>
                </div>
            ))}
           
        </div>
        <div className='container d-flex justify-content-between my-3'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handePrevious}> &larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
