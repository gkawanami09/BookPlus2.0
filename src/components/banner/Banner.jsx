import css from './Banner.module.css'
import Button from "../button/Button.jsx";

export default function Banner(){
    return(
        <div className={css.fundoBanner + " d-flex align-items-center"}>
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center">
                        <div>
                            <span className={css.destaque + ' text-light fw-bold d-inline-block rounded-5'}>CURADORIA EXCLUSIVA</span>
                            <h1 className={css.bannerH1}><span className='d-block'>Descubra seu</span> <span className={css.colorGradiente + ' d-block'}>próximo capítulo.</span></h1>
                            <p><span className='d-block'>Mergulhe em histórias que transformam. Explore</span> nossa seleção premium de obras clássicas e <span className='d-block'>contemporâneas.</span></p>
                            <div className="row">
                                <div className='col-sm-12 d-sm-flex d-block mt-4 gap-4'>
                                    <Button texto={'EXPLORAR CATÁLOGO'} tipo={'cheio'}/>
                                    <Button texto={'VER PROMOÇÕES'} tipo={'vazio'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}