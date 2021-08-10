/* eslint-disable no-use-before-define */

import { Item } from '~/types/Item'

export interface ChallengeRewardItem {
	id: number
	count: number
	challenge_reward: ChallengeReward
	item: Item
}

export interface ChallengeReward {
	id: number
	rank: number
	leader: boolean
	challenge: Challenge
	challenge_reward_items: ChallengeRewardItem[]
}

export interface ChallengeProgressItem {
	id: number
	count: number
	challenge_progress: ChallengeProgress
	item: Item
}

export interface ChallengeProgress {
	id: number
	score: number
	challenge: Challenge
	challenge_progress_items: ChallengeProgressItem[]
}

export interface Challenge {
	id: number
	name: string
	cid: number
	type: number
	start: Date
	end: Date
	alliance: boolean
	title: string
	crossServer: boolean
	challenge_rewards: ChallengeReward[]
	challenge_progresses: ChallengeProgress[]
}
