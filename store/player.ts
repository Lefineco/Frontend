import type { MediaRemoteControl } from "vidstack";

interface StatePlayerStore {
    isOwner: boolean;
    isSynced: boolean;
    remote: MediaRemoteControl | null;
}

export const usePlayerStore = defineStore('player', {
	state: (): StatePlayerStore => ({
        isOwner: false,
        isSynced: false,
        remote: null,
	}),
})