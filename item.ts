export default class Item {
  public value: any;
  public priority: number;
  public isHead: boolean;

  constructor(value: any, priority: number, head: boolean = false) {
    this.value = value;
    this.priority = priority;
    this.isHead = head;
  }
}
