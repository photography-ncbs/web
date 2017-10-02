import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  showProgress = true;
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  db;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.itemRef = db.object('item');
    this.item = this.itemRef.valueChanges();
  }
  save(newName: string) {
    this.db.list('something').push(newName)
      .then((item) => {
        this.showProgress = false;
        console.log(item.key)
      }).catch(reject => {
        console.log("Error");
      });
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }
  ngOnInit() {
  }

}
