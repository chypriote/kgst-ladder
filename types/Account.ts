import { AccountHero } from '~/types/AccountHero'
import { AccountMaiden } from '~/types/AccountMaiden'

export interface Account {
	id: number
	name: string
	server: number
	uid: string
	parameters: { [key: string]: any }
	last_login: Date
	token: string
	account_maidens: AccountMaiden[]
	account_heroes: AccountHero[]
}
