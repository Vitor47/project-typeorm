import { Request, Response, Router } from 'express';
import CategoriaRepository from '../repositories/CategoriaRepository';

const categoriaRouter = Router();

// Rota para obter todas as categorias
categoriaRouter.get('/', async (req: Request, res: Response) => {
  try {
    const categorias = await CategoriaRepository.getCategorias();
    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter as categorias.' });
  }
});

// Rota para obter uma categoria por ID
categoriaRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const categoria = await CategoriaRepository.getCategoriaById(Number(id));
    if (!categoria) {
      return res.status(404).json({ message: 'Categoria não encontrada.' });
    }
    return res.status(200).json(categoria);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter a categoria.' });
  }
});

// Rota para criar uma nova categoria
categoriaRouter.post('/', async (req: Request, res: Response) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ message: 'É necessário fornecer o nome da categoria.' });
  }

  try {
    const novaCategoria = await CategoriaRepository.createCategoria(nome);
    return res.status(201).json(novaCategoria);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar a categoria.' });
  }
});

// Rota para atualizar uma categoria existente
categoriaRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ message: 'É necessário fornecer o nome da categoria.' });
  }

  try {
    const categoriaAtualizada = await CategoriaRepository.updateCategoria(Number(id), nome);
    if (!categoriaAtualizada) {
      return res.status(404).json({ message: 'Categoria não encontrada.' });
    }
    return res.status(200).json(categoriaAtualizada);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar a categoria.' });
  }
});

// Rota para excluir uma categoria
categoriaRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const resultado = await CategoriaRepository.deleteCategoria(Number(id));
    if (!resultado) {
      return res.status(404).json({ message: 'Categoria não encontrada.' });
    }
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir a categoria.' });
  }
});

export default categoriaRouter;
