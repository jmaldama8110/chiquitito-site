import React from 'react';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [

    { name: "Pañal estilo bolsillo Modelo Chiqui 1" },
    { name: "Pañal estilo Bolsillo Modelo Chiqui 2" },
    { name: "Pañal estilo cubierta recien nacido" },
    { name: "Pañal estilo cubierta unitalla" },
    { name: "Pañal estilo bolsillo para adulto" },
    { name: "Pañal de natación unitalla" },
    { name: "Inserto de microfibra de 3 capas" },
    { name: "Inserto de velour de algodón y microfibra 4 capas" },
    { name: "Inserto de bambú terry y microfibra 4 capas" },
    { name: "Inserto de bambú cotton y microfibra 4 capas" },
    { name: "Liners de tela suede 10 piezas" },
    { name: "Toallitas limpia pompis 10 piezas" },
    { name: "Set de 5 sujetadores de pañal de tela" },
    { name: "Wet bag de 20 x 25 cm" },
    { name: "Wet bag de 30 x 40 cm" },
    { name: "Wet bag de 16 x 20 cm" },
    { name: "Toalla Pantiprotector  femenina" },
    { name: "Toalla femenina regular" },
    { name: "Toalla femenina nocturna" },
    { name: "Panty para menstruación e incontinencia" },
    { name: "Set de 3 toallas y wetbag" },

    { name: "Tela pul estampada diseños mexicanos" },
    { name: "Tela Pul estampados mix" },
    { name: "Tela pul estampada diseños de linea" },
    { name: "Tela pul colores lisos" },
    { name: "Tela pul color blanco" },
    { name: "Tela laminada " },
    { name: "Bambú charcoal" },
    { name: "Bambú terry" },
    { name: "Bambú cotton" },
    { name: "Microfibra blanca gramaje 350" },
    { name: "Microfibra azul gramaje 350" },
    { name: "Velour de algodón" },
    { name: "Elástico 7 ligas 7 mm " },
    { name: "Elástico 9 ligas 9 mm " },
    { name: "Bies elástico 1.5 cm" },
    { name: "Pinzas para tela" },
    { name: "Deshebrador" },
    { name: "Pinza para snaps" },
    { name: "Snaps T5" },
    { name: "Snaps corazón" },
    { name: "Caja con carretes para maquina casera" },
    { name: "Cutter circular de 45 mm con cuchillas de repuesto" },
    { name: "Cutter circulas de 28 mm con cuchillas de repuesto" },

    { name: "Chupón mordedera para alimentos" },
    { name: "Servipapilla" },
    { name: "Plato de silicón con separaciones estilo 1" },
    { name: "Plato de silicón con separaciones estilo 2" },
    { name: "kit de platos y cubiertos" },
    { name: "Taza de silicón para snaks" },
    { name: "Babero impermeable de PEVA con recipiente " },
    { name: "Babero de silicón" },
    { name: "Tapa de silicón para vaso entrenador" },
    { name: "Lunch box de fibra de trigo" },
    { name: "Cubiertos reutilizables de fibra de trigo" },
    { name: "bolsa resellable reutilizable" },
    { name: "Cargador de bebé multiposición" },
    { name: "Moldes para paletas de hielo" }

];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => {
    return suggestion.name;
}

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => (
    <div>
        {suggestion.name}
    </div>
);

export default class AutosuggestBusqueda extends React.Component {
    constructor() {
        super();
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: []
        };
    }
    componentDidMount() {
        /// cargar aqui el catalogo del localstorage
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };


    fxElementoSeleccionado(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {
    /// detonar aqui el elemento seleccionado y h
    }

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: '¿Que estás buscando?',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return (
            <div>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={this.fxElementoSeleccionado}
                inputProps={inputProps}
            />
        
            </div>
        );
    }
}