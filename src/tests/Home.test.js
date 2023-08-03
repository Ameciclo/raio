import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages/Home';

describe('Testando tela incial', () => {
  it('Deve renderizar corretamente os textos da Home', () => {
    render(<Home />);

    expect(screen.getByText('Olá, Mundo!!')).toBeInTheDocument();
    expect(screen.getByText('Voce acaba de conseguir rodar seu projeto base')).toBeInTheDocument();
    expect(screen.getByText('by @italosergio')).toBeInTheDocument();
  });
});