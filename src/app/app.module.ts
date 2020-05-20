import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Reactovi forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//flex Layout 

import { FlexLayoutModule } from '@angular/flex-layout';

//AngularMaterial
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { environment } from 'src/environments/environment';
import { EdicaoEstiloComponent } from './edicao-estilo/edicao-estilo.component';
import { CadastroEstiloComponent } from './cadastro-estilo/cadastro-estilo.component';

@NgModule({
  declarations: [
    AppComponent,
    EdicaoEstiloComponent,
    CadastroEstiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatInputModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
