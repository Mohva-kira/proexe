import {UsersList} from "../users/usersList";
import {UserForm} from "../users/userForm";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../store/actions/usersActions";


export function Dashboard() {

    const {users} = useSelector(state => state.users);

    const [userList, setUserList] = useState(users);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(fetchUsers());
        }, [dispatch]
    )

    useEffect(()=> {
        setUserList(users)
    },[users])
    const [showUsers, setShowUsers] = useState(true);
    const [showAddUsers, setShowAddUsers] = useState(false);
    return (

        <div className='container'>
             <h2 className='d-flex align-items-start p-2 m-1 mb-5'> Dashboard  </h2>

            <div className='shadow'>
            {showUsers &&
            <UsersList
                showUsers={showUsers}
                setShowUsers={setShowUsers}
                showAddUsers={showAddUsers}
                setShowAddUsers={setShowAddUsers}
                userList={userList}
                setUserList={setUserList}
                user={user}
                setUser={setUser}


            />}

            {showAddUsers &&

            <UserForm
                showUsers={showUsers}
                setShowUsers={setShowUsers}
                showAddUsers={showAddUsers}
                setShowAddUsers={setShowAddUsers}
                userList={userList}
                setUserList={setUserList}
                user={user}
                setUser={setUser}
            />

            }

            </div>
      </div>

    );
}