import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WordGame from "../../components/WordGame";




export default async function shuffle_game() {
    const response = await fetch(`http://localhost:5000/api/game1/shuffle_game`, {
      method: 'GET',
      cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error('Error fetching Word');
    }
    const data = await response.json();
    const originalWord = data.Word;
  return (
      <div>
        <Header />
        <WordGame originalWord={originalWord}/>
        <Footer />
      </div>
  );
}
