export enum Status {
    Alive = "Alive",
    Dead = "Deceased",
}

/* There's only two genders */
export enum Gender {
    Female = "Female",
    Male = "Male",
}

export enum ResideStatus {
    Current = "Current",
    Former = "Former",
}

export type Relationship = {
    name: string
    relationship: string
    image?: string
    link?: number
}

export type Reside = {
    name: string
    status: ResideStatus
    image?: string
}

export type Character = {
    id: number
    name: string
    age?: number
    status: Status
    gender: Gender
    relationship: Relationship[]
    resides: Reside[]
    height?: number
    short_description: string
    images: string[]
}
