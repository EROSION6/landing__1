import Header from './components/Header';
import Content from './components/Content';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<div className='background'>
				<Header />
				<Content />
				<Main />
				<Footer />
			</div>
		</>
	);
}

export default App;
