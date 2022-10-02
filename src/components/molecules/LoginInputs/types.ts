export type Props = {
    data: Data;
    setData: (data: Data) => void;
};

type Data = {
    user: string;
    password: string;
};
