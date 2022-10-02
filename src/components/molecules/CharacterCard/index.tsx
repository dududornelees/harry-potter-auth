import { CharacterImage, CharacterTitle } from "components";
import { Props } from "./types";

export const CharacterCard = ({ name, house, image }: Props) => {
    return (
        <div className="w-full md:w-80 h-24 flex items-center bg-black/[.25] rounded-md">
            <CharacterImage name={name} image={image} />
            <CharacterTitle name={name} house={house} />
        </div>
    );
};
