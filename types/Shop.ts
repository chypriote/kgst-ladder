/* eslint-disable no-use-before-define */
import { Item } from '~/types/Item'

export interface ShopPackItem {
	id: number
	count: number
	shop_pack: ShopPack
	item: Item
}

export interface ShopPack {
	id: number
	shop_id: number
	name: string
	vip: number
	price: number
	limit: number
	from: Date
	to: Date
	shop_pack_items: ShopPackItem[]
}
