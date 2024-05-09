// Blog.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Bloge from './Blog';

// Тестирование компонента Bloge
describe('Bloge', () => {
  test('рендерит заголовок и слайдер с видеозаписями', () => {
    render(<Bloge />);
    expect(screen.getByText(/Видеозаписи по астрологии/i)).toBeInTheDocument();
    expect(screen.getByClassName('slick-slider')).toBeInTheDocument();
  });

  test('проверка перехода по ссылкам при клике на кнопки', () => {
    render(<Bloge />);
    // Предполагаем, что функция window.location.href была переопределена
    // для тестирования, так как в Jest это не изменяемое свойство.
    const originalHref = window.location.href;

    // Переопределение window.location.href для тестирования
    delete window.location;
    window.location = { href: '' };

    // Клик по первой кнопке и проверка URL
    fireEvent.click(screen.getAllByText(/Смотреть на YouTube/i)[0]);
    expect(window.location.href).toBe('https://www.youtube.com/watch?v=bWfeGudpc9k');

    // Восстановление оригинального window.location.href после теста
    window.location.href = originalHref;
  });
});