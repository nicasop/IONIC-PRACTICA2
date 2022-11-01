import { Component } from '@angular/core';
import { AlertController,ActionSheetController } from '@ionic/angular';
import { Product } from './../../interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController,private actionSheetCtrl: ActionSheetController) {}

  
  data: Product[] = [
    {
      name:"Queso mozzarella Salinerito 500g",
      img:"../../assets/mozarella.png",
      alt:"imagen de queso mozarella",
      modal:"open-modal",
      details: "Queso de pasta hilada, semiblanda, elástica, aromática, se funde bien en el horno. Ideal para Pizza, lasagna, bolón de queso, empanadas de queso, acompañar en ensaladas."
    },
    {
      name:"Leche entera Salinerito 1lt",
      img:"../../assets/lecheEntera.jpeg",
      alt:"imagen de leche entera",
      modal:"open-modal1",
      details: "Leche entera pasteurizada, proviene de pequeños ganaderos con prácticas de libre pastoreo y ordeño manual"
    },
    {
      name:"Mix chocolate surtido Salinerito 150g",
      img:"../../assets/chocolates_surtidos.jpeg",
      alt:"imagen de bombones de chocolate",
      modal:"open-modal2",
      details: "Bombones de chocolate surtido, vienen variedades de chocolate tales como frey natural, trufas de nogal y frey de whisky"
    },
    {
      name:"Turron macadamia Salinerito 100g",
      img:"../../assets/turron.jpeg",
      alt:"imagen de turron macadamia",
      modal:"open-modal3",
      details: "Sin descripción"
    },
    {
      name:"Turron macadamia Salinerito 30g",
      img:"../../assets/turron_30.jpeg",
      alt:"imagen de turron macadamia",
      modal:"open-modal4",
      details: "Masa dulce obtenida por la cocción de miel a la que se incorpora nuez de macadamia"
    },
    {
      name:"Choco grageas almendras Salinerito 200g",
      img:"../../assets/grajeas.jpeg",
      alt:"imagen de chocolate con grajeas",
      modal:"open-modal5",
      details: "Sin Descripción"
    },
    {
      name:"Yogurt griego Salinerito natural 500g",
      img:"../../assets/griego.jpeg",
      alt:"imagen de yogurt griego",
      modal:"open-modal6",
      details: "Los beneficios de consumir este producto:"+
      "• Mejora la digestión gracias a los microorganismos que forman parte de su composición."+
      "• Tiene una buena fuente de calcio, probióticos y vitaminas B1, B2, B3, B6, B9 y B12."+
      "• Es una excelente fuente de proteínas de alta calidad (6 gramos de proteína en una porción de 100 gramos)."+
      "• Ayuda al control de peso, debido a que es elaborado con leche descremada al 100%."+
      "Su almacenamiento es en refrigeración de 4-6°C."
    },
    {
      name:"Miel de abeja cacha 600g",
      img:"../../assets/miel.png",
      alt:"imagen de mial",
      modal:"open-modal7",
      details: "MIEL DE ABEJAS 100% NATURAL"+
      "BENIFICIOS: AMIGDALITIS, PRESIÓN ARTERAL, GRIPE, DIGESTIÓN, PROBLEMAS DE HIGADO Y RIÑONES, DIETAS, MEJORA EL RENDIMIENTO FÍSICO EN DEPORTISTAS ETC."
    },
    {
      name:"Avena hojuela Camari 500g",
      img:"../../assets/avena.jpeg",
      alt:"imagen de una funda de avena",
      modal:"open-modal8",
      details: "Sin Descripción"
    },
    {
      name:"Jamon pierna cocida Salinerito 200g",
      img:"../../assets/jamon.jpeg",
      alt:"imagen de un camión",
      modal:"open-modal9",
      details: "Elaborado con pierna de cerdo, cocido, moldeado y prensado. Producto listo para consumir en sánduches fríos o calientes, bocaditos, pizzas, arroz relleno, picaditas."
    },
  ]
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Information',
      message: 'This is an alert!',
      buttons: ['OK','Cancel'],
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Favorite',
          data: {
            action: 'favorite',
          },
        },
      ],
    });

    await actionSheet.present();

  }
}