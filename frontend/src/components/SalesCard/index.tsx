import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'


function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-id">ID</th>
                            <th className="show-data">Data</th>
                            <th>Vendedor</th>
                            <th className="show-visitas">Visitas</th>
                            <th className="show-vendas">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show-id">#1</td>
                            <td className="show-data">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-visitas">100</td>
                            <td className="show-vendas">70</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-id">#2</td>
                            <td className="show-data">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-visitas">120</td>
                            <td className="show-vendas">65</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-id">#3</td>
                            <td className="show-data">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show-visitas">110</td>
                            <td className="show-vendas">50</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default SalesCard
