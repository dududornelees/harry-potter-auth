import { Props } from "./types";

export const CharacterTitle = ({ name, house }: Props) => {
    return (
        <div className="pl-2 pr-4">
            <h2 className="font-semibold text-lg text-white">{name}</h2>
            <p className="text-md text-white">{house}</p>
        </div>
    );
};
