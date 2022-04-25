export interface UserRequest {
  "userId": number,
  "firstName": string,
  "middleName": string,
  "lastName": string,
  "password"?: string,
  "isActive": number,
  "email": string,
  "role": number,
  defaultFloorId: number,
  department: string
}
