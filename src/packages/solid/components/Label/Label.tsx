import { type Component } from 'solid-js';
import { Text } from '@lightningjs/solid';
import { withPadding } from '@lightningjs/solid-primitives';
import type { UIComponentProps } from '../../types/interfaces.js';
import styles, { type LabelStyleProperties } from './Label.styles.js';
withPadding;

export interface LabelProps extends UIComponentProps {
  /**
   * text to display in label
   */
  title: string;

  padding?: LabelStyleProperties['padding'];

  style?: Partial<LabelStyles>;

  tone?: Tone;
}

const Label: Component<LabelProps> = props => {
  return (
    <node
      use:withPadding={
        props.padding ??
        styles.Container.tones[props.tone ?? styles.tone]?.padding ??
        styles.Container.base.padding
      }
      {...props}
      style={[
        props.style, //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        style={[
          styles.Text.tones[props.tone || styles.tone], //
          styles.Text.base
        ]}
      >
        {props.title}
      </Text>
    </node>
  );
};

export default Label;
