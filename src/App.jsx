import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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
