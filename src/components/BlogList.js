import { Link } from 'react-router-dom'

const BlogList = ({ blgs, title }) => {
 
  return ( 
    <div className="blog-list">
      <h1>{ title }</h1>
      {blgs.map((blg) => (
        <div className="blg-preview" key={blg.id}>
          <Link to={`/blogs/${blg.id}`}>
          <h2>{ blg.title }</h2>
          <p>Written by { blg.author }</p>
          </Link>
        </div>
      ))}     
    </div>
   )
}
 
export default BlogList