import React from 'react'
import { CFGraph, ICFGraphProps } from '../src'
import { withKnobs, text, object } from "@storybook/addon-knobs"
import { storiesOf } from '@storybook/react';
import { OperationBlock, ControlFlowGraph } from '@ethereum-react/types';
import { action } from '@storybook/addon-actions'
import { ControlFlowGraphCreator } from '../../utilities/src/cfg/ControlFlowGraphCreator';

storiesOf('CFG', module)
   .addDecorator(withKnobs)
   .add('default', () => {
      const bytecode = text('Bytecode', '')
      const trace = object('Trace', '')

      let flow: ControlFlowGraph

      try {
         flow = bytecode ? new ControlFlowGraphCreator().buildControlFlowGraphFromBytecode(
            bytecode
         ) : null
      } catch (error) {
         console.error('Error parsing bytecode:' + error)
      }

      const props: ICFGraphProps = {
         blocks: flow ? flow.contractRuntime.blocks : null,
         trace: trace as any,
         operationSelected: (op) => action('Operation selected')(op),
      }

      return <CFGraph {...props} />
   })

