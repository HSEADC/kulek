import React from 'react'

const M_cardSearch = ({ srcImg, typeCard, nameCard, descCard }) => {
  return (
    <div className="M_cardSearch">
      <img
        src={srcImg}
        alt="Картинка карточки"
        className="A_pictureCardSearch"
      />
      <div className="W_allTextSearch">
        <p className="A_typeCardSearch">{typeCard}</p>
        <h1 className="A_nameArticleSearch">{nameCard}</h1>
        <p className="A_subArticleSearch">{descCard}</p>
      </div>
    </div>
  )
}

export default M_cardSearch
