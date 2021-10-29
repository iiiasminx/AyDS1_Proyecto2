import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion-general',
  templateUrl: './edicion-general.component.html',
  styleUrls: ['./edicion-general.component.css']
})
export class EdicionGeneralComponent implements OnInit {
  title="Corte de Constitucionalidad de Guatemala"
  content=`Suspendisse at velit sit amet lacus egestas tempus varius a arcu.
    Quisque urna nibh, ornare eu leo ac, blandit eleifend nisl. Vestibulum sem tellus,
    consectetur finibus mi sit amet, scelerisque aliquet ipsum. In hac habitasse platea
    dictumst. Duis nec diam nec massa pellentesque sollicitudin. Sed dapibus neque ut
    libero feugiat dictum. Donec cursus turpis enim, quis accumsan felis porttitor et.
    Phasellus eget odio sapien. Vivamus ullamcorper tellus arcu, a posuere nulla
    condimentum ut. Cras sollicitudin varius urna nec laoreet. Mauris id vehicula
    urna. Integer ornare, lectus at eleifend pulvinar, augue urna suscipit enim,
    a auctor elit ipsum non turpis. Nulla fringilla posuere neque, id egestas diam
    mattis in. Cras aliquam pretium erat id pellentesque.`
  constructor() { }

  ngOnInit(): void {
  }

}
