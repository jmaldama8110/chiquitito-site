import React, {useEffect, useRef, useState} from 'react';

const Paypal = ( { importe, onApproval })  => {

  const [approved, setApproved ] = useState(false);
  const [error, setError ] = useState('');
  const paypalRef = useRef();

  useEffect( () => {

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              { description: "CHIQUITITODETALLES",
                amount: {
                  currency_code: "MXN",
                  value: importe,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setApproved(true);
          console.log(order);
        },
        onError: (err) => {
           setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);

  }, []);

  if (approved) {
    onApproval(true); // la funcion transferida desde el FormPago para llamar la vista de confirmación de la operación
  }

  // If any error occurs
  if (error) {
    onApproval(false);
    return <div>Error al procesar el pago!</div>;
  }

 
  return (
    <div>
      <div ref={paypalRef} />
    </div>
  );
}
export { Paypal as default };