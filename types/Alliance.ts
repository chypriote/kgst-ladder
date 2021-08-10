import { AllianceMember } from './AllianceMember'
import { Server } from './Server'

export type Alliance = {
	id?: number
	aid: string
	name: string
	power?: number
	level?: number
	reputation?: number
	motto?: string
	members?: AllianceMember[]
	server: Server
	cross: boolean
}
