export interface MovieDTO {
    id: number;
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: string;
}

export interface MovieCreationDTO {
    title: string;
    releaseDate: Date;
    trailer: string;
    poster?: File;
}