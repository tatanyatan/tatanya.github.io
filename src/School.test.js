// School.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Schoolcola, { InfoGroup, Sert, Podpiska } from './School';

// Тестирование компонента Schoolcola
describe('Schoolcola', () => {
  test('рендерит компоненты InfoGroup, Sert и Podpiska без ошибок', () => {
    render(<Schoolcola />);
    expect(screen.getByText(/Обучение/i)).toBeInTheDocument();
    expect(screen.getByText(/По окончанию курса вы получите сертификат/i)).toBeInTheDocument();
    expect(screen.getByText(/Оставьте заявку, мы с вами свяжемся!/i)).toBeInTheDocument();
  });
});

// Тестирование компонента InfoGroup
describe('InfoGroup', () => {
  test('отображает информацию об обучении', () => {
    render(<InfoGroup />);
    expect(screen.getByText(/Astrotips/i)).toBeInTheDocument();
  });
});

// Тестирование компонента Sert
describe('Sert', () => {
  test('отображает информацию о сертификате', () => {
    render(<Sert />);
    expect(screen.getByText(/По окончанию курса вы получите сертификат/i)).toBeInTheDocument();
  });
});



// Тестирование компонента Podpiska
describe('Podpiska', () => {
  test('отображает форму подписки и обрабатывает ввод данных', () => {
    render(<Podpiska />);
    fireEvent.change(screen.getByPlaceholderText(/Ваше имя/i), { target: { value: 'Иван' } });
    fireEvent.change(screen.getByPlaceholderText(/Электронная почта/i), { target: { value: 'ivan@example.com' } });
    fireEvent.click(screen.getByText(/Записаться/i));
    expect(screen.getByText(/Вы успешно заполнили форму!/i)).toBeInTheDocument();
  });
});


// Тестирование валидации имени и электронной почты
describe('Podpiska Form Validation', () => {
    test('кнопка "Записаться" неактивна, если имя или электронная почта невалидны', () => {
      render(<Podpiska />);
      const submitButton = screen.getByText(/Записаться/i);
      
      // Проверка кнопки при пустых полях ввода
      expect(submitButton).toBeDisabled();
      
      // Ввод невалидного имени и проверка кнопки
      fireEvent.change(screen.getByPlaceholderText(/Ваше имя/i), { target: { value: '' } });
      fireEvent.change(screen.getByPlaceholderText(/Электронная почта/i), { target: { value: 'ivan@example.com' } });
      expect(submitButton).toBeDisabled();
      
      // Ввод невалидной электронной почты и проверка кнопки
      fireEvent.change(screen.getByPlaceholderText(/Ваше имя/i), { target: { value: 'Иван' } });
      fireEvent.change(screen.getByPlaceholderText(/Электронная почта/i), { target: { value: 'ivanexample.com' } });
      expect(submitButton).toBeDisabled();
    });
  
    test('кнопка "Записаться" активна, когда имя и электронная почта валидны', () => {
      render(<Podpiska />);
      const submitButton = screen.getByText(/Записаться/i);
      
      // Ввод валидных данных
      fireEvent.change(screen.getByPlaceholderText(/Ваше имя/i), { target: { value: 'Иван' } });
      fireEvent.change(screen.getByPlaceholderText(/Электронная почта/i), { target: { value: 'ivan@example.com' } });
      expect(submitButton).not.toBeDisabled();
    });
  });
  
  // Тестирование поведения модального окна
  describe('Podpiska Modal Behavior', () => {
    test('модальное окно отображается после отправки валидной формы', () => {
      render(<Podpiska />);
      
      // Ввод валидных данных и отправка формы
      fireEvent.change(screen.getByPlaceholderText(/Ваше имя/i), { target: { value: 'Иван' } });
      fireEvent.change(screen.getByPlaceholderText(/Электронная почта/i), { target: { value: 'ivan@example.com' } });
      fireEvent.click(screen.getByText(/Записаться/i));
      
      // Проверка отображения модального окна
      expect(screen.getByText(/Вы успешно заполнили форму!/i)).toBeInTheDocument();
    });
  
    test('модальное окно закрывается при нажатии на крестик', () => {
      render(<Podpiska />);
      
      // Открытие модального окна
      fireEvent.change(screen.getByPlaceholderText(/Ваше имя/i), { target: { value: 'Иван' } });
      fireEvent.change(screen.getByPlaceholderText(/Электронная почта/i), { target: { value: 'ivan@example.com' } });
      fireEvent.click(screen.getByText(/Записаться/i));
      
      // Закрытие модального окна
      fireEvent.click(screen.getByText(/×/i));
      expect(screen.queryByText(/Вы успешно заполнили форму!/i)).not.toBeInTheDocument();
    });
  });