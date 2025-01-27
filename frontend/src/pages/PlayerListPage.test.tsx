import {PlayerListPage} from "./PlayerListPage.tsx";
import {render, screen} from '@testing-library/react'
import {beforeAll, expect} from "vitest";
import {userEvent} from "@testing-library/user-event";
import {_usePlayerRepository} from "../test-support/__mock__/usePlayerRepository.tsx";
import {getSamplePlayerList} from "../test-support/stub.ts";

vi.mock('../repositores/usePlayerRepository.tsx', () => import('../test-support/__mock__/usePlayerRepository.tsx'))

beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn(function mock(
        this: HTMLDialogElement
    ) {
        this.open = true;
    });

    HTMLDialogElement.prototype.showModal = vi.fn(function mock(
        this: HTMLDialogElement
    ) {
        this.open = true;
    });

    HTMLDialogElement.prototype.close = vi.fn(function mock(
        this: HTMLDialogElement
    ) {
        this.open = false;
    });

    _usePlayerRepository.saveMock.mockResolvedValue(getSamplePlayerList()[0])
})

it('render' , () => {
    render(<PlayerListPage />)
    expect(screen.getByRole('heading', { name: 'Player List' })).toBeVisible()
    expect(screen.getByRole('button', { name: 'Add Player' })).toBeVisible()
})

it('show add player modal when add player button clicked', () => {
    render(<PlayerListPage />)
    const addPlayerButton = screen.getByRole('button', { name: 'Add Player' })
    addPlayerButton.click()
    expect(screen.getByRole('button', {name : 'Save'})).toBeVisible()
})

it('save player', () => {
    render(<PlayerListPage />);
    const addPlayerButton = screen.getByRole('button', { name: 'Add Player' });
    addPlayerButton.click();
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    expect(nameInput).toBeVisible();

    userEvent.type(nameInput, 'John Doe');
    screen.getByRole('button', { name: 'Save' }).click();
    expect(_usePlayerRepository.saveMock).toHaveBeenCalledWith({ name: 'John Doe' });
    expect(screen.queryByRole('dialog')).toBeNull();
})