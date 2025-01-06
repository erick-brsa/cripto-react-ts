import { z } from "zod";
import { CryptoCurrencyResponseSchema, CurrencySchema, PairSchema } from "../schemas/crypto-schema";

// export interface Currency {
    //     code: string;
    //     name: string;
    // }
    
export type Currency = z.infer<typeof CurrencySchema>

export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>

export type Pair = z.infer<typeof PairSchema>
