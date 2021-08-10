import { Player } from '~/types/Player'
import { Alliance } from '~/types/Alliance'

export interface Server {
	id: number
	name: string
	time: Date
	merger: number
	players: Player[];
	alliances: Alliance[];
}
