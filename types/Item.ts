import { Paragon } from '~/types/Paragon'
import { ChallengeProgressItem, ChallengeRewardItem } from '~/types/Challenge'
import { EventDrop, EventShop } from '~/types/Event'
import { ShopPackItem } from '~/types/Shop'

export interface Item {
	id: number;
	name: string;
	iid?: number;
	kind?: number;
	picture?: any;
	event_shops: EventShop[];
	event_drops: EventDrop[];
	shop_pack_items: ShopPackItem[];
	paragons: Paragon[];
	challenge_reward_items: ChallengeRewardItem[];
	challenge_progress_items: ChallengeProgressItem[];
}
