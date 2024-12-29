export interface ActorDTO {
    id: number
    name: string;
    dateOfBirth: Date;
    picture?: string;
}

export interface ActorCreationDTO {
    name: string;
    dateOfBirth: Date;
    picture?: File;
}

export interface ActorsAutoCompleteDTO {
    id: number;
    name: string;
    character: string;
    picture: string;
}