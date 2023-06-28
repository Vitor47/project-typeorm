import ICategorias from '../interfaces/ICategorias';
import Categorias from '../entities/Categorias';
import { AppDataSource } from '../../database/data-source';

const categoriaRepository = AppDataSource.getRepository(Categorias);

const getCategorias = (): Promise<ICategorias[]> => {
    return categoriaRepository.find();
}

const getCategoriaById = (id: number): Promise<ICategorias | null> => {
    return categoriaRepository.findOneBy({id: id})
}

const createCategoria = (nome: string): Promise<ICategorias> => {
    const novaCategoria = categoriaRepository.create({ nome });
    return categoriaRepository.save(novaCategoria);
}

const updateCategoria = (id: number, nome: string): Promise<ICategorias | null> => {
    return categoriaRepository.findOneBy({id: id})
        .then(categoria => {
            if (!categoria) return null;
            categoria.nome = nome;
            return categoriaRepository.save(categoria);
        });
}

const deleteCategoria = (id: number): Promise<boolean> => {
    return categoriaRepository.delete(id)
        .then(result => result.affected !== undefined && result.affected != null);
}

export default {
    getCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria
};
