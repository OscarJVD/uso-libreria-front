"use client";
// import { Prueba, Responsive, Button } from 'mi-libreria-con-todo';
import {
  ResponsiveButton,
  Button,
  RadioCardOption,
} from "mi-libreria-con-todo";

const Prueba = () => {
  return (
    <div>
      {/* <Prueba /> */}
      <Button intent="primary">Hola este es mi botónaa</Button>
      <ResponsiveButton className="bg-primary-20" />
      <RadioCardOption
        withBigRadio={true}
        className="gap-5"
        option={{
          id: 2,
          option: (
            <>
              <div className="w-16">hola</div>
            </>
          ),
        }}
        selectedOptionId={1}
        handleOptionClick={() => console.log("dfkgh")}
      />
      {/* <List title="Beneficio 1" description="Tasa fija según el monto de inversión" /> */}
    </div>
  );
};

export default Prueba;
