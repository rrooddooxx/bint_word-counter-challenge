import React from 'react';

const Foot = () => {
  return (
    <footer className="footer text-dark fixed-bottom bg-light mt-auto">
      <div className="container py-3">
        <div className="row">
          <div className="col-auto me-auto">
            Desarrollado por Sebastián Kravetz
            <a href="https://github.com/wwiiddeeweb">(@wwiiddeeweb)</a>
          </div>
          <div className="col-auto">
            Prueba técnica para Banco Internacional
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
