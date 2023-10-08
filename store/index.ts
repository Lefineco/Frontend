import type { Room, TableRows } from '~/server/types'

interface State {
  rooms: Room[] | null
  lefiners: TableRows<'users'>[] | null
}

export const useHomeStore = defineStore('home', {
  state: (): State => ({
    rooms: [],
    lefiners: [],
  }),
})
