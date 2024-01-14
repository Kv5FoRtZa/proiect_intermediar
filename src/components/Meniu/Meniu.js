import './meniu.css';
import './drop.css';
import { Link } from 'react-router-dom';

const Meniu = () => {
    return (
        <div>
             <div className = "meniu">
                    <div className="dropdown">
                        <div className="buttonc">Statistici</div>
                            <div className="dropdown-content"> 
                                <div className="button2">
                                    <Link to="/G1">
                                    Tramvaie
                                    </Link>
                                </div>
                                <div className="button2">
                                    <Link to="/G2">
                                        Autobuze
                                    </Link>
                                </div>
                                <div className="button2">
                                    <Link to="/G3">
                                        Pietoni
                                    </Link>
                                </div>
                                <div className="button2">
                                    <Link to="/G4">
                                        Masini
                                    </Link>
                                </div>
                        </div>
                </div>
                <div className="buttonc">
                    <Link to="/Harta">
                            Harta
                    </Link>
                </div>
                <div className="buttonc">
                    <Link to="/Calendar">
                        Calendar
                    </Link>
                </div>
                <div className="buttonc">
                    <Link to="/">
                        Acasa
                    </Link>
                </div>
            </div>
            <br></br>
        </div>
        
    )
}

export default Meniu