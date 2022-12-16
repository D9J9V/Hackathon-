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
