import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
	const { fetchCryptops } = useCryptoStore()
	useEffect(() => {
		fetchCryptops()
	}, [])
	return (
		<>
			<div className="container">
				<h1 className="app-title">
					Cotizador de
					<span>Ciptomonedas</span>
				</h1>

				<div className="content">
					<CriptoSearchForm />
					<CryptoPriceDisplay />
				</div>
			</div>
		</>
	);
}

export default App;
