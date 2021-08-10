/* eslint-disable no-use-before-define */
import { Item } from '~/types/Item'

export interface EventDrop {
	id: number
	probability?: number
	count: number
	item: Item
	event: Event
}

export interface EventShop {
	id: number
	price: number
	count: number
	limit?: number
	item: Item
	event: Event
}

export interface Event {
	id: number
	eid: number
	type: number
	name: string
	start: Date
	end?: Date
	event_shops: EventShop[]
	event_drops: EventDrop[]
}
