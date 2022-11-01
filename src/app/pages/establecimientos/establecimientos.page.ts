import { Component, OnInit } from '@angular/core';
import { Establishment } from './../../../interfaces';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.page.html',
  styleUrls: ['./establecimientos.page.scss'],
})
export class EstablecimientosPage implements OnInit {

  data: Establishment[] = [
    {
      type: "Matriz",
      name: "Oficina Matriz",
      direction : "El Calvario y Samilagua, Salinas de Guaranda. Bolívar – Ecuador",
      img: "../../assets/matriz.jpg",
      alt: "imagen de la oficina matriz"
    },
    {
      type: "Sucursal",
      name: "Salinerito - La Floresta",
      direction : "Mallorca N24-290 y, Quito 170525",
      img: "../../assets/suc1.jpeg",
      alt: "imagen de la sucursal la floresta"
    },
    {
      type: "Sucursal",
      name: "Salinerito - Santa Clara",
      direction : "Oe2-38 Marchena y, Versalles, Quito 170520",
      img: "../../assets/suc2.webp",
      alt: "imagen de la sucursal Santa Clara"
    },
    {
      type: "Sucursal",
      name: "Tienda El Salinerito Cuenca - El Gañal",
      direction : "Bajos de Posada del ángel, Simón Bolívar, y, Cuenca 010111",
      img: "../../assets/suc3.jpeg",
      alt: "imagen de la oficina de Cuenca"
    },
    {
      type: "Sucursal",
      name: "Salinerito (Ambato)",
      direction : "Quis Quis, y, Ambato 180103",
      img: "../../assets/suc4.jpeg",
      alt: "imagen de la oficina de Ambato"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
