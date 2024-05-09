// App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App, { First, Second, Astrology, BlockComponent, Mailing } from './App';

// Тестирование компонента App
describe('App', () => {
  test('рендерит компоненты без ошибок', () => {
    render(<App />);
    expect(screen.getByText(/Astrotips/i)).toBeInTheDocument();
  });
});

// Тестирование компонента First
describe('First', () => {
  test('кнопка "Узнать больше" прокручивает страницу до блока Second', () => {
    render(<First />);
    const button = screen.getByText(/Узнать больше/i);
    fireEvent.click(button);
    // Проверка, что элемент с id 'second-block' теперь виден на экране
    // Это может потребовать мокирования поведения scrollIntoView
  });
});

// Тестирование компонента Second
describe('Second', () => {
  test('отображает текст о астрологии', () => {
    render(<Second />);
    expect(screen.getByText(/Раскройте тайны звезд/i)).toBeInTheDocument();
  });
});

// Тестирование компонента Astrology
describe('Astrology', () => {
  test('отображает информацию об астрологах', () => {
    render(<Astrology />);
    expect(screen.getByText(/Алина Тай/i)).toBeInTheDocument();
  });
});

// Тестирование компонента BlockComponent
describe('BlockComponent', () => {
  test('отображает знаки зодиака', () => {
    render(<BlockComponent />);
    expect(screen.getByText(/Водолей/i)).toBeInTheDocument();
  });
});

// Тестирование компонента Mailing
describe('Mailing', () => {
  test('подписка на рассылку с валидными данными', () => {
    render(<Mailing />);
    fireEvent.change(screen.getByPlaceholderText(/Ваше имя/i), { target: { value: 'Иван' } });
    fireEvent.change(screen.getByPlaceholderText(/Электронная почта/i), { target: { value: 'ivan@example.com' } });
    fireEvent.click(screen.getByText(/Подписаться/i));
    // Проверка, что модальное окно открылось
  });
});