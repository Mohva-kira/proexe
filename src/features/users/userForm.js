import React, {useEffect, useState} from 'react';


export function UserForm(props) {

    const [user] = useState({});

    const [selectedUser, setSelectedUser] = useState({});

    const [isEditUser, setIsEidtUser] = useState(false);



    useEffect(() => {
        if (Object.keys(props.user).length > 0){
            setSelectedUser(props.user)
            setIsEidtUser(true)
        }


    }, [ props.user])
    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        user[name] = target.value;
        console.log(user);
    };
    const addUser = () => {
        if (Object.keys(selectedUser).length === 0 ) {
            user['id'] = props.userList.at(-1).id + 1;
            if (handleValidation()) {
                props.setUserList([...props.userList, user]);
                props.setShowUsers(true);

                props.setShowAddUsers(false);
            } else {
                alert('error in form')
            }
        } else {

            if (handleValidation()) {
                var users =[ ...props.userList]
                console.log('preu', users)

                var index = users.findIndex(x=> x.id === selectedUser.id);
                users = users.filter(x => x.id !== selectedUser.id);
                users[index] = Object.assign({},selectedUser, user);

                console.log('les utilisateur', users)
                props.setUserList([...props.userList, users]);
                props.setShowUsers(true);

                props.setShowAddUsers(false);
            } else {
                alert('error in form')
            }
        }

        if (handleValidation()) {
            props.setUserList([...props.userList, user]);
            props.setShowUsers(true);

            props.setShowAddUsers(false);
        } else {
            alert('error in form')
        }

    };

    const cancel = () => {
        props.setUser({});
        setIsEidtUser(false);
        props.setShowUsers(true);

        props.setShowAddUsers(false);
    }

    const handleValidation = () => {

        let errors = {};
        let formIsValid = true;

        //Name
        if (!user.name) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";

        }

        if (typeof user.name !== "undefined") {
            if (!user.name.match(/^[a-zA-Z\s]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if (!user.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof user.email !== "undefined") {
            let lastAtPos = user.email.lastIndexOf("@");
            let lastDotPos = user.email.lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    user.email.indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    user.email.length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        return formIsValid;
    }

    return (
        <div>
            <div className='border-bottom m-2 mb-4 pb-3 d-flex justify-content-start'>
                <h2>Form</h2>
            </div>

            <div className='w-75'>

                {isEditUser &&
                <div className='row mb-3 '>
                    <label className='col-sm-2 col-form-label' htmlFor="name">Id</label>
                    <div className='col-sm-10'>
                        <input type="text" name="name" onChange={handleChange} value={selectedUser.id || ''} className='form-control '
                               id='name'/>
                    </div>
                </div>
                }

                <div className='row mb-3 '>
                    <label className='col-sm-2 col-form-label' htmlFor="name">Name</label>
                    <div className='col-sm-10'>
                        <input type="text" name="name" onChange={handleChange} defaultValue={selectedUser.name}
                               className='form-control ' id='name'/>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 col-form-label ' htmlFor="email">Email </label>
                    <div className='col-sm-10'>
                        <input type="email" name="email" onChange={handleChange} id='email' defaultValue={selectedUser.email}
                               className='form-control '/>
                    </div>
                </div>

                {isEditUser &&
                <div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label ' htmlFor="username">username </label>
                        <div className='col-sm-10'>
                            <input type="text" name="username" onChange={handleChange} id='username'
                                   defaultValue={selectedUser.username} className='form-control '/>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-sm-2 col-form-label ' htmlFor="username">City </label>
                        <div className='col-sm-10'>
                            <input type="text" name="city" onChange={handleChange} id='city'
                                   value={selectedUser.address && selectedUser.address.city} className='form-control '/>
                        </div>
                    </div>
                </div>
                }
                <div className='d-flex justify-content-end gap-2'>
                    <button onClick={cancel} className='btn btn-danger'>Cancel</button>
                    <button onClick={addUser} className='btn btn-success'>Submit</button>
                </div>
            </div>
        </div>
    )
}