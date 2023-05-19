import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
 // apiKey = process.env.REACT_API
  static defaultProps = {
    country:'in',
    catagory:'general'

  }
  static Props = {
    country:PropTypes.string,
    catagory:PropTypes.string
  }


constructor(props){
  super(props);
  this.state ={
    articles : [],
    loading : false,
    page: 1

  }
  document.title =`${this.props.catagory} - NEWS WEB`
}

 async componentDidMount(){
  this.props.setProgress(0);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=2af4560888174450aa87b34f9b399bcc&page=1&pageSize=4`
  this.setState({loading:true});
  let data = await fetch(url)
  let parseData = await data.json()
  this.setState({articles: parseData.articles,
    loading:false,
  totalResults:parseData.totalResults})
    this.props.setProgress(100);}

  handleNextClick = async()=>{
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=2af4560888174450aa87b34f9b399bcc&page=${ this.state.page +1}&pageSize=4`
    this.setState({loading:true});
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      page : this.state.page +1,
      articles : parseData.articles,
    loading:false})
    this.props.setProgress(100);


}
  
   handlePrevClick = async()=>{
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=2af4560888174450aa87b34f9b399bcc&page=${ this.state.page -1}&pageSize=4`
    this.setState({loading:true});
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      page : this.state.page -1,
      articles : parseData.articles,
      loading:false})
      this.props.setProgress(100);

   }


  render() {
    return (<>
    <h1 className='font-bold p-3 lg:text-3xl text-2xl text-center' >Top Headlines from {this.props.catagory}</h1>
    {this.state.loading?<Spinner/>:""}
    <span className=' md:flex lg:flex sm:col-auto  text-center'>
        { !this.state.loading && this.state.articles.map((element)=>{ return(
      <div className='w-full' key={element.url}><NewsItem imgurl={element.urlToImage} title={element.title} description={element.description ? element.description.slice(0,90) : " "} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
      </div> )})}
      </span>
      <div className="w-full  p-9 container flex justify-center mx-auto">
  <div className="flex flex-row mx-auto">
    <button type="button"  onClick={this.handlePrevClick} disabled={this.state.page<=1} className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-teal-500 hover:text-white px-3">
      <div className="flex flex-row align-middle">
        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
        </svg>
        <p className="ml-2">Prev</p>
      </div>
    </button>
    <button type="button" onClick={this.handleNextClick} className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-teal-500 hover:text-white px-3">
      <div className="flex flex-row align-middle">
        <span className="mr-2">Next</span>
        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </div>
    </button>
  </div>
</div>
      </>
    )}}

export default News