import Header from "../components/Header";
import FormSignIn from "../components/FormSignIn";
import Footer from "../components/Footer";

function SignIn() {
  return (
    <div className="pageContainer">
      <Header />
      <main className="main bg-dark">
        <FormSignIn />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
