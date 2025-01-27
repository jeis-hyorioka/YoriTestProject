import {usePlayerRepository} from "../../repositores/usePlayerRepository.tsx";

const mocksAndSpies = {
    getAllMock: vi.fn<ReturnType<typeof usePlayerRepository>['getAll']>(() => Promise.resolve([])),
    saveMock: vi.fn<ReturnType<typeof usePlayerRepository>['save']>((player: Player) => Promise.resolve(player)),
    deleteMock: vi.fn<ReturnType<typeof usePlayerRepository>['delete']>(() => Promise.resolve())

}

const usePlayerRepositoryMock: () => ReturnType<typeof usePlayerRepository> = vi.fn(() => ({
    getAll: mocksAndSpies.getAllMock,
    save: mocksAndSpies.saveMock,
    delete: mocksAndSpies.deleteMock
}))

export { mocksAndSpies as _usePlayerRepository, usePlayerRepositoryMock as usePlayerRepository }