const BlogList = ({ blgs, title, handleDelete }) => {
 
  return ( 
    <div className="blog-list">
      <h1>{ title }</h1>
      {blgs.map((blg) => (
        <div className="blg-preview" key={blg.id}>
          <h2>{ blg.title }</h2>
          <p>Written by { blg.author }</p>
          <button onClick={() => handleDelete(blg.id)}>Del Blog</button>
        </div>
      ))}     
    </div>
   )
}
 
export default BlogList