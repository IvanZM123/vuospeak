// Imports modules
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-time',
  templateUrl: './card-time.component.html',
  styleUrls: ['./card-time.component.css']
})
export class CardTimeComponent {
  public image = "";
  public time = "";
  public date = "";
  public font = "";
  private days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  private months = [
    "Ene", "Feb", "Mar", "Abr",
    "May", "Jun", "Jul", "Ago",
    "Sep", "Oct", "Nov", "Dic"
  ];

  constructor() {
    this.assignMassive(new Date());
    this.updateTimeAndDate();
  }

  private updateTimeAndDate(): void {
    setInterval(() => {
      const date = new Date();
      this.assignMassive(date);
    }, 1000);
  }

  private assignMassive(date: Date) {
    this.date = this.setDate(date);
    this.time = this.setTime(date);
    this.image = this.setImage(date);
    this.font = this.background(date);
  }

  private setTime(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = "";

    hours = hours > 12 ? hours - 12 : hours;
    time = hours > 12 ? "PM" : "AM";

    const _hours = this.checkTime(hours);
    const _minutes = this.checkTime(minutes);

    return `${ _hours }:${ _minutes } ${ time }`;
  }

  private setDate(date: Date): string {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const currentDate = date.getDate();

    return `${ this.days[day] }, ${ currentDate } ${ this.months[month] } ${ year }`;
  }

  private setImage(date: Date) {
    const hours = date.getHours();

    if (hours >= 16 || hours < 6) {
      return "/assets/icons/moon.svg";
    } else if (hours >= 6 && hours <= 12) {
      return "/assets/icons/dawn.svg";
    } else {
      return "/assets/icons/sun.svg";
    }
  }

  private background(date: Date): string {
    const hours = date.getHours();

    if (hours >= 16 || hours < 6) {
      return "night";
    } else if (hours >= 6 && hours <= 12) {
      return "dawn";
    } else {
      return "sunrise";
    }
  }

  private checkTime(value: number): string {
    return value < 10 ? `0${ value }` : `${ value }`;
  }
}
