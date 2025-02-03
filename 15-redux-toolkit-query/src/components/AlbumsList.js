import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsList({ user }) {
  const {data, error, isLoading} =  useFetchAlbumsQuery(user);

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
  
  return <div>Albums for {user.name}
    {content}
  </div>;
}

export default AlbumsList;
