import React from 'react'

export default function Categories() {
  return (
    <div className="col-sm-12 col-md">
    <p className="listtag">BROWSE CATEGORIES</p>
    <ul className="list-group list-group-flush d-flex flex-row">
      <li className="list-group-item flex-fill">
        <a className="nav-link" href="/sofa">
          Sofas & Chairs
        </a>
      </li>
      <li className="list-group-item flex-fill">
        <a className="nav-link" href="/dinning">
          Dinning Room
        </a>
      </li>
      <li className="list-group-item flex-fill">
        <a className="nav-link" href="/outdoor">
          Out Door Room
        </a>
      </li>
      <li className="list-group-item flex-fill">
        <a className="nav-link" href="/livingroom">
          Room Living
        </a>
      </li>
      <li className="list-group-item flex-fill">
        <a className="nav-link" href="/estilo">
          Estilo
        </a>
      </li>
      <li className="list-group-item flex-fill">
        <a className="nav-link" href="/lamps">
          Lights & Lamps
        </a>
      </li>
    </ul>
  </div>
  )
}
