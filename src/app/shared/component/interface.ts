export interface Lesson {
    title: string;
    name: string;
    number?: string;
    fiveAdditions?: string;
    sixAdditions?: string;
    sevenAdditions?: string;
    eightAdditions?: string;
    nineAdditions?: string;
    test?: string;
    id: number;
    src: string;
    header?: string;
    learnGame?: string;
}

export interface Practice {
    title: string;
    id?: number;
    header?: string;
    src: string;
    img?: string;
    name: string;
    abacusNum?: string;
    title1?: string;
    title2?: string;
    exercise?: string;
    exercise1?: string;
    text?: string;
    exerciseTwo?: string;
    gameOne?: string;
    gameTwo?: string;
    exercisesPicture?: string;
    learnGame?: string;
}

export interface Video {
    id: number;
    name?: string;
    title: string;
    src: string;
}

export interface Learn {
    id?: number;
    name?: string;
    number?: string;
    fiveAdditions?: string;
    sixAdditions?: string;
    sevenAdditions?: string;
    eightAdditions?: string;
    nineAdditions?: string;
    test?: string;
    title?: string;
    src: string;
    exercisesPicture?: string;
    header?: string;
    img?: string;
    abacusNum?: string;
    exercise?: string;
    exerciseTwo?: string;
    text?: string;
    gameOne?: string;
    gameTwo?: string;
    learnGame?: string;
}


export interface Exercise {
    id?: number;
    title?: string;
    text?: string;
    src: string;
    name?: string;
    it?: string;
    title1?: string;
    title2?: string;
    exercise?: string;
}

export interface Game {
    id?: number;
    name?: string;
    number?: string;
    fiveAdditions?: string;
    sixAdditions?: string;
    sevenAdditions?: string;
    eightAdditions?: string;
    nineAdditions?: string;
    test?: string;
    title?: string;
    src: string;
    exercisesPicture?: string;
    header?: string;
    img?: string;
    abacusNum?: string;
    exercise?: string;
    exerciseTwo?: string;
    text?: string;
    gameOne?: string;
    gameTwo?: string;
}
export interface CheckBox {
    color?: string;
    colorr?: string;
    id?: any;
}
