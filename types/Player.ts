import { Alliance } from '~/types/Alliance'
import { Server } from '~/types/Server'
import { AllianceMember } from '~/types/AllianceMember'
import { PlayerHero } from '~/types/PlayerHero'

export interface Player {
	id: number
	gid: number
	name: string
	vip: number
	power: number
	previous?: number

	military: number
	fortune: number
	provisions: number
	inspiration: number

	heroes: number
	maidens: number
	children: number
	intimacy: number

	battle?: number
	ratio?: number

	headType: number
	headId: number

	notes: string
	favorite: boolean
	inactive: boolean | null
	alliance: Alliance|null
	server: Server
	alliance_members: AllianceMember[]
	player_heroes: PlayerHero[]

	updated_at: string
	created_at: string
}
