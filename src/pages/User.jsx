import Header from "../components/Header";
import UserHeader from "../components/UserHeader";
import Transaction from "../components/Transaction";
import Footer from "../components/Footer";
import { selectUser } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchUserData, signOut } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function User() {
    const userData = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = (localStorage.getItem('token') || sessionStorage.getItem('token'))

    useEffect(() => {
        if (!userData.data) {
            if ((token)) {
                dispatch(fetchUserData(token))
                navigate('/profile')
            }
            else {
                localStorage.clear()
                sessionStorage.clear()
                dispatch(signOut())
                navigate('/login')
            }
        }

    }, [dispatch, navigate, token, userData])

    if (!userData.data) {
        return null
    }

    return (
        <div className="pageContainer">
            <Header />
            <main className="main bg-dark">
                <UserHeader userData={userData} />
                <h2 className="sr-only">Accounts</h2>
                <Transaction transactionTitle='Argent Bank Checking (x8349)' transactionAmount='$2,082.79' transactionBalance='Available Balance' />
                <Transaction transactionTitle='Argent Bank Savings (x6712)' transactionAmount='$10,928.42' transactionBalance='Available Balance' />
                <Transaction transactionTitle='Argent Bank Credit Card (x8349)' transactionAmount='$184.30' transactionBalance='Current Balance' />
            </main>
            <Footer />
        </div>
    );
}

export default User;
