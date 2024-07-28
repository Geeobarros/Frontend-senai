import { useForm } from "react-hook-form"


export default function UserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    };

    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastro de Usuários</h1>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text"
                id="name"
                {...register('name', { required: true })} />
                {errors.name && <span>Nome é obrigatório</span>}
            </div>

            <div>
                <label htmlFor="email">E-mail: </label>
                <input type="text"
                id="email"
                {...register('email', {required: true })} />
                {errors.email && <span>Email é obrigatório</span>}
            </div>

            <div>
                <label htmlFor="password">Senha: </label>
                <input type="text"
                id="password"
                {...register('password',  {required: true})} />
                {errors.password && <span>Senha é obrigatório</span>}
            </div>

            <button type="submit">Cadastrar</button>



        </form>
    )
}