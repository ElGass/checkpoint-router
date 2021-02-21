import React,{useState} from 'react'
import Card from '../Card/Card';
const MovieList = ({search}) => { 
    const [movielist,setMovielist]=useState([ {
    id: Math.random(),
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_.jpg",
    rating: 5,
    name: "Central Intelligence",
    type: "Action | Comedy ",
    description:
      "Accountant Calvin Joyner's life changes drastically after Bob Stone, his classmate in high school, drags him into a dubious covert operation.",
      Link: "https://www.youtube.com/embed/0FKctBraQj0"
  },{
    id: Math.random(),
    image:
      "https://fr.web.img2.acsta.net/pictures/20/08/03/12/15/2118693.jpg",
    rating: 4,
    name: "Fast & Furious Presents: Hobbs & Shaw ",
    type: "Action | Adventure ",
    description:
      "Lawman Luke Hobbs (Dwayne 'The Rock' Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.",
  }]);
    return (
        <div style={{display:"flex", margin:"7%", justifyContent:"space-around", flexWrap:"wrap"}}>

          {movielist.map(el=><Card key={el.id} image={el.image} name={el.name} type={el.type} description={el.description} rating={el.rating}/>)}  
        </div>
    )
}

export default MovieList
