import './meniu.css';
import './drop.css';
import { Link } from 'react-router-dom';

const Meniu = () => {
    return (
        <div className = "meniu">
            <div class="dropdown">
                <div class="buttonc">Statistici</div>
                    <div class="dropdown-content"> 
                        <div class = "dropright">
                            <div class="button2">Autobuze
                                <div class="dropright-content">
                                    <div class="button2">
                                        <Link to="/G1">
                                            Grafic1
                                        </Link>
                                    </div>
                                    <div class="button2">
                                        <Link to="/G2">
                                            Grafic2
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class = "dropright">
                            <div class="button2">Tramvaie
                                <div class="dropright-content">
                                    <div class="button2">
                                        <Link to="/G3">
                                            Grafic3
                                        </Link>
                                    </div>
                                    <div class="button2">
                                        <Link to="/G4">
                                            Grafic4
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class = "dropright">
                            <div class="button2">Pietoni
                                <div class="dropright-content">
                                    <div class="button2">
                                        <Link to="/G7">
                                            Grafic7
                                        </Link>
                                    </div>
                                    <div class="button2">
                                        <Link to="/G8">
                                            Grafic8
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class = "dropright">
                            <div class="button2">Masini
                                <div class="dropright-content">
                                    <div class="button2">
                                        <Link to="/G9">
                                            Grafic9
                                        </Link>
                                    </div>
                                    <div class="button2">
                                        <Link to="/G10">
                                            Grafic10
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="buttonc">
                <Link to="/Harta">
                        Harta
                </Link>
            </div>
            <div class="buttonc">
                <Link to="/Calendar">
                    Calendar
                </Link>
            </div>
            <div class="buttonc">
                <Link to="/">
                    Acasa
                </Link>
            </div>
        </div>
    )
}

export default Meniu