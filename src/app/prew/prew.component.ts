import { Component } from '@angular/core';

@Component({
  selector: 'app-prew',
  templateUrl: './prew.component.html',
  styleUrl: './prew.component.css'
})
export class PrewComponent {
  currentTab: number;
  tabs: {id: number; name: string}[] =
      [
        {id: 1, name: 'История бренда'},
        {id: 2, name: 'Товарный знак'},
        {id: 3, name: 'Команда'},
        {id: 4, name: 'Миссия'},
        {id: 5, name: 'Фабрика мрамора'},
        {id: 6, name: 'Галерея мрамора'},
        {id: 7, name: 'Продукция'},
        {id: 8, name: 'Сырьё для мраморной фабрики'},
        {id: 9, name: 'Стоимость изделий'},
        {id: 10, name: 'Авторские права'},
        {id: 11, name: 'Сертификаты качества'},
        {id: 12, name: 'Патенты'},
        {id: 13, name: 'Договор на приобретение'},
        {id: 14, name: 'Гарантийные обязательства'},
        {id: 15, name: 'Выгода приобретения'},
        {id: 16, name: 'Услуги'},
        {id: 17, name: 'Проектирование и модернизация'},
        {id: 18, name: 'Подбор камня'},
        {id: 19, name: 'Изготовление изделий'},
        {id: 20, name: 'Логистика'},
        {id: 21, name: 'Монтаж'},
        {id: 22, name: 'Сотрудничество'},
        {id: 23, name: 'Франшиза'},
        {id: 24, name: 'Инвестиции в проект'},
        {id: 25, name: 'Экскурсия на завод'},
        {id: 26, name: 'Благотворительность'},
        {id: 27, name: 'Пожертвование в проект'}
      ]

  setTab(tab: number) {
    this.currentTab = tab;
  }
}
