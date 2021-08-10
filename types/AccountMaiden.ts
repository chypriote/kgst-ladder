import { Maiden } from '~/types/Maiden'
import { Account } from '~/types/Account'

export interface AccountMaiden {
	id: number
	intimacy: number
	charm: number
	experience: number
	maiden: Maiden
	account: Account
}
