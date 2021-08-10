import { Attribute } from '~/types/constants'
import { Maiden } from '~/types/Maiden'

export interface MaidenBond {
	attribute: Attribute,
	second_attribute?: Attribute
	per_level?: number
	multiplier_per_level?: number
	levels: number
	order: number
	unlock: number
	maiden: Maiden
}
