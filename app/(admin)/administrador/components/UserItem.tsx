interface UserItemProps{
  id:string
  name:string
  role?:string
}

const UserItem: React.FC<UserItemProps> = ({
  id,
  name,
  role='admin'
}) => {

  const colorRole = role==="admin" ? "#" :""

  return ( 
    <div className="py-2 px-8 flex gap-x-8 justify-between" >
      <div
        // onClick={()=>route.push()}
        className="text-gray-600 hover:cursor-pointer hover:text-gray-500 font-semibold">
        {id}
      </div>
      <div
        // onClick={()=>route.push()}
        className="text-gray-600 hover:cursor-pointer hover:text-gray-500  truncate">
        {name}
      </div>
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {role}
      </code>
    </div>
   );
}
 
export default UserItem;