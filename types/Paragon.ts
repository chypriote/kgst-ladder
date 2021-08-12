import { Item } from '~/types/Item'
import { Hero, HeroGroup } from '~/types/Hero'

export interface Paragon {
	id: number
	pid?: number
	name: string
	cost: number
	levels: number
	description?: string
	military: number
	fortune: number
	provisions: number
	inspiration: number
	balanced: number
	heroes: Hero[]
	hero_groups: HeroGroup[]
	item?: Item
}
