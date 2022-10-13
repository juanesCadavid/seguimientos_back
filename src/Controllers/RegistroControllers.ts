import { Request, Response } from "express";
import registro from '../dao/registro';
import notificarSeguimientoPorEmail from "../Logica/notificarSeguimientoPorEmail";

class RegistroControllers {

    public async registrar(req: Request, res: Response) {
        var datos = await registro.registrar(req.body)
        res.json(datos);
    }

    public async crearUsuario(req: Request, res: Response) {
        var datos = await registro.crearUsuario(req.body)
        res.json(datos);
    }

    public async listarDatosUsuarios(req: Request, res: Response) {
        const { usuario } = req.params;
        const datos = await registro.datosUsuario(usuario);
        res.json(datos);
    }

    public async listarDatosRegistro(req: Request, res: Response) {
        const datos = await registro.cargarRegistro();
        res.json(datos);
    }

    public async listarResponsableSeguimiento(req: Request, res: Response) {
        const {ID_PERFIL} = req.params;
        const datos = await registro.cargarResponsableSeguimiento(ID_PERFIL);
        res.json(datos);
    }

    public async cargarResponsableSeguimientoGest(req: Request, res: Response) {
        const datos = await registro.cargarResponsableSeguimientoGest();
        res.json(datos);
    }
    
    public async eliminarRegistro(req: Request, res: Response) {
        const { ID_REGISTRO } = req.params;
        const datos = await registro.eliminarRegistro(ID_REGISTRO);
        res.json(datos);
    }

    public async eliminarUsuario(req: Request, res: Response) {
        const { ID_REGISTRO } = req.params;
        const datos = await registro.eliminarUsuario(ID_REGISTRO);
        res.json(datos);
    }

    public async actualizarRegistro(req:Request,res:Response){
        const {ID_REGISTRO} = req.params;
        const datos = await registro.actualizarRegistro(req.body,ID_REGISTRO)
        res.json(datos)
    }
    public async CargarPerfil(req: Request, res: Response) {
        const { ID_REGISTRO } = req.params;
        const datos = await registro.cargarPerfil(ID_REGISTRO);
        res.json(datos);
    }

    public async resetearContraseña(req: Request, res: Response) {
        const datos = await registro.resetearContraseña(req.body);
        if(datos == 'Usuario o correo invalidos'){
            res.status(404).json({ text: "Usuario y/o correo invalido"});
        }else{
             notificarSeguimientoPorEmail.notificarSeguimiento(datos)
            res.json(datos);
        }
       
    }

    public async cambiarContrasena(req: Request, res: Response) {
        const {newDatos,USUARIO,Contrasena} = req.body;
        const datos = await registro.cambiarContrasena(newDatos,USUARIO,Contrasena);
        if(datos == 'Contraseña no valida' || datos == 'Usuario no valido'){
            res.status(404).json({ text: "Usuario y/o Contraseña incorrecto"});
        }else{
            res.json(datos);
        }     
    }

    public async buscarUsuario(req: Request, res: Response) {
        const { ID_REGISTRO } = req.params;
        const datos = await registro.buscarUsuario(ID_REGISTRO);
        res.json(datos);
    }


}


export const registroControllers = new RegistroControllers();