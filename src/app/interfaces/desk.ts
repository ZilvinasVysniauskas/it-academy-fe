interface Info {
    userFirstName: string,
    userLastName: string
}

export interface Desk {
    id: number,
    deskNumber: number,
    info: Info,
    available: boolean
}