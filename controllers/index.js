import { connect } from "../config/db.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const datos = req.body;
  console.log(datos)
  const BD = await connect();
  try {
    let query = `select * from usuarios where usuario = ?`;
    const usuario = await BD.query(query, [datos.usuario]);

    let usuariosDB= JSON.parse(JSON.stringify(usuario[0]));
    console.log('Usuario: ',usuariosDB[0])
    if(usuariosDB[0] !== undefined){
        if (datos.clave === usuariosDB[0].clave){
            console.log('Pass Iguales')
            const token = jwt.sign({id: usuariosDB[0].id}, "process.env.SEED_TOKEN",{
                expiresIn: '86400'
            })
            try {
                let query = "UPDATE usuarios set token = ? WHERE id = ?"
                await BD.query(query, [
                    token,
                    usuariosDB[0].id,
                ]);
                return res.json({token, user_id: usuariosDB[0].id, nombre: usuariosDB[0].nombre});
            
            } catch {
                return res
                    .status(404)
                    .send({ error: "Ocurrió un error" });
            }
        } else {
            return res
                    .status(400)
                    .send({ message: "Empresa o contraseña incorrecta" });
        }
    } else {
        return res
                    .status(400)
                    .send({ message: "Empresa o contraseña incorrecta" });
    }    

} catch (error) {
    return res.status(404).send({ message: "Ocurrió un error" });
  } finally {
    BD.end();
  }
};

const accionesUsuario = async (req, res) => {
  //console.log(req.params);
  let { id } = req.params;
  const BD = await connect();
  try {
    let query = `select * from accionesusuarios where id = ?`;
    const accion = await BD.query(query, [id]);
    //console.log(acciones)
    return res.json(accion[0]);
  } catch (error) {
    return res.status(404).send({ error: "Ocurrió un error" });
  } finally {
    BD.end();
  }
};

const agregarAccion = async (req, res) => {
  console.log(req.body);
  const BD = await connect();
  try {
    const query = `INSERT INTO accionesusuarios SET ?`;
    const accion = {
      id_usuario: req.body.arr.id_usuario,
      simbolo: req.body.arr.simbolo,
      nombre: req.body.arr.nombre,
      moneda: req.body.arr.moneda,
    };
    await BD.query(query, [accion]);
    return res.send("Acción Agregada!");
  } catch (error) {
    return res.status(404).send({ error: "Ocurrió un error" });
  } finally {
    BD.end();
  }
};

const borrarAccion = async (req, res) => {
  let { id } = req.params;
  const BD = await connect();
  try {
    const sql = `Delete from accionesusuarios where id = ?`;
    await BD.query(sql, [id]);
    return res.send("Acción Eliminada!");
  } catch (error) {
    return res.status(404).send({ error: "Ocurrió un error" });
  } finally {
    BD.end();
  }
};

const listarAccionesUsuario = async (req, res) => {
  let { id } = req.params;
  const BD = await connect();
  try {
    let query = `select * from accionesusuarios where id_usuario = ?`;
    //console.log(query)
    const acciones = await BD.query(query, [id]);
    //console.log(acciones)
    return res.json(acciones[0]);
  } catch (error) {
    return res.status(404).send({ error: "Ocurrió un error" });
  } finally {
    BD.end();
  }
};

export {
  accionesUsuario,
  agregarAccion,
  borrarAccion,
  listarAccionesUsuario,
  login,
};
