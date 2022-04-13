import {Desk} from "./desk";

export interface Room {
    roomId: number,
    roomName: string,
    desks: Desk[]
}