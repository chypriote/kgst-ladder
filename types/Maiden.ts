import { Hero } from './Hero'
import { AccountMaiden } from '~/types/AccountMaiden'
import { Skin } from '~/types/Skin'
import { MaidenBond } from '~/types/MaidenBond'

export type Maiden = {
	id?: number
	mid?: number
	name: string
	slug: string;
	naughty: number

	picture?: any;
	naughty_picture?: any;

	hero: Hero
	skins: Skin[]
	account_maidens: AccountMaiden[];
	maiden_bonds: MaidenBond[];
}
