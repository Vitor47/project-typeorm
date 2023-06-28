import Gastos from "../entities/Gastos";
import IGastos from "../interfaces/IGastos";
import { AppDataSource } from "../../database/data-source";

const gastosRepository = AppDataSource.getRepository(Gastos);

const getGastos = (): Promise<IGastos[]> => {
  return gastosRepository.find();
};

const createGastos = async (novoGasto: IGastos): Promise<IGastos> => {
  const gasto = gastosRepository.create(novoGasto);
  return gastosRepository.save(gasto);
};

const getGastoById = (id: number): Promise<IGastos | null> => {
  return gastosRepository.findOneBy({ id: id });
};

const updateGastos = async (
    id: number,
    updatedData: Partial<IGastos>
  ): Promise<IGastos | null> => {
    const gasto = await gastosRepository.findOneBy({id: id});
    if (gasto) {
      Object.assign(gasto, updatedData);
      return gastosRepository.save(gasto);
    }
    return null;
  };

const deleteGastos = async (id: number): Promise<boolean> => {
  const gasto = await gastosRepository.findOneBy({ id: id });
  if (gasto) {
    await gastosRepository.remove(gasto);
    return true;
  }
  return false;
};

export default {
  getGastos,
  createGastos,
  getGastoById,
  updateGastos,
  deleteGastos,
};
