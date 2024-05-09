// About.test.js
import { render, screen } from '@testing-library/react';
import Aboutmeme, { Onas, Second, SimpleSlider } from './About';

// Тестирование компонента Aboutmeme
describe('Aboutmeme', () => {
  test('рендерит компоненты Onas, Second и SimpleSlider', () => {
    render(<Aboutmeme />);
    expect(screen.getByText(/О нас/i)).toBeInTheDocument();
    expect(screen.getByText(/Услуги астрологов/i)).toBeInTheDocument();
    expect(screen.getByText(/Отзывы наших клиентов/i)).toBeInTheDocument();
  });
});

// Тестирование компонента Onas
describe('Onas', () => {
  test('рендерит информацию о компании', () => {
    render(<Onas />);
    expect(screen.getByText(/Мы помогаем раскрыть тайны зодиака/i)).toBeInTheDocument();
  });
});

// Тестирование компонента Second
describe('Second', () => {
  test('рендерит список услуг и изображение', () => {
    render(<Second />);
    expect(screen.getByText(/Полный разбор натальной карты/i)).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', 'knigacard.webp');
  });
});

// Тестирование компонента SimpleSlider
describe('SimpleSlider', () => {
  test('рендерит слайдер с отзывами клиентов', () => {
    render(<SimpleSlider />);
    expect(screen.getByText(/Ксюша/i)).toBeInTheDocument();
    expect(screen.getByText(/Владимир/i)).toBeInTheDocument();
    // Проверка наличия всех отзывов и изображений клиентов
    const reviews = screen.getAllByText(/"Я обратилась к астрологу/i);
    expect(reviews.length).toBeGreaterThan(0);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
});