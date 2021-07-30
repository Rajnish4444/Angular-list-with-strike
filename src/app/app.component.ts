import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = '';
  public dataList: { name: string; status: boolean }[] = [];

  public onAdd() {
    let tempData = { name: '', status: true };
    tempData.name = this.name;
    console.log(this.name);
    this.dataList.push(tempData);
    this.name = '';
    console.log(this.dataList);
  }

  public strikeThis(item) {
    let itemIndex = this.dataList.findIndex(data => data == item);
    this.dataList[itemIndex].status = !this.dataList[itemIndex].status;
  }
}
