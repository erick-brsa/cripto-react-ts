import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

import { Cryptocurrency, CryptoPrice, Pair } from './interfaces';
import { getCryptos, fetchCurrencyCryptoPrice } from './services/CryptoService';

type CryptoStore = {
	cryptocurrencies: Cryptocurrency[];
	result: CryptoPrice;
	loading: boolean;
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
		loading: false,
		fetchCryptops: async () => {
			const cryptocurrencies = await getCryptos();
			set(() => ({
				cryptocurrencies
			}));
		},
		fetchData: async pair => {
			set(() => ({
				loading: true
			}));
			const result = await fetchCurrencyCryptoPrice(pair);
			set(() => ({
				result,
				loading: false
			}));
		}
	}))
);
