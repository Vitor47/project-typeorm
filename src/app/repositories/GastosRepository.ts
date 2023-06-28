
import Gastos from '../entities/Gastos';
import IGastos from '../interfaces/IGastos';
import { AppDataSource } from '../../database/data-source';

const gastosRepository = AppDataSource.getRepository(Gastos);

const getGastos = (): Promise<IGastos[]> => {
    return gastosRepository.find();
}

export default { getGastos };