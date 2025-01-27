import {_useApiClient} from "../test-support/__mock__/useApiClient.tsx";
import {getSamplePlayerList} from "../test-support/stub.ts";
import {renderHook} from "@testing-library/react";
import {usePlayerRepository} from "./usePlayerRepository.tsx";
import {expect} from "vitest";

vi.mock('../hooks/useApiClient.tsx', () => import('../test-support/__mock__/useApiClient.tsx'))
const SAMPLE_PLAYERS_LIST = getSamplePlayerList(3)

it('get all players', async () => {
    _useApiClient.getSpy.mockReturnValue({
        json: vi.fn().mockResolvedValue(SAMPLE_PLAYERS_LIST)
    })
    const { result } = renderHook(() => usePlayerRepository())

    const players = await result.current.getAll()

    expect(players).toEqual(SAMPLE_PLAYERS_LIST)
})

it('save player', async () => {
    const player = SAMPLE_PLAYERS_LIST[0]
    _useApiClient.postSpy.mockReturnValue({
        json: vi.fn().mockResolvedValue(player)
    })
    const { result } = renderHook(() => usePlayerRepository())

    const savedPlayer = await result.current.save(player)

    expect(savedPlayer).toEqual(player)
})

it('delete player', async () => {
    const player = SAMPLE_PLAYERS_LIST[0]
    _useApiClient.deleteSpy.mockReturnValue({
        json: vi.fn().mockResolvedValue(player)
    })
    const { result } = renderHook(() => usePlayerRepository())

    const deletedPlayer = await result.current.delete(player)

    expect(deletedPlayer).toEqual(player)
})