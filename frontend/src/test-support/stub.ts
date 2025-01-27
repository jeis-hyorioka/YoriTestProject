

export const getSamplePlayerList = (
    count = 1,
): Player[] => Array.from({length: count}, (_, index) => {
    return {
        id: index,
        name: `player${index}`,
        email: `player${index}@example.com`,
    }
})