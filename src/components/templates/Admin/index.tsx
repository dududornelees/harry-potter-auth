import { Header, CharacterList } from "components";

export const Admin = () => {
    return (
        <main className="min-h-screen min-w-screen bg-[url('/images/login/background.jpg')] bg-no-repeat bg-cover">
            <Header />
            <CharacterList />
        </main>
    );
};
