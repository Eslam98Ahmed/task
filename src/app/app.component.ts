import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  public aufgaben: Observable<any>[] = [];

  constructor(afDb: AngularFireDatabase) {
    const itemsRef: AngularFireList<any> = afDb.list('Aufgaben');
    itemsRef.valueChanges().subscribe(
      x => { this.aufgaben = x; }
    );
  }
}
