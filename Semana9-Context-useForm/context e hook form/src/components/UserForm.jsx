import { useForm } from "react-hook-form"


export default function UserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {    
        console.log(data);
    };

    return(
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre-se</h1>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text"
                id="name"
                {...register('name', { required: true})} />
                {errors.name && <span>Nome é obrigatório</span>}
                
            </div>

            <div>
                <label htmlFor="age">Idade:</label>
                <input type="number"
                id="age"
                {...register('age', {required: true,
                validate: value => value >= 18 || 'Você deve ter pelo menos 18 anos'
                })} />
                {errors.age && <span>{errors.age.message}</span>}
            </div>

            <div>
                <label htmlFor="email">E-mail: </label>
                <input type="email"
                id="email"
                {...register('email', {required: true })} />
                {errors.email && <span>Email é obrigatório</span>}
            </div>

            <div>
                <label htmlFor="password">Senha: </label>
                <input type="password"
                id="password"
                {...register('password',  {required: true})} />
                {errors.password && <span>Senha é obrigatório</span>}
            </div>

            <button type="submit">Cadastrar</button>



        </form>
    )
}