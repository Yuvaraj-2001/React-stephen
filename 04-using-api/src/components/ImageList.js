
function ImageList({images}){

    return (<div className="flex" >
       {
       images.map((img, index) => <div className="img-container">
        <img className="image" src={img} alt="image" key={index}/>
       </div>)
       }
    </div>
    )
}
export default ImageList;