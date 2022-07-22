import { useDispatch } from "react-redux"
import { useState } from "react"
import { updateUserData } from "../redux/actions"

function UserHeader({ userData }) {

    const dispatch = useDispatch()

    const [nameEdition, setNameEdition] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function editName(e) {
        e.preventDefault()

        const token = (localStorage.getItem('token') || sessionStorage.getItem('token') || userData.token)

        const edit = dispatch(updateUserData(token, firstName, lastName))

        if (!edit) {
            return;
        }

        setNameEdition(false)
    }

    return (
        nameEdition ?
            <div className="header">
                <h1 className="">Welcome back</h1>
                <form className="formChangeName" onSubmit={(e) => editName(e)}>
                    <div className="divInputChangeName">
                        <input className="inputChangeName" type="text" placeholder={userData.data.firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input className="inputChangeName" type="text" placeholder={userData.data.lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="divButtonChangeName">
                        <button className="buttonChangeName" type="submit">Save</button>
                        <button className="buttonChangeName" onClick={(e) => (e.preventDefault(e), setNameEdition(false))}>Cancel</button>
                    </div>
                </form>
            </div>
            :

            <div className="header" >
                <h1>Welcome back<br />
                    {userData.data.firstName} {userData.data.lastName}!</h1 >
                <button className="edit-button" onClick={() => setNameEdition(true)}>Edit Name</button>
            </div >
    )
}

export default UserHeader;