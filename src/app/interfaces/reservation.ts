export interface Reservation {
  reservationId: number
  roomName: string
  deskNumber: number
  date: Date
  deskId: number
  reservationStatus?: string
  "buildingName": string
  "floorNumber": number

}
