import { Attribute } from '~/types/constants'
import { Skin } from '~/types/Skin'

export interface QualitySkill {
	id: number;
	sid?: number;
	name: string;
	attribute: Attribute
	stars: number;
	unlockable: boolean;
	skins: Skin[];
}
