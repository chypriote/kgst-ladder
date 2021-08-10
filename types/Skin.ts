import { Hero } from '~/types/Hero'
import { Maiden } from '~/types/Maiden'
import { QualitySkill } from '~/types/QualitySkill'

export enum Rarity {
	RARE= 'rare',
	EPIC= 'epic',
	LIMITED= 'limited',
	LEGENDARY= 'legendary',
}

export interface Skin {
	id: number;
	name: string;
	rarity: Rarity
	picture?: any;
	naughty_picture?: any;
	hero?: Hero;
	maiden?: Maiden;
	quality_skill?: QualitySkill;
}
