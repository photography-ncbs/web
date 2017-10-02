import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { MdDatepickerModule } from '@angular/material';
import { MdFormFieldModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  validName = false;
  validDetails = false;
  themeName = "";
  themeDetails = "";
  showProgress = "progress top";
  submissionDate = null;
  submissionValid = false;
  votingDate = null;
  votingDateValid = false;
  judgingDate = null;
  judgingDateValid = false;
  db: AngularFireDatabase;
  constructor(db: AngularFireDatabase) { this.db = db; }

  ngOnInit() {
  }

  validate() {
    this.validName = false;
    this.validDetails = false;
    if (this.themeName.trim().length === 0) {
      this.validName = true;
    } else if (this.themeDetails.trim().length === 0) {
      this.validDetails = true;
    } else if (this.submissionDate === null) {
      this.submissionValid = true;
    } else if (this.votingDate === null) {
      this.votingDateValid = true;
    } else if (this.judgingDate === null) {
      this.judgingDateValid = true;
    } else {
      this.setNewTheme();
    }
  }

  setNewTheme() {
    this.changeProgress();
    this.db.list('themes').push(this.themeName)
      .then((item) => {
        this.updateDetails(item.key);
      }).catch(reject => {
        this.showError(reject);
      });
  }

  updateDetails(key: string) {
    this.db.object('details/' + key).set(
      {
        "name": this.themeName,
        "details": this.themeDetails,
        "submissionDate": '' + this.submissionDate,
        "votingDate": '' + this.votingDate,
        "judgingDate": '' + this.judgingDate,
        "key": key
      }
    ).then(_ => {
      this.changeProgress();
    }).catch(reject => {
      this.showError(reject);
    });
  }

  changeProgress() {
    if (this.showProgress === "progress") {
      this.showProgress = "progress top loop";
    } else {
      this.showProgress = "progress top";
    }
  }

  showError(reject) {
    console.log(reject);
  }

  onInput(event, id) {
    switch (id) {
      case 0: this.submissionDate = event.value;
        this.submissionValid = this.isValidDate(id);
        break;
      case 1: this.votingDate = event.value;
        this.votingDateValid = this.isValidDate(id);
        break;
      case 2: this.judgingDate = event.value;
        this.judgingDateValid = this.isValidDate(id);
        break;
    }

  }

  isValidDate(id) {
    switch (id) {
      case 0: return this.submissionDate == null;
      case 1: return this.votingDate == null;
      case 2: return this.judgingDate == null;
      default: return false;
    }
  }
}
