import UsersTable from "../features/admin/users/UsersTable"

function Users() {
    return (
        <div>
            <h1 className="font-black text-secondary-700 text-xl my-8 mx-2">
                کاربران شما
            </h1>
            <UsersTable />
        </div>
    )
  }
  
  export default Users