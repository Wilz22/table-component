import { Component, Prop, State, h, Element } from '@stencil/core';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';

@Component({
  tag: 'my-table',
  styleUrl: 'my-table.css',
  shadow: true,
})
export class MyTable {
  @Prop() apiUrl: string;
  @State() data: any[] = [];
  @State() error: string = '';
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.fetchData();
  }

  componentDidLoad() {
    this.initializeDataTable();
  }

  componentDidUpdate() {
    this.initializeDataTable();
  }

  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
      }
      const result = await response.json();
      this.data = Array.isArray(result) ? result : [result];
    } catch (error) {
      this.error = error.message;
    }
  }

  initializeDataTable() {
    const table = this.el.shadowRoot.querySelector('table');
    if (table) {
      $(table).DataTable();
    }
  }

  render() {
    if (this.error) {
      return <div class="error-message">{this.error}</div>;
    }

    if (this.data.length === 0) {
      return <div>Cargando datos...</div>;
    }

    const headers = Object.keys(this.data[0]);

    return (
      <table class="table table-striped">
        <thead>
          <tr>
            {headers.map(header => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.data.map(item => (
            <tr>
              {headers.map(header => (
                <td>{typeof item[header] === 'object' ? JSON.stringify(item[header]) : item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
