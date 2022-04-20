export interface Reservation {
  reservationId: number
  roomName: string
  deskName: string
  date: Date
  deskId: number
  reservationStatus?: string
  "buildingName": string
  "floorNumber": number

}
