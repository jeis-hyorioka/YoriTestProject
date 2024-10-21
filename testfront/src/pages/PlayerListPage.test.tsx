import {expect, it} from 'vitest'
import {render} from "@testing-library/react";
import {PlayerListPage} from "./PlayerListPage.tsx";

it('render' , () => {
    render(<PlayerListPage />)
    expect(screen.getByRole('heading', { name: 'Player List' })).toBeVisible();
})