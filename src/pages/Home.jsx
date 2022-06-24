import Header from "../components/Header";
import Banner from "../components/Banner";
import FeatureContact from "../components/FeatureContact";
import FeatureMoney from "../components/FeatureMoney";
import FeatureSecurity from "../components/FeatureSecurity";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="pageContainer">
      <Header />
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureContact />
        <FeatureMoney />
        <FeatureSecurity />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
