import React from 'react'

const Search = () => {
    return (
        <>
            <div>
                <h1>Busca ofertas en autos economicos, de lujo y deportivos</h1>
            </div>
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder='¿Que tipo de auto le gustaria?'
                    />
                    <input 
                        type="text"
                        placeholder='Check In - Check Out'
                    />
                    <button>
                        Buscar
                    </button>
                </form>
            </div>
        </>
    )
}

export default Search