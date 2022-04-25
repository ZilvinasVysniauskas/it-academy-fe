export interface FloorRequest {
  id?: number,
  floorNumber?: number,
  buildingId?: number
  floorName: string
  department: string
  floorPlan?: File;
}
