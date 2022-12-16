import * as React from 'react';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import {TextField} from '@mui/material'
import { useState } from 'react';
import {Button} from '@gear-js/ui';
import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { stringToHex } from "@polkadot/util";
import { GearApi } from '@gear-js/api';


function Home() {

  const [value, setValue] = useState(false)
  const connection = async () => {
  const res = await fetch('http://127.0.0.1:5000/button', 
    { method : "POST",
    headers : {'Content-Type': 'application/json'},
    body: JSON.stringify(value)})
    const data = await res.json()
  }

  const PushButton = function PushButton(){
    setValue(preValue => !preValue);
    connection()

    interaction()
  }

  const interaction = async function blockchain (){
    const extensions = await web3Enable('my cool dapp');
    if (extensions.length === 0) {
        return;
    }
    const allAccounts = await web3Accounts();
    const account = allAccounts[1];
    const injector = await web3FromSource(account.meta.source);
    const signRaw = injector?.signer?.signRaw;

    if (!!signRaw) {
        const { signature } = await signRaw({
            address: account.address,
            data: stringToHex('message to sign'),
            type: 'bytes'
        });
    }

  }

  // const call_smart_contract = async function call(){
    

  //   try {
  //     const message = {
  //       destination: "0x2a66d501c3d20b3b5cc52c73272ed0703517cdd0d2947116a911df8c26b8b8be", // programId
  //       payload: "somePayload",
  //       gasLimit: 10000000,
  //       value: 1000,
  //     };
  //     // In that case payload will be encoded using meta.handle_input type
  //     let extrinsic = GearApi.message.send(message, meta);
  //     // So if you want to use another type you can specify it
  //     extrinsic = GearApi.message.send(message, meta, meta.async_handle_input);
  //   } catch (error) {
  //     console.error(`${error.name}: ${error.message}`);
  //   }
  //   try {
  //     await extrinsic.signAndSend(keyring, (event) => {
  //       console.log(event.toHuman());
  //     });
  //   } catch (error) {
  //     console.error(`${error.name}: ${error.message}`);
  //   }
  // }

  const gear = async function connect() {
    const gearApi = await GearApi.create({
      providerAddress: 'wss://node-workshop.gear.rs',
    });
  
    const [chain, nodeName, nodeVersion] = await Promise.all([
      gearApi.chain(),
      gearApi.nodeName(),
      gearApi.nodeVersion(),
    ]);
  
    console.log(
      `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,
    );
  
    const unsub = await gearApi.gearEvents.subscribeToNewBlocks((header) => {
      console.log(
        `New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`,
      );
    });

    connect().catch(console.error);
  }

  gear()
  
  return (
    <>
    <h1>Escribe tu diario </h1>
    <Stack spacing={2}>
      <TextField label="Escribe aquí"/>
      <Button text="Enviar" onClick={PushButton} /> 
    </Stack>
    </>
  )
}

export { Home };
