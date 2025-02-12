import ContactForm from "../../components/ContactForm";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContent from "../../components/MainContent";


export default function Home() {
  return (
    <div>
        <Header />
        <MainContent/>
        <FAQ/>
        <ContactForm />
        <Footer />
    </div>
  );
}
