import { ChangeEvent, FormEvent, useState } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../store';
import { Pair } from '../interfaces';
import ErrorMessage from './ErrorMessage';

export default function CriptoSearchForm() {
	const { cryptocurrencies, fetchData } = useCryptoStore();

	const [error, setError] = useState('')
	const [pair, setPair] = useState<Pair>({
		currency: '',
		cryptocurrency: ''
	});

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setPair({
			...pair,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (Object.values(pair).includes('')) {
			setError('Todos los campos son obligatorios.');
            return;
		}
		setError('');
		fetchData(pair)
	};

	return (
		<form className="form" onSubmit={handleSubmit}>

            {error && <ErrorMessage>{error}</ErrorMessage>}	

			<div className="field">
				<label htmlFor="currency">Moneda:</label>
				<select
					name="currency"
					id="currency"
					value={pair.currency}
					onChange={handleChange}
				>
					<option value="">Seleccione</option>
					{currencies.map(currency => (
						<option key={currency.code} value={currency.code}>
							{currency.name}
						</option>
					))}
				</select>
			</div>
			<div className="field">
				<label htmlFor="cryptocurrency">Moneda:</label>
				<select
					name="cryptocurrency"
					id="cryptocurrency"
					value={pair.cryptocurrency}
					onChange={handleChange}
				>
					<option value="">Seleccione</option>
					{cryptocurrencies.map(crypto => (
						<option
							key={crypto.CoinInfo.Name}
							value={crypto.CoinInfo.Name}
						>
							{crypto.CoinInfo.FullName}
						</option>
					))}
				</select>
			</div>
			<input type="submit" value="Cotizar" />
		</form>
	);
}
