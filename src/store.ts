import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

import { Cryptocurrency, CryptoPrice, Pair } from './interfaces';
import { getCryptos, fetchCurrencyCryptoPrice } from './services/CryptoService';

type CryptoStore = {
	cryptocurrencies: Cryptocurrency[];
	result: CryptoPrice;
	fetchCryptops: () => Promise<void>;
	fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
	devtools(set => ({
		cryptocurrencies: [],
        result: {
            IMAGEURL: '',
            PRICE: '',
            HIGHDAY: '',
            LOWDAY: '',
            CHANGEPCT24HOUR: '',
            LASTUPDATE: '',
        },
		fetchCryptops: async () => {
			const cryptocurrencies = await getCryptos();
			set(() => ({
				cryptocurrencies
			}));
		},
		fetchData: async pair => {
			await fetchCurrencyCryptoPrice(pair);
		}
	}))
);
