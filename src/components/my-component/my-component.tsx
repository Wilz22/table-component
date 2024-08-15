import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format( this.last);
  }

  render() {
    return <div>Hola, {this.getText()}</div>;
  }
}
