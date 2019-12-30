import React from 'react'
import { CFGraph, ICFGraphProps } from '../src'
import { withKnobs, text, object } from "@storybook/addon-knobs"
import { ControlFlowGraphCreator } from '@ethereum-react-components/cfg';
import { storiesOf } from '@storybook/react';
import { OperationBlock } from '@ethereum-react-components/types';
import { action } from '@storybook/addon-actions'

storiesOf('CFG', module)
   .addDecorator(withKnobs)
   .add('default', () => {
      const bytecode = text('Bytecode', '')
      const trace = object('Trace', '')

      let flow

      try {
         flow = bytecode ? new ControlFlowGraphCreator().buildControlFlowGraphFromBytecode(
            bytecode
         ) : ''
      } catch (error) {
         console.error('Error parsing bytecode:' + error)
      }

      const props: ICFGraphProps = {
         blocks: flow ? flow.contractRuntime.blocks.values() as any as OperationBlock[] : [],
         trace: trace as any,
         operationSelected: (op) => action('Operation selected')(op),
      }

      return <CFGraph {...props} />
   })

