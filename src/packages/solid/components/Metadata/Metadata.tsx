/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { type Component } from 'solid-js';
import { View, Text, Show } from '@lightningjs/solid';
import type { NodeStyles } from '@lightningjs/solid';
import Details, { type DetailsProps } from './Details.jsx';
import styles, { type MetadataStyles } from './Metadata.styles.js';
import type { Tone } from '../../types.js';

export interface MetadataProps extends NodeStyles {
  /**
   * title text
   */
  title: string;
  /**
   * description text
   */
  description?: string;
  /**
   * Text, Badges, and Icons to be displayed below the title and description
   */
  details: DetailsProps;
  maxLines: number;

  style?: Partial<MetadataStyles>;

  tone?: Tone;
}

const Metadata: Component<MetadataProps> = (props: MetadataProps) => {
  return (
    <View
      {...props}
      style={[
        ...[props.style].flat(),
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        width={props.width}
        style={[
          props.style?.TitleText, //
          styles.TitleText.tones[props.tone || styles.tone],
          styles.TitleText.base
        ]}
      >
        {props.title}
      </Text>
      <Show when={props.description}>
        <Text
          width={props.width}
          style={[
            props.style?.DescriptionText,
            styles.DescriptionText.tones[props.tone || styles.tone],
            styles.DescriptionText.base
          ]}
        >
          {props.description}
        </Text>
      </Show>
      <Details width={props.width} {...props.details} tone={props.tone ?? styles.tone} />
    </View>
  );
};

export default Metadata;
