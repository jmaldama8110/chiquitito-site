import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();


export { db as default } ;

    // db.ref('articulos').on('child_changed', (snap) => {
    //   console.log( snap.key, snap.val() );
    // })

    // db.ref('articulos').on('child_removed', (snap)=>{
    //   console.log( snap.key, snap.val() );
    // })

    // db.ref('articulos').on('child_added', (snap)=>{
    //   console.log( snap.key, snap.val() );
    // })


/* Obtiene datos de Firebase y convierte a un array */
// const onDataChanges = db.ref('articulos').on('value', (snap)=>{
//         const data = snap.val();

//         const articulos = [];

//         snap.forEach( (child) => {
//           articulos.push({
//             id: child.key,
//             ...child.val()
//           });
//         });

//         console.log(articulos);        
// })

// db.ref('articulos')
//   .once('value')
//   .then((snapshot) => {
//     const articulos = [];

//     snapshot.forEach((child) => {
//       articulos.push({
//         id: child.key,
//         ...child.val()
//       });
//     });
//     console.log(articulos);
//   });

//////// agrega elementos con un ID automatico a firebase/////////
  // const val = db.ref('articulos').push({
  //         titulo: 'Mesa de trabajo',
  //         precio: 124.5,
  //         nota: 'mesa con las siguientes dimensiones: alto, ancho, espesor de madera de pino, plancha de triplay'
  // });



// db.ref('pedidos').set({
//   name: "jose manuel gomez",
//   edad: 20,
//   isMayorEdad: true,
//   fechaNac: '982398u3232',
//   empleo: {
//     titulo: 'Desarrollador',
//     empresa: 'Infotec'
//   },
//   objeto: {
//     latitud: '10',
//     longitud: '29'
//   }
// });

// // db.ref('objeto')
// //   .remove()
//     .then(  () => {
//       console.log('se borro exitosamente');
//   }).catch( (e) => {
//         console.log('no se pudo borrar', e);
//   });

// db.ref().update({
//   edad: 16,
//   'objeto/latitud': '43434',
//   'empleo/empresa': 'Axen'

// }).then( ()=>{
//   console.log('exito actulizar');
// }).catch( (e)=>{
//   console.log('fallo la actualizacion',e);
// })

// db.ref('empleo/titulo').once('value').then( (snapshot) => {
//   console.log( snapshot.val() );
// }).catch( (e) => {
//   console.log('error when fetching data',e);
// })

// const onDataChanges = db.ref().on('value', (snapshot) => {
//     const dataObj = snapshot.val();
//     console.log( `${dataObj.name} is a ${dataObj.empleo.titulo }` )
// }, (e) => { 
//   console.log('error when fetching data',e);
// })

// const tiempoEspera = 3500;

// setTimeout(()=>{
//   db.ref('empleo/titulo').set('INGENIERO DE SOFTWARE')
// }, tiempoEspera )

// setTimeout(()=>{
//   db.ref('empleo/titulo').set('DATA SCIENTIST')
// }, tiempoEspera * 2 )

// setTimeout( ()=>{
//     db.ref().off('value', onDataChanges ) ;
// }, tiempoEspera * 3 )

// setTimeout(()=>{
//   db.ref('empleo/titulo').set('FRONT-END AND MOBILE DEVELOPER')
// }, tiempoEspera * 4 )
// setTimeout(()=>{
//   db.ref('empleo/titulo').set('INGENIERO DE SOFTWARE')
// },3500)


