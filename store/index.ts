import { ActionTree, MutationTree } from 'vuex'
import { Player } from '~/types/Player'

export interface RootState {
	players: Player[]
}
export const state = (): RootState => ({
	players: [],
})

export const mutations: MutationTree<RootState> = {
	setPlayers (state: RootState, players: Player[]) {
		state.players = players
	},
}
export const actions: ActionTree<RootState, RootState> = {
	async FETCH_VIP_LADDER ({ commit }) {
		commit('setPlayers', await this.$strapi.find('players', { _sort: 'vip:desc,power:desc' }))
	},
	async FETCH_KP_LADDER ({ commit }) {
		commit('setPlayers', await this.$strapi.find('players', { _sort: 'power:desc' }))
	},
	async FETCH_VIP0_LADDER ({ commit }) {
		commit('setPlayers', await this.$strapi.find('players', { _sort: 'power:desc', vip: 0 }))
	},
	async FETCH_HERO_LADDER ({ commit }) {
		commit('setPlayers', await this.$strapi.find('players', { _sort: 'heroes:desc,power:desc' }))
	},
	async FETCH_SERVER_LADDER ({ commit }, payload) {
		commit('setPlayers', await this.$strapi.find('players', { _sort: 'power:desc', server: payload }))
	},
	async FETCH_MERGER_LADDER ({ commit }, payload) {
		commit('setPlayers', await this.$strapi.find('players', { _sort: 'power:desc', 'server.merger': payload }))
	},
}
