import ky from "ky";
import {useMemo} from "react";

const isBrowser = typeof window !== 'undefined'

export const useApiClient = () => {

    return useMemo(
        () =>
            ky.create({
                prefixUrl: isBrowser ? window.location.origin : 'http://localhost:8080',
                retry: 0,
                timeout: 20000,
                hooks: {
                    beforeRequest: [
                        (request) => {
                            request.headers.set('Content-Type', 'application/json')
                        },
                    ],
                    afterResponse: [
                        async (_, __, response) => {
                            if (response.status === 403) {
                                console.log('error')
                            }
                        },
                    ],
                },
            }),
        [],
    )
}