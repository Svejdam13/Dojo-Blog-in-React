const BlogList = ({ blgs, title }) => {
 
  return ( 
    <div className="blog-list">
      <h1>{ title }</h1>
      {blgs.map((blg) => (
        <div className="blg-preview" key={blg.id}>
          <h2>{ blg.title }</h2>
          <p>Written by { blg.author }</p>
        </div>
      ))}     
    </div>
   )
}
 
export default BlogList