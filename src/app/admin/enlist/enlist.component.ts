import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Theme } from '../../common/theme'
@Component({
  selector: 'app-enlist',
  templateUrl: './enlist.component.html',
  styleUrls: ['./enlist.component.scss']
})
export class EnlistComponent implements OnInit {
  themeList = []
  showProgress = "progress top";
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase) { this.db = db; }

  ngOnInit() {
    this.getThemeList();
  }

  getThemeList() {
    this.changeProgress();
    this.db.object('details').valueChanges().subscribe(data => {
      if (data != null) {
        let keyList = Object.keys(data);
        for (let i = 0; i < keyList.length; i++) {
          this.themeList.push(new Theme(data[keyList[i]]));
        }
      }
      this.changeProgress();
    },
      error => {
        this.showError(error);
      });
  }

  changeProgress() {
    if (this.showProgress === "progress top") {
      this.showProgress = "progress top loop";
    } else {
      this.showProgress = "progress top";
    }
  }

  showError(reject) {
    this.changeProgress();
    console.log(reject);
  }
}
