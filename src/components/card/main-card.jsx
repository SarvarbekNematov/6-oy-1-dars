import Star from "/src/img_svg/star.svg"
import Earphone from "/src/img_svg/earphone.svg"
import Book from "/src/img_svg/book.svg"
import "./main.css"

export const MainCard  = ({img, title}) => {
    return (
            <div className="card">
                <img className="card__img" src={img} alt="img" />
                <h3 className="card__title">{title}</h3>
                <p className="card__text">SIYOSAT, FANTASTIKA</p>
                <div className="card__block">
                    <div className="star__block">
                        <img src={Star} alt="icon" />
                        <p className="star__number">4.7</p>
                    </div>
                    <div className="img__block">
                        <img src={Earphone} alt="img" />
                        <img src={Book} alt="img" />
                    </div>
                </div>
            </div>
    )
}