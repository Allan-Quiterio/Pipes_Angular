import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SettingsService } from './settings.service';

// Nas versões mais recentes do Angular, precisamos adicionar o ptBR no registerLocaleData
registerLocaleData(ptBR);

@NgModule({
  declarations: [AppComponent, ExemplosPipesComponent, CamelCasePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // Criando uma meio de injeção de dependência para dizer ao projeto que o padrão do projeto é pt-BR e não en-US
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },*/

    // Fazendo a mesma coisa porém através de um Service
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) =>
        settingsService.getLocale(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
