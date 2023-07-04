import React from "react";
import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';

const Footer = () =>{
    return(
        <Fragment >
             <div  className="fot" >
                    
                    <Row id="footer"  md={2}>
                        <Col className="col1">
                        <a href="https://www.instagram.com/"><li><img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png?resize=512%2C512&ssl=1" height="40" width="50" ></img></li></a>
                        <a href="https://www.facebook.com/"><li><img src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-bleu.png" height="40" width="50"></img></li></a>
                        <a href="https://web.whatsapp.com/"><li><img src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-mobile-software-icon-png-image_8704828.png"  height="40" width="50"></img></li></a>
                        </Col>
                            
                        <Col className="col2"><u>CONTACTANOS!</u><br></br>
                                usuariosListado@gmail.com  <br></br>
                                
                        </Col>
                    </Row>
                           
             </div>

        </Fragment>

    );
}


export default Footer;