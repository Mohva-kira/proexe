import React, from 'react';

export function UsersList(props ){




    const addUsers = () => {
        props.setShowAddUsers(true);
        props.setShowUsers(false);

    };

    const deleteUser = (id) =>{
        props.setUserList(props.userList.filter(x => x.id !== id));
    }

    const editUser = (id) => {
        props.setUser(props.userList.find(x => x.id === id));
        props.setShowAddUsers(true);
        props.setShowUsers(false);

    }

    return(

        <div >
            <div className='border-bottom mb-1 pb-3'>
            <div className='d-flex justify-content-between p-4'>
            <h2>User list</h2>

                <button onClick={addUsers} className='btn btn-primary' >Add new </button>
            </div>
            </div>
            <div className='p-4'>
            <table className="table">
                <thead className='table-light border-1'>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>

                {props.userList.length > 0 && props.userList.map((u, i) =>

                    <tr key={i} className='border-1'>
                    <th scope="row">{u.id}</th>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.address ? u.address.city : null}</td>
                    <td><button onClick={ () => editUser(u.id) } className='btn btn-warning'>edit</button></td>
                    <td><button onClick={ () => deleteUser(u.id)} className='btn btn-danger'> delete</button></td>
                    </tr>
                )}

                </tbody>
            </table>
            </div>
        </div>
    )
}