import { Props } from "./types";

export const CharacterTitle = ({ name, house }: Props) => {
    return (
        <div className="pl-2 pr-4">
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-md">{house}</p>
        </div>
    );
};
