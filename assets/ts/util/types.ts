export enum Status {
    Alive = "Alive",
    Dead = "Dead",
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

export type Character = {
    name: string
    age: number
    status: Status
    gender: Gender
    releationship: {
        name: string
        relationship: string
        image: string
    }[]
    resides: {
        name: string
        status: ResideStatus
    }[]
    height: number
    short_description: string
    images: string[]
}
