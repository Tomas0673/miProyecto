import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContactoItem {
  icono: string;
  label: string;
  valor: string;
  sub: string;
  link?: string;
}

export interface HorarioItem {
  dia: string;
  tiempo: string;
  cerrado?: boolean;
}

@Component({
  selector: 'app-contacto',
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto{

  contactos: ContactoItem[] = [
    {
      icono: 'ti-phone',
      label: 'Teléfono',
      valor: '+54 9 299 400-0000',
      sub: 'Lunes a viernes, 9 a 18 h',
      link: 'tel:+5492994000000',
    },
    {
      icono: 'ti-mail',
      label: 'Email',
      valor: 'contacto@empresa.com',
      sub: 'Respondemos en menos de 24 h',
      link: 'mailto:contacto@empresa.com',
    },
    {
      icono: 'ti-map-pin',
      label: 'Dirección',
      valor: 'Av. San Martín 1250',
      sub: 'Cipolletti, Río Negro',
    },
    {
      icono: 'ti-brand-whatsapp',
      label: 'WhatsApp',
      valor: 'Escribinos por WhatsApp',
      sub: 'Respuesta inmediata',
      link: 'https://wa.me/5492994000000',
    },
  ];

  horarios: HorarioItem[] = [
    { dia: 'Lunes a viernes', tiempo: '9:00 – 18:00' },
    { dia: 'Sábados',         tiempo: '9:00 – 13:00' },
    { dia: 'Domingos y feriados', tiempo: 'Cerrado', cerrado: true },
  ];
}