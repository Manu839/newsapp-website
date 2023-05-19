import React,{Component} from 'react'
export class Navbar extends Component {
  render() {
      
    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 w-full p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight">NEWS WEB</span>
  </div>
  <div className="block lg:hidden mx-5">
      <div class="group inline-block relative">
      <button className="flex items-center lg:hidden px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg> </button>
      <ul className="absolute hidden lg:block  rounded text-black pt-1 group-hover:block shadow-md bg-teal-500 -mx-20 w-40 z-20">
    <li className ="text-center">
      <a href = "/" className="block p-2 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">
        Home</a></li><li className ="text-center">
      <a href = "/business" className="block p-2  mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Business
      </a></li><li className ="text-center">
      <a href = "/entertainment" className="block p-2  mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
       Entertainment
      </a></li><li className ="text-center">
      <a href = "/health" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Health
      </a></li><li className ="text-center">
      <a href = "/science" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Science
      </a></li><li className ="text-center">
      <a href = "/sports" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Sports
      </a></li><li className ="text-center">
      <a href = "/technology" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Technology
      </a></li>
      </ul>



    </div>
  </div>


  <div className="w-full hidden lg:inline-block mr-auto ml-auto   lg:w-auto">
    <div className="text-sm left-44 lg:flex-grow  lg:space-x-8">
   <a href = "/" className="block p-2 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">
        Home
      </a>
      <a href = "/business" className="block p-2  mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Business
      </a>
      <a href = "/entertainment" className="block p-2  mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
       Entertainment
      </a>
      <a href = "/health" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Health
      </a>
      <a href = "/science" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Science
      </a>
      <a href = "/sports" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Sports
      </a>
      <a href = "/technology" className="block mt-4 p-2  lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Technology
      </a>
      </div>
      </div>



</nav>
</>
    )
  }
}

export default Navbar
