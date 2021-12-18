import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionName = 'money-track';

  constructor(
    private fireStore: AngularFirestore
  ) { }

  get_transactions() {
    return this.fireStore.collection(this.collectionName).snapshotChanges();
  }

  add_transaction(data) {
    return this.fireStore.collection(this.collectionName).add(data);
  }

  delete_transaction(id) {
    return this.fireStore.doc(this.collectionName + '/' + id).delete();
  }
}
