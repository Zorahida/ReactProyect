import Footer from '../components/Footer';
import '../styles/App.css';

function Home( ) {
    return (
    <>
    <header className='header'>
    <h1>Rick&Morty Adventures {Home}</h1>
    </header>
    <main className='Main'>
    <div >
       <p>Estas son las locas hstorias de Rick & Morty</p>
        </div>
    </main>
    <footer className='footer'>
        <Footer/>
    </footer>
    </>
    );
}

export default Home