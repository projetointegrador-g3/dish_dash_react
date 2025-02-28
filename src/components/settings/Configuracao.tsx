

function Configuracao(){
    return(
        <>
        <div className="flex flex-col gap-10 p-20">

            <div>
                <h1 className="text-3xl font-semibold mb-2">Configurações</h1>
                <p>Modo de Visualização:</p>

                <div className="flex gap-1 mt-5">
                    <input type="radio" />
                    <label className="mr-10" htmlFor=""> Modo Claro </label>
                    <input type="radio" />
                    <label htmlFor=""> Modo Escuro</label>
                </div>
            </div>
            
            <div>
                <h1 className="text-3xl font-semibold mb-2">Idioma</h1>
                
                <label>Selecione o idioma: </label>

                <select id="select-example" name="options">
                <option value="3">Português</option>
                <option value="1">Inglês</option>
                <option value="2">Espanhol</option>
                <option value="3">Japonês</option>
                
                </select>
            </div>            
        </div>
        </>
    )
}

export default Configuracao;