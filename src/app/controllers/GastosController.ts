import { Request, Response, Router } from 'express';
import GastosRepository from '../repositories/GastosRepository';

const gastoRouter = Router();

// Rota para obter todos os gastos
gastoRouter.get('/', async (req: Request, res: Response) => {
  try {
    const gastos = await GastosRepository.getGastos();
    return res.status(200).json(gastos);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter os gastos.' });
  }
});

// Rota para obter um gasto por ID
gastoRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const gasto = await GastosRepository.getGastoById(Number(id));
    if (!gasto) {
      return res.status(404).json({ message: 'Gasto não encontrado.' });
    }
    return res.status(200).json(gasto);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter o gasto.' });
  }
});

// Rota para criar um novo gasto
gastoRouter.post('/', async (req: Request, res: Response) => {
  try {
    const novoGasto = await GastosRepository.createGastos(req.body);
    return res.status(201).json(novoGasto);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar o gasto.' });
  }
});

// Rota para atualizar um gasto existente
gastoRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const gastoAtualizado = await GastosRepository.updateGastos(Number(id), req.body);
    if (!gastoAtualizado) {
      return res.status(404).json({ message: 'Gasto não encontrado.' });
    }
    return res.status(200).json(gastoAtualizado);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar o gasto.' });
  }
});

// Rota para excluir um gasto
gastoRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const resultado = await GastosRepository.deleteGastos(Number(id));
    if (!resultado) {
      return res.status(404).json({ message: 'Gasto não encontrado.' });
    }
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir o gasto.' });
  }
});

export default gastoRouter;
