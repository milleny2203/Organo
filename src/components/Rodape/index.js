import './Rodape.css'

const Rodape = () => {
    return(<footer className='rodape'>
        <section>
            <ul>
                <li>
                    <a href='www.linkedin.com/in/milleny-stefany-noal-dos-santos-487680174' target='_blank'>
                        <img src="/images/linkedin.png" alt="" />
                    </a>
                </li>    
                <li>
                    <a href='https://instagram.com/miih.noal?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'>
                        <img src="/images/instagram.png" alt="" />
                    </a>
                </li>  
                <li>
                    <a href='https://web.whatsapp.com/' target='_blank'>
                        <img src="/images/whatsapp.png" alt="" />
                    </a>
                </li> 
                
            </ul>
        </section>

        <section>
            <h3>Desenvolvido por Milleny Noal</h3>
        </section>
    </footer>

    )
}

export default Rodape