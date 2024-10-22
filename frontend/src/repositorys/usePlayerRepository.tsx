import {useMemo} from "react";

export const usePlayerRepository = () => {

    return useMemo(() => {
        getAll: () => {
            return client.get('api/v1/players').json() as Promise<Player[]>
        }
    }
}