import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild("asSideBar") sidebar: ElementRef | any;

  active: boolean = true;

  menu_list = [
    { text: "Registrar Magistrado", url: "/administracion/registrar", icon_name: "upload" },
    { text: "Dar de baja Magistrado", url: "/administracion/darBaja", icon_name: "trash" },
    { text: "Editar Magistrado", url: "/administracion/editar", icon_name: "edit" },
    {
      text: "Editar Informacion general",
      url: "/administracion/edicion-general",
      icon_name: "pencil-alt",
    },
    {
      text: "Subir boletin",
      url: "/administracion/subir-boletin",
      icon_name: "upload",
    },
    {
      text: "Catalogos",
      url: "/files/friends",
      icon_name: "file",
    },
    {
      text: "Subir casos",
      url: "/files/friends",
      icon_name: "file",
    },
  ];

  user: any = {};

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {

    const { photo_location } = this.user;
    if (!photo_location) {
      this.user.photo_location =
        "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png";
    }
  }

  toogleMenu(): void {
    this.active = !this.active;
    const asSidebar = this.sidebar.nativeElement;

    if (this.active) {
      this.renderer2.removeClass(asSidebar, "menu-collapsed");
      this.renderer2.addClass(asSidebar, "menu-expanded");
    } else {
      this.renderer2.removeClass(asSidebar, "menu-expanded");
      this.renderer2.addClass(asSidebar, "menu-collapsed");
    }
  }

}
