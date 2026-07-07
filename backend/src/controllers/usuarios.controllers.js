const usuariosControllers = {};

usuariosControllers.getUsuarios = async (req, res) => {
    res.send("Endpoint GET de usuarios habilitado");
};

usuariosControllers.addUsuario = async (req, res) => {
    console.log(req.body);
    res.send("Nuevo usuario registrado");
};

module.exports = usuariosControllers;
