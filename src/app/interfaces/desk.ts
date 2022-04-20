interface Info {
  userFirstName: string,
  userLastName: string
}

export interface Desk {
  id: number,
  deskName: string,
  info: Info,
  available: boolean
}
