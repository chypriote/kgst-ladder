/* eslint-disable no-use-before-define */
import { Player } from './Player'
import { PlayerHero } from './PlayerHero'
import { Maiden } from './Maiden'
import { AccountHero } from './AccountHero'
import { Paragon } from './Paragon'
import { QualitySkill } from '~/types/QualitySkill'
import { Attribute } from '~/types/constants'
import { Skin } from '~/types/Skin'

export enum Unlock {
	STORY= 'story',
	EVENT= 'event',
	VIP= 'vip',
	KINGDOM= 'kingdom'
}

export interface HeroGroup {
	id: number
	name: string
	order?: number
	paragons: Paragon[]
	heroes: Hero[]
}

export type Hero = {
	id: number
	hid: number
	name: string
	slug: string
	picture?: any

	stars: number
	quality: number
	unlock: Unlock

	focus: Attribute
	second_focus: Attribute

	maiden?: Maiden
	hero_group?: HeroGroup
	skins: Skin[]
	quality_skills: QualitySkill[]
	paragons: Paragon[]
	frame?: any

	players: Player
	player_heroes: PlayerHero[]
	account_heroes: AccountHero[]
}
