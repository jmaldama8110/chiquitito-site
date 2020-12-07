import React, { useReducer, useRef } from 'react';

function ShoppingList() {
    const inputRef = useRef();
    const searchRef = useRef();

    const original = [
        { name: "aa", id: "1" },
        { name: "ab", id: "2" },
        { name: "b", id: "3" },
        { name: "b", id: "4" },
        { name: "c", id: "5" },
        { name: "c", id: "6" },
        { name: "c", id: "7" },
        { name: "d", id: "8" },
        { name: "d", id: "9" },
        { name: "d", id: "10" },
        { name: "e", id: "11" },
        { name: "e", id: "12" }

    ]

    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [
                    ...state,
                    {
                        id: state.length,
                        name: action.name
                    }
                ];
            case 'remove':
                // keep every item except the one we want to remove
                return state.filter((_, index) => index != action.index);

            case 'populate':
                return action.items;

            default:
                return state;
        }
    }, []);


    const getVisibleItems = (array, text) => {
        return array.filter((i) => {
            //textoLogica = !busquedaTexto || item.descripcion.toLowerCase().search( busquedaTexto.toLowerCase() ) != -1
            const textLogic = !text || i.name.toLowerCase().search(text.toLowerCase()) != -1
            return textLogic;
        })

    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: 'add',
            name: inputRef.current.value
        });
        inputRef.current.value = '';
    }

    function handleFilter(e) {
        e.preventDefault();
        
        const entrada = searchRef.current.value.trim();

        if( entrada ){
            dispatch({
                type: 'populate',
                items: getVisibleItems(items,searchRef.current.value)
            });
    
        } else {
            dispatch({
                type: 'populate',
                items: original
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} placeholder='Ingresa un nombre aqui...' />
            </form>
                <input ref={searchRef} placeholder='filtra por...' onChange={handleFilter}/>

            <button
                onClick={
                    () => dispatch({
                        type: 'populate',
                        items: getVisibleItems(original)
                    })
                }
            >Restaurar
            </button>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        {item.name}
                        <button
                            onClick={() => dispatch({ type: 'remove', index })}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export { ShoppingList as default };  