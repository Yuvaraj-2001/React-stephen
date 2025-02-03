import { useRemoveAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
function AlbumsListItem({ user }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleRemove = () => {
      removeAlbum(user);
    }
    return <Button loading={results.isLoading}>
      <GoTrashcan size={20} onClick={handleRemove}/>
    </Button> 

};

export default AlbumsListItem;
