import { Props } from "./types";

export const CharacterImage = ({ name, image }: Props) => {
    return (
        <div className="w-24 h-full p-1.5">
            <img className="w-full h-full rounded-md" src={image} alt={name} />
        </div>
    );
};
