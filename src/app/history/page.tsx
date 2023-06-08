'use client';
import changes from '../homes/page'


const HistoryPage: React.FC = () => {
    return (
      <div>
        <h1>Historial de Cambios</h1>
        <ul>
          {changes.map((change) => (
            <li key=  {change.id}>
              <div>
                <strong>Tipo:</strong> {change.type}
              </div>
              <div>
                <strong>Descripción:</strong> {change.description}
              </div>
              <div>
                <strong>Fecha:</strong> {change.date.toString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  