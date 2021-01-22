import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, Image, View, Document, Font, StyleSheet } from '@react-pdf/renderer';

const PDFCreador = ({ data }) => {


    // Font.register({
    //     family: 'Yusei Magic',
    //     src: 'fonts/Yusei_Magic/YuseiMagic-Regular.ttf'
    // });

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 18,
            textAlign: 'center',
//            fontFamily: 'Yusei Magic'
        },
        author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
        },
        subtitle: {
            fontSize: 12,
            margin: 8,
            marginLeft: 32,
//            fontFamily: 'Yusei Magic',
            lineHeight: 0.5,
            fontWeight: 100
        },
        text: {
            margin: 8,
            marginLeft: 32,
            fontSize: 12,
            textAlign: 'left',
//            fontFamily: 'Yusei Magic',
            lineHeight: 0.1,
        },
        image: {
            height: 50,
            width: 50,
            marginVertical: 15,
            marginHorizontal: 300,
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        },
    });


    return (
        <div className='pdfviewer'>
            <PDFViewer width={'100%'} height={'100%'}>
                <Document>
                    <Page size="LETTER" style={styles.page}>

                        <Image style={styles.image} src='/favicon.png' />
                        <Text style={styles.title}>Orden No: {data.pedidoIdShort}</Text>
                        <Text style={styles.header}>ChiquititoDetalles</Text>
                        <Text style={styles.subtitle}>Para: {data.nombres}</Text>
                        <Text style={styles.subtitle}>Numero contacto: {data.numero_celular}</Text>
                        <Text style={styles.subtitle}>Medio de pago: {data.metodopago}</Text>
                        <Text style={styles.subtitle}>Cuenta / Tarjeta: {data.cuentaTDD}</Text>
                        <Text style={styles.subtitle}>Importe: ${data.totalMasEnvio} pesos MXN</Text>
                        <Text style={styles.subtitle}>Costo envio: ${data.precioEnvio} pesos MXN</Text>
                        <Text style={styles.subtitle}>Pago esperado antes del: {data.diaPago}</Text>
                        <Text style={styles.subtitle}>Envio por: {data.envioPor}</Text>
                        <Text style={[styles.text, { textAlign: 'center' }]}
                        >---------------------------------------- Lista de Articulos -------------------------------------</Text>
                        {data.pedidoItems
                            .map(i => <Text style={styles.text}>{`- ${i.nombre_producto} - ${i.imagen_titulo}(${i.unidad}) / ${i.cantidad} * ${i.precio} = ${i.subtotal}`}</Text>)}

                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
}

export { PDFCreador as default };