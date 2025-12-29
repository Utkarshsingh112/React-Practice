function UserEdit(){
    return (
        <div className="user-edit">
            <h1>Edit User Details</h1>
            <input type='text' placeholder="Type new name"/>
            <br></br>
            <input type='text' placeholder="Type new age"/>
            <br></br>
            <input type='text' placeholder="Type new mail"/>
            <br></br>
            <button>Update User</button>
        </div>
    )
}
export default UserEdit;
