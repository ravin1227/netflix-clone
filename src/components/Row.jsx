import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


const Row = ({title, fetchURL, rowId}) => {
    const [movies, setMovies] = useState([])
    console.log(movies)

    useEffect(()=>{
        axios.get(fetchURL)
        .then((response)=> setMovies(response.data.results))
        .catch((error)=> console.log(error))
    },[fetchURL])

    const slideLeft =()=>{
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft -500
    }
    const slideRight =()=>{
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <>
        <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>
        <div className='relative flex items-center group '>
            <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((items,id)=>(
                    <Movie key={id} items={items} />
                ))}
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        </div>
    </>
  )
}

export default Row