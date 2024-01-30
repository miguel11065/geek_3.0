import styled from 'styled-components'

export const HeaderBar = styled.header`
  background-color: #20b2aa;
  padding: 16px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .fav-cart {
    display: flex;
    grid-gap: 25px;
    font-size: 25px;
  }
`
export const HeaderSearch = styled.div`
  border-radius: 10px;

  input {
    width: 432px;
    height: 40px;
    padding: 8px;
    background-color: #d9d9d9;
    border: none;
    font-size: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;
  }

  button {
    width: 40px;
    height: 40px;
    padding: 8px;
    border: none;
    background-color: #663399;
    color: #d9d9d9;
    font-size: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #7f4db3;
  }
`

export const HeaderNavigation = styled.div`
  background-color: #167a75;
  padding: 10px 38px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }

  a {
    color: #d9d9d9;
    font-weight: bold;
    text-decoration: none;
  }
`
