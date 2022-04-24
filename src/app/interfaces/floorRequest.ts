export interface FloorRequest {
  id?: number,
  floorNumber?: number,
  buildingId?: number
  floorName: string
  floorPlan?: File;
}
