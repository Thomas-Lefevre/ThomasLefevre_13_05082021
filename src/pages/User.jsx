import Header from "../components/Header";
import UserHeader from "../components/UserHeader";
import Transaction from "../components/Transaction";
import Footer from "../components/Footer";

function User() {
    return (
        <div className="pageContainer">
            <Header />
            <main className="main bg-dark">
                <UserHeader />
                <h2 class="sr-only">Accounts</h2>
                <Transaction />
                <Transaction />
                <Transaction />
            </main>
            <Footer />
        </div>
    );
}

export default User;
