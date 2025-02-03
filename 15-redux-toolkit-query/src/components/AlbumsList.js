import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const {data, error, isLoading} =  useFetchAlbumsQuery(user);
  const [addAlbum, results] =  useAddAlbumMutation();

  console.log(data, error, isLoading);

  let content;
   if(isLoading){
    content = <Skeleton times={6} className="h-10 w-full" />;
   }else if(error){
      content = <div>Error loading albums</div>
   }else{
    content = data.map(album => {
      const header = <div>{album.title}</div> // Assuming userId is the user id from the album data
      return <ExpandablePanel key={album.id} header={header}></ExpandablePanel>
     })
   }

  const handleAddAlbum = () => {
      addAlbum(user);
  };
  
  return<div>
    <h3 className="text-lg font-bol">Albums for {user.name}</h3>
    <Button loading={results.isLoading} primary onClick={handleAddAlbum} className="mb-2" > Add Album </Button>
    <div className="m-2 flex flex-col justify-between">
   
    {content}
  </div>
  </div>;
}

export default AlbumsList;
