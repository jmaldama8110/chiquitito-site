import React, { useContext, useState } from 'react';
import Autosuggest from 'react-autosuggest';



const misProductos = [
    { nombre_producto: "Panales", id: "100101" },
    { nombre_producto: "Telas", id: "20" },
    { nombre_producto: "Inserto absorvente", id: "30" },
    { nombre_producto: "Elastico por metro", id: "40" },
    { nombre_producto: "Wet bag", id: "50" }
]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : misProductos.filter(item =>
        item.nombre_producto.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => {
    return suggestion.nombre_producto;
}

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => (
    <div>
        {suggestion.nombre_producto}
    </div>
);



// Functional-based componente 
const BusquedaInput = () => {

    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const inputProps = {
        placeholder: '¿Que estás buscando?',
        value,
        onChange: (event, { newValue }) => {
            setValue(newValue)
            //textoLogica = !busquedaTexto || item.descripcion.toLowerCase().search( busquedaTexto.toLowerCase() ) != -1

        }
    };

    const fxElementoSeleccionado = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {

    
    }

    return (<Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
                onSuggestionsClearRequested={() => {
                    setSuggestions([])
                    // dispatchProductos({
                    //     type: 'POPULATE_CATALOGO',
                    //     catalogo: productos
                    // })
                } }
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={fxElementoSeleccionado}
                inputProps={inputProps}
            />
    );

}

export { BusquedaInput as default }