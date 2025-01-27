
import type { useApiClient } from '../../hooks/useApiClient.tsx'

const mocksAndSpies = {
    getSpy: vi.fn(() => ({ json: vi.fn() })),
    postSpy: vi.fn(() => ({ json: vi.fn() })),
    patchSpy: vi.fn(() => ({ json: vi.fn() })),
    deleteSpy: vi.fn(),
    putSpy: vi.fn(),
    headSpy: vi.fn(),
    create: vi.fn(),
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const useApiClientMock: () => ReturnType<typeof useApiClient> = vi.fn(() => ({
    get: mocksAndSpies.getSpy,
    post: mocksAndSpies.postSpy,
    patch: mocksAndSpies.patchSpy,
    delete: mocksAndSpies.deleteSpy,
    put: mocksAndSpies.putSpy,
    head: mocksAndSpies.headSpy,
    create: mocksAndSpies.create,
}))

export { mocksAndSpies as _useApiClient, useApiClientMock as useApiClient }
