import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseService<T> {
  collectionRef: AngularFirestoreCollection<T>;
  item$: Observable<T[]>;

  constructor(private afs: AngularFirestore, table: string) { 
    this.collectionRef = this.afs.collection<T>(table);
    this.item$ = this.collectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as T;
        const id = action.payload.doc.id;
        return Object.assign({id}, data);        
      });
    });
  }

  add(item: T) {
    if (item) {
      this.collectionRef.add(item);
    }
  }

  update(id: string, item: T) {
    this.collectionRef.doc(id).update(item);
  }

  delete(id: string) {
    this.collectionRef.doc(id).delete();
  }

}
