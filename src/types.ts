export type Row = {
    name: string;
    engine: string;
    type: string;
    class: string;
    deletable: boolean;
    visible: boolean;
    children?: Row[];
};
