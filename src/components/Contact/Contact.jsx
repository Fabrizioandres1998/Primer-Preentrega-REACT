import {useForm} from "react-hook-form"

const Contact = () => {

    const {register, handleSubmit} = useForm()
    const enviar = (data) => (
        console.log(data)
        )

    return (
        <>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit(enviar)}>
                <input type='text' placeholder='Ingresa tu nombre' {...register("nombre")}/>
                <input type='email' placeholder='Ingresa tu e-mail' {...register("email")}/>
                <input type='phone' placeholder='Ingresa tu telefono' {...register("telefono")}/>

                <button type='submit'> Enviar</button>
            </form>
        </>
    )
}

export default Contact
