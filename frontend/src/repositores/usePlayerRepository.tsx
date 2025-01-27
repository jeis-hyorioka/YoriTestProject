import {useMemo} from "react";
import {useApiClient} from "../hooks/useApiClient.tsx";

export const usePlayerRepository = () => {
    const client = useApiClient()

    return useMemo(
        () => ({
          getAll: async (): Promise<Player[]> => {
            const response = (await client.get('api/v1/players').json()) as Player[]
            return response.map((player) => {
              return player
            })
          },

          save: async(name: string): Promise<Player> => {
              return (await client.post('api/v1/players', {json: name}).json()) as Player
          },

          delete: async(player: Player): Promise<void> => {
                 await client.delete(`api/v1/players/${player.id}`).json()
          }
        })
    , [client])
}