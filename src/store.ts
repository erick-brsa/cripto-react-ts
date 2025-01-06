import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

import { Cryptocurrency } from './interfaces';
import { getCryptos } from './services/CryptoService';

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptops: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
	cryptocurrencies: [],
    fetchCryptops: async () => {
		const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptocurrencies
        }))        
	}
})));
