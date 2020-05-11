import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ArtStore';

  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {

    const documento = await  this.firestore.collection('testes')
    .doc('vnn1DIp7vQm78lnxbj3B')
    .get()
    .toPromise;



  }

}