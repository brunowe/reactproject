import React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import api from './services/api';

vi.mock('./services/api', () => ({ default: { get: vi.fn() } }));

afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
});

describe('consulta de repositorios', () => {
  it('lista o repositorio retornado pelo GitHub e limpa o campo', async () => {
    api.get.mockResolvedValue({ data: { full_name: 'brunowe/reactproject' } });
    render(<App />);
    const input = screen.getByPlaceholderText('adicionar repositorio');
    fireEvent.change(input, { target: { value: 'brunowe/reactproject' } });
    fireEvent.click(screen.getByRole('button'));

    expect(api.get).toHaveBeenCalledWith('/repos/brunowe/reactproject');
    expect(await screen.findByText('brunowe/reactproject')).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('desabilita o envio enquanto aguarda a resposta', async () => {
    let resolveRequest;
    api.get.mockReturnValue(
      new Promise((resolve) => {
        resolveRequest = resolve;
      })
    );
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('adicionar repositorio'), {
      target: { value: 'brunowe/reactproject' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toBeDisabled();
    await act(async () => {
      resolveRequest({ data: { full_name: 'brunowe/reactproject' } });
    });
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('preserva a rota de repositorio existente', () => {
    window.history.replaceState({}, '', '/repository');
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Repository' })
    ).toBeInTheDocument();
  });
});
