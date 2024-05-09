// Seans.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Astroseans, { Astroseans6 } from './Seans';

// Тестирование компонента Astroseans
describe('Astroseans', () => {
  test('рендерит компонент Astroseans6 без ошибок', () => {
    render(<Astroseans />);
    expect(screen.getByText(/Выберите услугу/i)).toBeInTheDocument();
  });
});

// Тестирование компонента Astroseans6
describe('Astroseans6', () => {
  test('отображает модальное окно при клике на кнопку записи', () => {
    render(<Astroseans6 />);
    fireEvent.click(screen.getByText(/Записаться на прием/i));
    expect(screen.getByText(/Подтверждение записи/i)).toBeInTheDocument();
  });

  test('закрывает модальное окно при клике на крестик', () => {
    render(<Astroseans6 />);
    fireEvent.click(screen.getByText(/Записаться на прием/i)); // Открыть модальное окно
    fireEvent.click(screen.getByText(/×/i)); // Закрыть модальное окно
    expect(screen.queryByText(/Подтверждение записи/i)).not.toBeInTheDocument();
  });

  test('валидация email работает корректно', () => {
    render(<Astroseans6 />);
    fireEvent.click(screen.getByText(/Записаться на прием/i));
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'некорректный email' } });
    fireEvent.click(screen.getByText(/Подтвердить запись/i));
    expect(screen.getByText(/Пожалуйста, введите корректный адрес электронной почты/i)).toBeInTheDocument();
  });

  test('отображает второе модальное окно после подтверждения записи', () => {
    render(<Astroseans6 />);
    fireEvent.click(screen.getByText(/Записаться на прием/i));
    fireEvent.change(screen.getByPlaceholderText(/Имя/i), { target: { value: 'Иван' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'ivan@example.com' } });
    fireEvent.click(screen.getByText(/Подтвердить запись/i));
    expect(screen.getByText(/Благодарим за запись на астрологический прием!/i)).toBeInTheDocument();
  });
});