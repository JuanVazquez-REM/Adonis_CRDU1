'use strict'

const { supportsReturning } = require("@adonisjs/lucid/lib/util");

//const Persona = require("../../Models/Persona")
const Persona = use('App/Models/Persona')
const {validateAll} = use('Validator')

class PersonaController {
    
    //MOSTRAR
    async mostrar ({}){
        return await Persona.all();
    }

    //FIND
    async find_persona ({params}){
        return await Persona.find(params.id)
    }

    //INSERTAR
    async insertar ({request, response}){
        const input = request.all();

        const validation = await validateAll(input, {
            'nombre': 'required|min:3|max:60',
            'apellido': 'required|min:3|max:60',
            'genero': 'required|min:8|max:10',
            'edad': 'required',
            'telefono': 'required|unique:personas,telefono',
        });

        if(validation.fails()){
            return validation.messages()
        }
        await Persona.create(input)
        return response.json({
            message: "Registro insertado correctamente"
        })
    }

    //ACTUALIZAR
    async actualizar ({params,request, response}){
        const input = request.all();

        const validation = await validateAll(input, {
            'nombre': 'required|min:3|max:60',
            'apellido': 'required|min:3|max:60',
            'genero': 'required|min:8|max:10',
            'edad': 'required',
            'telefono': "required|unique:personas,telefono,id," + params.id,
        });

        if(validation.fails()){
            return validation.messages()
        }
        await Persona.query().where('id',params.id).update(input)
        return response.status(201).json({
            message: "Registro actualizado correctamente"
        })
    }
    
    //DELETE
    async borrar ({params, response}){
        const persona = await Persona.findOrFail(params.id)
        
        if(persona.delete()){
            return response.status(200).json({
                message: "Registro borrado correctamente"
            })
        }

        return response.status(404).json({
            message: "Registro no encontrado"
        })

        
    }


    
}

module.exports = PersonaController
