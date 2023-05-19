import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imgurl,newsurl,author,date,source} =this.props
    return (
      <div className='p-6 mr-auto ml-auto w-fit h-auto'>
        <span className="bg-green-100 text-teal-700 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-white dark:text-teal-500 border border-teal-500">{source}</span>
        <div className="rounded overflow-hidden shadow-lg w-72 ">
        <img className='w-full' src={!imgurl?"https://static.foxnews.com/foxnews.com/content/uploads/2023/05/1-Shut-that-drone-up-DRONE-WITH-PACKAGE.jpg":imgurl} alt='..'/>
            <div className="px-6 py-4">
    <div className='font-bold text-xl mb-2'>{title}</div>
    <p className='text-gray-700 text-base'>{description}...
    </p>  <br></br>  <p className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 text-teal-500">By- {!author?"unknown":author} on {new Date(date).toGMTString()}</p>  <a href={newsurl}  rel="noreferrer" target='_blank' className='inline-block text-sm px-4 py-2 leading-none border rounded hover:bg-teal-500 hover:text-white hover:border-teal-500 text-teal-500 mt-4 lg:mt-0'>Read more</a>
     </div></div>
       </div>
    )
  }
}

export default NewsItem