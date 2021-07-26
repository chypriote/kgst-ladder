import Vue from 'vue'
import numeral from 'numeral'
import { format, parseISO } from 'date-fns'
const ordinal = require('ordinal-numbers')

Vue.filter('numeral', (value: number, format = '0.0a') => numeral(value).format(format).toUpperCase())
Vue.filter('ordinal', (value: number) => ordinal(value))
Vue.filter('formatted', (value: number) => Number(value).toLocaleString())
Vue.filter('percent', (value: number) => `${value.toFixed()} %`)
Vue.filter('date', (value: string, fmt: string) => format(parseISO(value), fmt))
