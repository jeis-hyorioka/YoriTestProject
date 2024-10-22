import {PlayerListPage} from "./PlayerListPage.tsx";
import { render, screen } from '@testing-library/react'

it('render' , () => {
    render(<PlayerListPage />)
    expect(screen.getByRole('heading', { name: 'Player List' })).toBeVisible()
})