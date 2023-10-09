import type { Room, TableRows } from '~/server/types'

interface State {
  rooms: Room[] | null
  lefiners: TableRows<'users'>[] | null
}

export const useGeneralStore = defineStore('general', {
  state: (): State => ({
    rooms: [],
    lefiners: [],
  }),
})
