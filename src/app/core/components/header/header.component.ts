import { Component, OnInit } from '@angular/core';
import { Etheme } from 'src/app/enums/Etheme.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  //Estou criando uma var icon e carregando com meu enum
  public icon: string = Etheme.ICON_MOON;
  public legendTheme: string = Etheme.ICON_THEMESUN;
  ngOnInit(): void {
  }

  //Aqui estou carregando a função com a troca de tema de acordo com o CSS!
  public toggle(){
   const theme = document.body.classList.toggle('dark-theme');
      
        if(theme){

          this.legendTheme = Etheme.ICON_THEMESUN;

          return (this.icon= Etheme.ICON_SUN)}  
          this.legendTheme = Etheme.ICON_THEMENIGHT
          return (this.icon= Etheme.ICON_MOON)}


        

            
            }
