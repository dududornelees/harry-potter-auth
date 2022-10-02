import { Input, Button } from "components";
import { Props } from "./types";

export const LoginInputs = ({ data, setData }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="grid grid-cols-1 gap-6">
            <Input
                name="user"
                label="USUÁRIO"
                className="w-80 h-14"
                placeholder="Insira seu usuário"
                type="text"
                value={data.user}
                onChange={handleChange}
            />

            <Input
                name="password"
                label="SENHA"
                className="w-80 h-14"
                placeholder="Insira sua senha"
                type="password"
                value={data.password}
                onChange={handleChange}
            />

            <Button className="w-80 h-12 font-bold" type="submit">
                Entrar
            </Button>
        </div>
    );
};
