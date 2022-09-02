import Host from "./Host";
import Photo from "./Photo";

export default class Event {
  public title: string;
  public description: string;
  public paid: boolean;
  public capacity: number;
  public venue: string;
  public date: Date;
  public eventType: string;
  public completed: boolean;
  public currentlyBooked: boolean;
  public imageUri: string;
  public hosts: Host[];
  public photos: Photo[];
}
