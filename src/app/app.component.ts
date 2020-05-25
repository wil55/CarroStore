import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produto } from './models/produto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ArtStore';

  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {

    const documento = await this.firestore.collection('produtos')
      .doc('5n3BdThEZhe6rKxx41SO')
      .get()
      .toPromise();

    const produto = {
      id: documento.id,
      ...documento.data()
    } as Produto;

    console.log(produto);

    const documentoEstilo = await this.firestore.collection('estilos')
      .doc(produto.idEstilo)
      .get()
      .toPromise();

    const estilo = {
      id: documentoEstilo.id,
      ...documentoEstilo.data()

}

  }
}