import type { Lefiners, Room } from '~/server/types'

interface State {
  rooms: Room[] | null
  lefiners: Lefiners[] | null
}

export const useGeneralStore = defineStore('general', {
  state: (): State => ({
    rooms: [],
    lefiners: [],
  }),
})
