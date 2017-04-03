export class Article {

  // newDate = new Date();
  // month: number = this.currentTime.getMonth() + 1;
  // day: number = this.currentTime.getDate();
  // year: number = this.currentTime.getFullYear();

  // public dateTime:string = this.year + "/" + this.month + "/" + this.day;

  constructor (public title: string, public author: string, public text: string, public real: boolean, public id: number) { }

}
