//Search-Component (Lisa Albers)

import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'navigation-lisa',
  styleUrl: 'navigation-lisa.css',
  shadow: true
})
export class NavigationLisa {
    "onEvClick"?: (event: CustomEvent<any>) => void;  
    "onEvHover"?: (event: CustomEvent<any>) => void;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}