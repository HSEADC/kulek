import React from 'react'

const O_Footer = () => {
  return (
    <div className="O_Footer">
      <div className="W_allInformationFooter">
        <div className="W_allInfoFooter">
          <div className="M_logoInfoMain">
            <img
              src="../../images/footer/A_bigLogoFooter.svg"
              alt=""
              className="A_bigLogoFooter"
            />
            <div className="W_russisInfoFooter">
              <div className="C_infoFooter">
                <div className="M_socLinksFooter">
                  <h1 className="A_titleSectionFooter">Соцсети</h1>
                  <div className="C_linksFooter">
                    <div className="W_linkIconTextFooter">
                      <img
                        src="../../images/footer/A_iconInstFooter.svg"
                        alt=""
                        className="A_iconFooter"
                      />
                      <a href="https://clck.ru/36HCrm">
                        <p className="A_linkTextFooter">eto.kulek*</p>
                      </a>
                    </div>
                    <div className="W_linkIconTextFooter">
                      <img
                        src="../../images/footer/A_iconTelFooter.svg"
                        alt=""
                        className="A_iconFooter"
                      />
                      <a href="https://t.me/eto_kulek">
                        <p className="A_linkTextFooter">eto.kulek</p>
                      </a>
                    </div>
                    <div className="W_linkIconTextFooter">
                      <img
                        src="../../images/footer/A_iconOdFooter.svg"
                        alt=""
                        className="A_iconFooter"
                      />
                      <a href="https://ok.ru/group/70000004399374">
                        <p className="A_linkTextFooter">кулёк</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="M_NamesFooter">
                  <h1 className="A_titleSectionFooter">Создатели</h1>
                  <div className="C_namesFooter">
                    <p className="A_linkTextFooter">Климова Ксения</p>
                    <p className="A_linkTextFooter">Орехова Софья</p>
                    <p className="A_linkTextFooter">Удод Константин</p>
                  </div>
                </div>
                <div className="M_NamesFooter">
                  <h1 className="A_titleSectionFooter">Контакты</h1>
                  <div className="C_namesFooter">
                    <a href="https://t.me/artxksu">
                      <p className="A_linkTextFooter">Telegram: @artxksu</p>
                    </a>
                    <a href="https://t.me/sonyerikson">
                      <p className="A_linkTextFooter">Telegram: @sonyerikson</p>
                    </a>
                    <a href="https://t.me/KonstUd">
                      <p className="A_linkTextFooter">Telegram: @KonstUd</p>
                    </a>
                  </div>
                </div>
              </div>
              <p className="A_russiaInfoFooter">
                * организация Meta, а также её продукт Instagram, признаны
                экстремистскими на территории РФ
              </p>
            </div>
          </div>
          <div className="W_logoInfoHSE">
            <img
              src="../../images/footer/A_logoHSE.svg"
              alt=""
              className="A_logoHSE"
            />
            <p className="A_russiaInfoFooter">
              Проект создан в рамках ОП Дизайн и программирование на базе Школы
              Дизайна НИУ ВШЭ
            </p>
          </div>
        </div>
        <p className="A_russiaInfoFooter">
          Кураторы проекта: <br />
          Софья Каем, Анна Комкова, Захар День
        </p>
      </div>
    </div>
  )
}

export default O_Footer
