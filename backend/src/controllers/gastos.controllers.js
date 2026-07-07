const Gasto = require('../models/gastos');

const gastosController = {};

gastosController.getGastos = async (req, res) => {
    const gastos = await Gasto.find();
    res.json(gastos);
};

gastosController.addGasto = async (req, res) => {
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.json({ status: 'datos ingresados correctamente' });
};

gastosController.getGasto = async (req, res) => {
    const gasto = await Gasto.findById(req.params.id);
    res.json(gasto);
};

gastosController.editGasto = async (req, res) => {
    const { id } = req.params;
    const gasto = {
        tipo: req.body.tipo,
        monto: req.body.monto,
        Descripcion: req.body.Descripcion
    };
    await Gasto.findByIdAndUpdate(id, { $set: gasto }, { new: true });
    res.json({ status: 'Gasto actualizado' });
};

gastosController.deleteGasto = async (req, res) => {
    await Gasto.findByIdAndDelete(req.params.id);
    res.json({ status: 'Gasto eliminado' });
};

module.exports = gastosController;