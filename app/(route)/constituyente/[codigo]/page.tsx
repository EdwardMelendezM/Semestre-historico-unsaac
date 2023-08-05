import getCurrentUser from "@/app/actions/getCurrentUser";
import UpdateUser from "./components/UpdateUser";

const UserEdit = () => {
  const currentUser = getCurrentUser();
  return ( 
    <>
      <UpdateUser currentUser={currentUser}  />
    </>
   );
}
 
export default UserEdit;