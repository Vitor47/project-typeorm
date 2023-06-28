import ICategorias from '../interfaces/ICategorias';
import Categorias from '../entities/Categorias';
import { AppDataSource } from '../../database/data-source';

const cateogoriaRepository = AppDataSource.getRepository(Categorias);

const getCategorias = (): Promise<ICategorias[]> => {
    return cateogoriaRepository.find();
}

export default { getCategorias };