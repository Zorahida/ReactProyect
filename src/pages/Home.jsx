import Footer from '../components/Footer';
import '../styles/App.css';

function Home({ Home }) {

    return <>
    <header className='Header'>
    <h1>Rick&Morty Adventures {Home}</h1>
    </header>
    <main className='Main'>
    <div >
       <p>Estas con las locas hstorias de Rick & Morty</p>
        </div>
    </main>
    <footer className='Footer'>
        <Footer Home={Home}/>
    </footer>
    </>
}

export default Home