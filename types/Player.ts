
export interface Alliance {
	id: number
	aid: number
	name: string
	power: number
	level: number
	reputation: number
}

export interface Player {
	id: number
	gid: number
	name: string
	vip: number
	power: number
	server: number

	military: number
	fortune: number
	provisions: number
	inspiration: number

	heroes: number
	maidens: number
	children: number
	intimacy: number

	notes: string
	favorite: boolean
	inactive: boolean | null
	alliance: Alliance|null
}
