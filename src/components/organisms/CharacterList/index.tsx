import { CharacterCard } from "components";
import { HarryPotterCharacters } from "services";

export const CharacterList = () => {
    return (
        <div className="container mx-auto mt-8 flex flex-col items-center pb-8">
            <h1 className="font-bold text-2xl text-center mb-4 text-white">Alguns personagens da saga:</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HarryPotterCharacters.map((character: Character) => (
                    <CharacterCard
                        key={character.id}
                        name={character.name}
                        house={character.house}
                        image={character.image}
                    />
                ))}
            </div>
        </div>
    );
};
