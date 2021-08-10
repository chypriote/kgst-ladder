import { Hero } from './Hero'
import { Account } from './Account'

export type AccountHero = {
	id?: number
	level: number
	hero?: Hero | number
	account?: Account | number

	quality: number

	military: number
	fortune: number
	provisions: number
	inspiration: number

	xp_quality: number
	xp_tourney: number

	ferocity: number
	brutality: number
	senior: number
	military_quality: number
}
