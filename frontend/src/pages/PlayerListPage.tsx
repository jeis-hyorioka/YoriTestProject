import {useEffect, useRef, useState} from "react";
import {usePlayerRepository} from "../repositores/usePlayerRepository.tsx";

type Player = {
    id: number;
    name: string;
};

export const PlayerListPage = () => {
    const {getAll, save} = usePlayerRepository();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [players, setPlayers] = useState<Player[]>([]);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        getAll().then(setPlayers);
    }, [getAll]);

    const handleSave = () => {
        console.log("Player saved");
        save(name);
    };

    return (
        <div>
            <h1>Player List</h1>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>{player.name}</li>
                ))}
            </ul>

            <button onClick={() =>
                dialogRef.current?.showModal()
            }>Add Player</button>

            <dialog ref={dialogRef} className="w-[400px]">
                <h2>Add Players</h2>
                <input type="text" aria-label="Name" name="Name" placeholder="Name" value={name} onChange={(event) => {
                    setName(event.target.value);
                }} />
                <button onClick={handleSave}>Save</button>
            </dialog>
        </div>
    );
};