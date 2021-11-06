import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from './components/chat/chat.component';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { NgModule } from '@angular/core';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: environment.wsUrl, options: {} };
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListaUsuariosComponent,
    LoginComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
